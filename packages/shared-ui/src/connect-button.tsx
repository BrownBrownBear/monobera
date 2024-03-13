"use client";

import { Button } from "@bera/ui/button";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";
import { useBeraJs } from "@bera/berajs";
import { cn } from "@bera/ui";
import { Icons } from "@bera/ui/icons";

import ConnectedWalletPopover from "./connected-wallet-popover";

export const ConnectButton = ({
  className,
  isNavItem = false,
  isHoney = false,
  btnClassName,
  onOpen,
}: {
  className?: string;
  isNavItem?: boolean;
  isHoney?: boolean;
  btnClassName?: string;
  onOpen?: () => void;
}) => {
  const { isConnected, isWrongNetwork, isReady } = useBeraJs();
  return (
    <RainbowConnectButton.Custom>
      {({
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className={cn("flex w-fit", className)}
          >
            {!isConnected && (
              <Button
                onClick={() => {
                  openConnectModal();
                  onOpen?.();
                }}
                type="button"
                className={cn(
                  "w-full gap-2",
                  !isNavItem && "font-semibold",
                  btnClassName,
                )}
              >
                <Icons.wallet
                  className={cn("h-4 w-4", !isNavItem && "h-6 w-6")}
                />
                Connect
              </Button>
            )}
            {isWrongNetwork && isConnected && (
              <Button
                onClick={openChainModal}
                type="button"
                className={cn("w-full", btnClassName)}
              >
                Wrong network
              </Button>
            )}
            {isReady && <ConnectedWalletPopover isHoney={isHoney} />}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};
