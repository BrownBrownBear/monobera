import React from "react";
import { formatter, truncateHash } from "@bera/berajs";
import { blockExplorerUrl } from "@bera/config";
import { DataTable } from "@bera/shared-ui";
import Identicon from "@bera/shared-ui/src/identicon";
// import { Button } from "@bera/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@bera/ui/tabs";
import { formatUnits, type Address } from "viem";

import {
  delegators_columns,
  recent_votes_columns,
} from "~/columns/validator_activities_table_columns";

export default function ValidatorActivitiesTable({
  validatorAddress,
}: {
  validatorAddress: Address;
}) {
  const [tab, _setTab] = React.useState<"recent-votes" | "delegators">(
    "delegators",
  );

  // const getDelegatorPercentage = (shares: bigint) => {
  //   const s = Number(formatUnits(shares, 18));
  //   const total = Number(formatUnits(validator?.delegatorShares ?? 0n, 18));
  //   return s / total;
  // };

  // const delegatorData = data?.map(
  //   (data: { delegator: Address; shares: bigint; balance: bigint }) => ({
  //     delegator_address: (
  //       <div className="flex w-[145px] items-center gap-2 hover:underline">
  //         <Identicon account={data.delegator} />
  //         {truncateHash(data.delegator)}
  //       </div>
  //     ),
  //     bgt_amount: (
  //       <div className="flex gap-1">
  //         <div>
  //           {formatter.format(Number(formatUnits(data.balance, 18)))} BGT
  //         </div>
  //         <div>({(getDelegatorPercentage(data.shares) * 100).toFixed(2)}%)</div>
  //       </div>
  //     ),
  //     bgt: data.balance,
  //     // delegated_since: <div className="flex w-[108px] gap-1">21 days ago</div>,
  //   }),
  // );

  return (
    <div className="flex flex-col gap-4">
      {/* <Tabs defaultValue={tab} className="mx-auto w-fit">
        <TabsList className="w-full">
          {(["recent-votes", "delegators"] as const).map((value) => (
            <TabsTrigger
              value={value}
              key={value}
              className="flex-1 capitalize"
              onClick={() => setTab(value)}
            >
              {value.replaceAll("-", " ")}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs> */}
      {/* <SearchInput placeholder="Search" /> */}
      <div className="w-full">
        {tab === "recent-votes" ? (
          <DataTable
            columns={recent_votes_columns}
            data={[]}
            className="min-w-[926px]"
          />
        ) : (
          <div className="flex w-full flex-col items-center gap-4">
            {/* <DataTable
              columns={delegators_columns}
              data={delegatorData ?? []}
              className="min-w-[926px]"
              onRowClick={(row) =>
                window.open(
                  `${blockExplorerUrl}/address/${
                    data[Number(row.id)]?.delegator ?? ""
                  }`,
                  "_blank",
                )
              }
            /> */}
            {/* <Button
              onClick={() => setSize(size + 1)}
              disabled={isLoading || isReachingEnd}
              variant="outline"
            >
              {isLoading
                ? "Loading..."
                : isReachingEnd
                ? "No More Delegators"
                : "View More"}
            </Button> */}
          </div>
        )}
      </div>
    </div>
  );
}
