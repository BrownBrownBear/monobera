"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tooltip } from "@bera/shared-ui";
import { Button } from "@bera/ui/button";
import { Card } from "@bera/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@bera/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@bera/ui/form";
import { Icons } from "@bera/ui/icons";
import { Input } from "@bera/ui/input";
import { Switch } from "@bera/ui/switch";
import { TextArea } from "@bera/ui/text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";

import { BaseFormSchema, ProposalFormSchema, ProposalTypeEnum } from "../types";
import CommunityForm from "./community-pool-spend-form";
import ExecuteForm from "./execute-contract-form";
import ParameterForm from "./parameter-change-form";

export default function NewProposal({
  searchParams,
}: {
  searchParams: {
    type: ProposalTypeEnum;
  };
}) {
  const router = useRouter();
  const triggerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState("w-auto");

  useEffect(() => {
    if (triggerRef.current) {
      const width = triggerRef.current.offsetWidth;
      setContentWidth(`w-[${width}px]`);
    }
  }, []);

  const form = useForm<z.infer<typeof BaseFormSchema>>({
    resolver: zodResolver(BaseFormSchema),
  });

  function onSubmit(values: z.infer<typeof proposalFormSchema>) {
    console.log("submit", values);
  }

  return (
    <div className="mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="mx-auto flex w-full max-w-[500px] flex-col justify-start gap-8 p-6">
            <div className="inline-flex flex-col justify-start gap-3">
              <div className="relative text-lg font-semibold leading-7 text-foreground">
                New proposal {contentWidth}
                <Icons.close
                  className="absolute right-0 top-0 h-5 w-5 hover:cursor-pointer"
                  onClick={() => router.push(`/governance`)}
                />
              </div>
              <div className="flex h-[175px] w-full max-w-[452px] items-center justify-center rounded-xl bg-info-foreground text-white">
                picture place holder
              </div>
            </div>

            <div className="inline-flex flex-col justify-start gap-2">
              <div className="text-sm font-semibold leading-tight">
                Type <Tooltip text="test" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div
                    className="inline-flex h-[42px] w-full flex-col items-start justify-start hover:cursor-pointer"
                    ref={triggerRef}
                  >
                    <div className=" inline-flex w-full items-center justify-start gap-2.5 rounded-xl border border-gray-200 px-3 py-2">
                      <div className="relative shrink grow basis-0 caption-top text-sm font-normal capitalize leading-normal text-stone-700">
                        {searchParams.type.replaceAll("-", " ")}
                        <Icons.chevronDown className="absolute right-0 top-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className={`${contentWidth}`}
                >
                  {Object.values(ProposalTypeEnum).map((type: string) => (
                    <DropdownMenuItem
                      key={`proposal-option-${type}`}
                      onClick={() =>
                        router.push(`/governance/create?type=${type}`)
                      }
                      className="capitalize"
                    >
                      {type.replaceAll("-", " ")}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="inline-flex flex-col justify-start gap-2">
                  <div className="text-sm font-semibold leading-tight">
                    Title
                  </div>
                  <FormControl>
                    <Input
                      type="text"
                      id="proposal-title"
                      placeholder="Ooga booga"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="inline-flex flex-col justify-start gap-2">
              <div className="text-sm font-semibold leading-tight">
                Forum discussion link <Tooltip text="test" />
              </div>
              <Input
                type="text"
                id="forum-discussion-link"
                placeholder="Paste link here"
                // value={"forum-discussion-link"}
                // onChange={(e) => {}}
              />
            </div>

            <div className="inline-flex flex-col justify-start gap-2">
              <div className="text-sm font-semibold leading-tight">
                Description
              </div>
              <TextArea
                name="message"
                id="message"
                placeholder="Tell us about your proposal"
              />
            </div>

            <div className="inline-flex flex-col justify-start gap-2">
              <div className="text-sm font-semibold leading-tight">
                Expedite <Tooltip text="test" />
              </div>
              <Switch
                id="proposal-expedite"
                // checked={useSignatures}
                // onCheckedChange={(checked) => setUseSignatures(checked)}
              />
            </div>

            <div className="inline-flex flex-col justify-start gap-2">
              <div className="text-sm font-semibold leading-tight">
                Initial deposit <Tooltip text="test" />
              </div>
              <Input
                type="number"
                id="initial-deposit"
                placeholder="0.0"
                endAdornment="BGT"
                // value={"forum-discussion-link"}
                // onChange={(e) => {}}
              />
            </div>

            {searchParams.type === ProposalTypeEnum.COMMUNITY_POOL_SPEND && (
              <CommunityForm />
            )}

            {searchParams.type === ProposalTypeEnum.EXECUTE_CONTRACT && (
              <ExecuteForm />
            )}

            {searchParams.type === ProposalTypeEnum.PARAMETER_CHANGE && (
              <ParameterForm />
            )}

            <Button type="submit">Submit</Button>
          </Card>
        </form>
      </Form>
    </div>
  );
}
