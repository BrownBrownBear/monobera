"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { type OrderByEnum, type StatusEnum } from "../types";

export default function GovernanceByStatus({
  proposalStatus,
  orderBy,
}: {
  proposalStatus: StatusEnum;
  orderBy: OrderByEnum;
}) {
  return (
    <div className="container w-full max-w-[926px]">
      <div className="text-forergound text-center text-5xl font-bold leading-[48px]">
        🗳️Vote on proposals or <br />
        create your own
      </div>
      {proposalStatus} {orderBy}
      {/* <ListProposals status={StatusEnum.Voting} />
      <ListProposals status={StatusEnum.Pending} /> */}
      {/* <Tooltip text="test" /> */}
    </div>
  );
}
