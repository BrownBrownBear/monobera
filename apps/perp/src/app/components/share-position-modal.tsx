import { error } from "console";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { formatUsd, useBeraJs } from "@bera/berajs";
import { cloudinaryUrl, perpsUrl } from "@bera/config";
import { Button } from "@bera/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@bera/ui/dialog";
import { Icons } from "@bera/ui/icons";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import { TextArea } from "@bera/ui/text-area";

import { formatFromBaseUnit } from "~/utils/formatBigNumber";
import { MarketTradePNL } from "~/app/components/market-trade-pnl";
import { PositionTitle } from "~/app/components/position-title";
import type { IMarketOrder, IOpenTradeCalculated } from "~/types/order-history";

const LOSSES_CARDS_URLS = [
  `${cloudinaryUrl}/BERPS/twitter_card_bearish`,
  `${cloudinaryUrl}/BERPS/twitter_card_bearish`,
  `${cloudinaryUrl}/BERPS/twitter_card_bullish`,
];

const GAINS_CARDS_URLS = [
  `${cloudinaryUrl}/BERPS/twitter_card_bullish`,
  `${cloudinaryUrl}/BERPS/twitter_card_bullish`,
  `${cloudinaryUrl}/BERPS/twitter_card_bearish`,
];

const Card = ({ order, account, qrCodeRef }: any) => {
  const isPositive = Number(order.pnl) > 0;

  const percentage = useMemo(() => {
    if (!order.pnl || !order.initial_pos_token) return "0";
    const positionSizeBN = formatFromBaseUnit(order.initial_pos_token, 18);
    const currentSize = positionSizeBN.plus(formatFromBaseUnit(order.pnl, 18));
    const percentage = currentSize
      .minus(positionSizeBN)
      .div(positionSizeBN)
      .times(100);
    return percentage.isFinite() ? percentage.dp(2).toString(10) : "-";
  }, [order]);

  const date = new Date(Number(order.timestamp_close) * 1000);

  const highlightColour = isPositive ? "text-green-700" : "text-red-200";
  const cardText = isPositive ? "and jeeted" : "and got rekt";

  return (
    <div className="relative md:h-[400px] md:w-[600px]">
      <>
        <Image
          src={isPositive ? GAINS_CARDS_URLS[0] : LOSSES_CARDS_URLS[0]}
          fill
          alt="Card background"
          className="absolute inset-0 z-0"
        />
        <div className="z-10 flex h-full flex-col items-start px-6 py-4">
          {/* Close timestamp */}
          <div className="flex justify-end self-end text-xs font-semibold">
            <div className="mr-2 opacity-80 ">CLOSE TIMESTAMP</div>
            <div className="z-10">
              {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </div>
          </div>
          {/* Main Content */}
          <div className="z-10 mt-16 flex gap-1 text-3xl font-bold leading-8">
            <div>Longed</div>
            <Image
              src={order.market?.imageUri ?? ""}
              alt={"selectedMarket"}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>{order.market?.name}</div>
          </div>
          <div className="z-10 mt-2 flex gap-2 text-3xl font-bold leading-8">
            <div>at</div>
            <div className={highlightColour}>{` ${order.leverage}x `}</div>
            <div>{cardText}</div>
          </div>
          <div className="z-10 my-2 mt-8 flex text-7xl font-bold">
            <div className={highlightColour}>{`${
              Number(percentage) > 0 ? `+${percentage}` : percentage
            }%`}</div>
          </div>
          {/* Details */}
          <div className="z-10 mt-auto flex w-full flex-row items-end text-xs font-semibold">
            <div className="flex flex-col">
              <div className="opacity-80">OPEN PRICE</div>
              <div className="">
                {formatUsd(
                  formatFromBaseUnit(order.open_price ?? "0", 10).toString(10),
                )}
              </div>
            </div>
            <div className="ml-12 flex flex-col">
              <div className="opacity-80">CLOSE PRICE</div>
              <div className="">
                {formatUsd(
                  formatFromBaseUnit(order.close_price ?? "0", 10).toString(10),
                )}
              </div>
            </div>
            <div className="text-md ml-auto flex items-end">
              <div className="mr-2 opacity-80">REFERRAL LINK</div>
              <canvas
                ref={qrCodeRef}
                id="qr-code"
                className="rounded-xs"
              ></canvas>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Card;

export const SharePositionModal = ({
  trigger,
  order,
  className = "",
  controlledOpen,
  onOpenChange,
}: {
  trigger?: any;
  disabled?: boolean;
  order: IMarketOrder;
  className?: string;
  controlledOpen?: boolean;
  onOpenChange?: (state: boolean) => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const { account } = useBeraJs();
  useEffect(() => {
    if (controlledOpen && controlledOpen !== open) {
      setOpen(controlledOpen);
    }
  }, [controlledOpen, open]);

  // Capture card as image

  const cardRef = useRef(null);
  const qrCodeRef = useRef(null);
  const [image, setImage] = useState("");

  const handleOpenChange = (state: boolean) => {
    if (!state) {
      setImage("");
    }
    onOpenChange?.(state);
    setOpen(state);
  };

  const handleCapture = useCallback(async () => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardRef]);

  const callbackCardRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && qrCodeRef.current !== null) {
        QRCode.toCanvas(
          qrCodeRef.current,
          `${perpsUrl}/berpetuals?ref=${account}`,
          { errorCorrectionLevel: "H", scale: 1.5, margin: 3 },
        );
      }
    },
    [qrCodeRef],
  );

  return (
    <div className={className}>
      <div onClick={() => handleOpenChange(true)} className="h-full w-full">
        {trigger}
      </div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="flex w-fit flex-col gap-2 p-4 sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="my-2">Share Position</DialogTitle>
          </DialogHeader>
          <div className="card-ref mb-2" ref={callbackCardRef}>
            <div ref={cardRef}>
              <Card order={order} account={account} qrCodeRef={qrCodeRef} />
            </div>
          </div>
          <TextArea className="mb-2 rounded-sm"
              placeholder="Yo heres my referral link. check out this trade. ooga booga"
          />
          <div className="flex w-full gap-2">
            <Button variant={"secondary"} className="flex-1" onClick={handleCapture}>
              <Icons.xLogo className="mr-2" />
              <span>Share to Twitter</span>
            </Button>
            <Button variant={"secondary"} className="flex-1" onClick={handleCapture}>
              <Icons.download className="mr-2" />
              <span>Download Card</span>
            </Button>
          </div>
          {image && (
            <div>
              <img src={image} alt="Captured Card" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
