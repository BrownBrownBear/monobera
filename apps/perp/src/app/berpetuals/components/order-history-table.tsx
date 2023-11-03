import { useMemo } from "react";

import { AsesetCardMobile } from "~/app/portfolio/userAssets";
import { getAssetCardList } from "../getAssetCards";
import {
  history_columns,
  orders_columns,
  pnl_columns,
  positions_columns,
} from "./columns";
import { DataTable } from "./data-table";
import type { IClosedTrade, ILimitOrder, IMarketOrder } from "./order-history";

export interface IRow {
  key: string;
  value: React.ReactNode;
}

export interface ICards {
  title: React.ReactNode;
  rows: IRow[];
  footer: React.ReactNode | undefined;
}

export function OrderHistoryTable({
  tab,
  openPositons,
  openOrders,
  history,
}: {
  tab: "positions" | "orders" | "history" | "pnl";
  openPositons: IMarketOrder[];
  openOrders: ILimitOrder[];
  history: IClosedTrade[];
}) {
  const assetCardItems = useMemo(() => {
    return getAssetCardList({
      marketOrderItems: openPositons,
      limitOrderItems: openOrders,
      historyItems: history,
    });
  }, [openPositons, openOrders, history]);

  console.log("open pos", openPositons);
  return (
    <div className="relative w-full overflow-x-auto">
      {tab === "positions" && (
        <DataTable
          columns={positions_columns}
          data={openPositons ?? []}
          className="hidden w-full min-w-[1200px] sm:block"
        />
      )}
      {tab === "orders" && (
        <DataTable
          columns={orders_columns}
          data={openOrders ?? []}
          className="hidden w-full min-w-[1000px] sm:block"
        />
      )}
      {tab === "history" && (
        <DataTable
          columns={history_columns}
          data={history ?? []}
          className="hidden w-full min-w-[850px] sm:block"
        />
      )}
      {tab === "pnl" && (
        <DataTable
          columns={pnl_columns}
          data={history ?? []}
          className="hidden w-full min-w-[1200px] sm:block"
        />
      )}
      <div className="flex flex-col gap-8 px-6 py-8 sm:hidden">
        {tab === "positions" &&
          assetCardItems.marketList.map((item, index) => (
            <AsesetCardMobile card={item} key={index} />
          ))}
        {tab === "orders" &&
          assetCardItems.limitList.map((item, index) => (
            <AsesetCardMobile card={item} key={index} />
          ))}
        {tab === "history" &&
          assetCardItems.historyList.map((item, index) => (
            <AsesetCardMobile card={item} key={index} />
          ))}
        {tab === "pnl" &&
          assetCardItems.pnlList.map((item, index) => (
            <AsesetCardMobile card={item} key={index} />
          ))}
      </div>
    </div>
  );
}
