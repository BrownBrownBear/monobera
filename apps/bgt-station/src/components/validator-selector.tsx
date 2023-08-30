import React, { useMemo } from "react";
import {
  usePollAccountDelegations,
  usePollActiveValidators,
  usePollDelegatorValidators,
  usePollGlobalValidatorBribes,
  type Validator,
} from "@bera/berajs";
import { formatter } from "@bera/berajs/src/utils";
import {
  DataTable,
  IconList,
  SearchInput,
  ValidatorIcon,
} from "@bera/shared-ui";
import { Button } from "@bera/ui/button";
import { Dialog, DialogContent } from "@bera/ui/dialog";
import { Icons } from "@bera/ui/icons";
import { formatUnits, getAddress, type Address } from "viem";

import { ValidatorGauge } from "~/app/validators/validators-table";
import { validator_table_columns } from "~/columns/validator-table-columns";
import { usePollPrices } from "~/hooks/usePollPrices";

export default function ValidatorSelector({
  validatorAddress,
  onSelectValidator,
  showDelegated = false,
}: // emptyMessage,
{
  validatorAddress?: string;
  onSelectValidator?: (address: string) => void;
  showDelegated?: boolean;
  // emptyMessage?: string;
}) {
  const { useActiveValidator } = usePollActiveValidators();

  const validValidator = useActiveValidator(validatorAddress);
  const [open, setOpen] = React.useState(false);

  const { useDelegatorValidators } = usePollDelegatorValidators();
  const delegatedValidators: Validator[] | undefined = useDelegatorValidators();

  const { usePrices } = usePollPrices();
  const prices = usePrices();
  const { usePolValidators, useDelegatorPolValidators } =
    usePollGlobalValidatorBribes(prices);
  const validators = usePolValidators();
  const delegatorPolValidators = useDelegatorPolValidators(
    delegatedValidators?.map((d) => d.operatorAddr),
  );

  const filteredValidators = useMemo(
    () => (showDelegated ? delegatorPolValidators : validators),
    [validators, showDelegated],
  );

  return (
    <div>
      <Button
        variant="outline"
        className="bg-background shadow"
        onClick={() => setOpen(true)}
      >
        {validValidator ? (
          <div className="flex items-center gap-2 text-base font-medium leading-normal">
            <ValidatorIcon
              address={validValidator.operatorAddr as Address}
              className="h-8 w-8"
            />
            {validValidator.description.moniker}
            <Icons.chevronDown className="relative h-3 w-3" />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-base font-medium leading-normal">
            Select validator
            <Icons.chevronDown className="relative h-3 w-3" />
          </div>
        )}
      </Button>
      <ValidatorModal
        open={open}
        validators={filteredValidators ?? []}
        onSelect={(address) => onSelectValidator && onSelectValidator(address)}
        onClose={() => setOpen(false)}
        // emptyMessage={emptyMessage}
      />
    </div>
  );
}

export const VP = ({
  operatorAddr,
  tokens,
}: {
  operatorAddr: string;
  tokens: bigint;
}) => {
  const { usePercentageDelegated } = usePollActiveValidators();
  const percentageDelegated = usePercentageDelegated(operatorAddr);

  return (
    <div className="flex h-full w-24 items-center">
      {formatter.format(Number(formatUnits(tokens, 18)))} (
      {percentageDelegated?.toFixed(2)}%)
    </div>
  );
};

const ValidatorModal = ({
  onClose,
  open,
  validators,
  onSelect,
}: // emptyMessage,
{
  onClose: () => void;
  open: boolean;
  validators: Validator[];
  onSelect: (address: string) => void;
  // emptyMessage?: string;
}) => {
  const tableV = React.useMemo(
    () =>
      validators.map((validator: Validator) => ({
        address: validator.operatorAddr,
        validator: (
          <div className="flex w-[100px] items-center gap-1">
            <ValidatorIcon
              address={validator.operatorAddr as Address}
              className="h-8 w-8"
            />
            {validator.description.moniker}
          </div>
        ),
        bgt_delegated: <BGTDelegated operatorAddr={validator.operatorAddr} />,
        // vp: <VP validator={validator} />,
        vp: 420,
        commission: validator.commission.commissionRates.rate,
        vapy: 6.9,
        mwg: <ValidatorGauge address={validator.operatorAddr} />,
        bribes: (
          <IconList
            showCount={3}
            iconList={[
              "/icons/eth-icons.svg",
              "/icons/atom-icons.svg",
              "/icons/usdc-icons.svg",
              "/icons/usdt-icons.svg",
              "/icons/btc-icons.svg",
              "/icons/honey-icons.svg",
              "/icons/bera-icons.svg",
            ]}
          />
        ),
      })),
    [validators],
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full justify-center sm:max-w-fit">
        <div className="flex w-[100vw] flex-col gap-4 p-6 sm:w-fit">
          <div className="text-lg font-semibold leading-7">
            Validator select
          </div>
          <div className="flex justify-between">
            <SearchInput
              placeholder="Search by name, address, or token"
              className="w-full md:w-[400px]"
            />
            {/* <div className="hidden gap-2 md:flex ">
              <Button size="sm" variant="secondary">
                Filter by bribe
              </Button>
              <Button size="sm" variant="secondary">
                Filter by pool
              </Button>
            </div> */}
          </div>
          <DataTable
            columns={validator_table_columns}
            data={tableV}
            onRowClick={(value: any) => {
              onSelect(value.original.address);
              onClose();
            }}
            className="min-w-[1000px]"
            // emptyMessage={emptyMessage}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const BGTDelegated = ({ operatorAddr }: { operatorAddr: string }) => {
  const { useSelectedAccountDelegation, isLoading } = usePollAccountDelegations(
    getAddress(operatorAddr),
  );
  const bgtDelegated = useSelectedAccountDelegation();
  return (
    <div className="flex h-full w-24 items-center justify-center">
      {isLoading
        ? "Loading"
        : bgtDelegated && Number(bgtDelegated) === 0
        ? "0 BGT"
        : Number(bgtDelegated ?? 0).toFixed(2)}
    </div>
  );
};
