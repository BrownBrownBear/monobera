import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@bera/ui/button";
import { Icons } from "@bera/ui/icons";

import { type Market } from "~/hooks/useMarkets";
import Card from "./card";
import BorrowBtn from "./modals/borrow-button";
import RepayBtn from "./modals/repay-button";
import SupplyBtn from "./modals/supply-button";
import WithdrawBtn from "./modals/withdraw-button";

export default function UserTokenCard({
  market,
  type,
}: {
  market: Market;
  type: "user-supply" | "user-borrow" | "supply" | "borrow";
}) {
  const router = useRouter();

  return (
    <Card
      key={market.title}
      className="flex flex-col items-center justify-between gap-6 p-4 md:h-[86px] md:flex-row md:gap-4"
    >
      <div className="flex w-full justify-between gap-8 md:w-[300px] md:justify-start">
        <div className="flex items-center gap-4 ">
          <Image
            src={"/honey.png"}
            alt={market.title}
            className="rounded-full"
            width={48}
            height={48}
          />
          <div>
            {type === "supply" && (
              <div className="flex items-center gap-1 text-xs font-medium leading-tight text-muted-foreground">
                <Icons.wallet className="relative h-3 w-3 rounded-lg" />
                Wallet Balance
              </div>
            )}
            <div className="h-8 text-lg font-bold">$8.28M ETH</div>
            <div className="text-xs font-medium leading-tight">$69.6K</div>
          </div>
        </div>
        {type === "user-supply" && (
          <div className="flex flex-col">
            <div className="text-xs leading-5 text-muted-foreground">
              Earning
            </div>
            <div className="text-lg font-bold text-success-foreground">
              6.69%
            </div>
          </div>
        )}

        {(type === "user-borrow" || type === "borrow") && (
          <div className="flex flex-col">
            <div className="text-xs leading-5 text-muted-foreground">
              Loan Interest
            </div>
            <div className="text-lg font-bold text-yellow-600">10.69%</div>
          </div>
        )}

        {type === "supply" && (
          <div className="flex flex-col">
            <div className="text-xs leading-5 text-muted-foreground">APY</div>
            <div className="text-lg font-bold text-success-foreground">
              6.69%
            </div>
          </div>
        )}
      </div>

      <div className="grow-1 flex w-full items-center gap-2 md:w-fit">
        {type === "user-supply" && <SupplyBtn />}
        {type === "user-supply" && <WithdrawBtn />}
        {type === "user-borrow" && <BorrowBtn />}
        {type === "user-borrow" && <RepayBtn />}
        {type === "supply" && <SupplyBtn />}
        {type === "borrow" && <BorrowBtn />}

        {(type === "borrow" || type === "supply") && (
          <Button
            variant={"secondary"}
            onClick={() =>
              router.push(
                "/markets/address=0x20f33CE90A13a4b5E7697E3544c3083B8F8A51D4",
              )
            }
          >
            <Icons.info />
          </Button>
        )}
      </div>
    </Card>
  );
}