import { bgtClient } from "@bera/graphql";
import { GetGauges, GetGaugesQuery } from "@bera/graphql/pol";

import { BeraConfig } from "~/types";

export const getGaugesData = async ({
  config,
}: {
  config: BeraConfig;
}): Promise<GetGaugesQuery | undefined> => {
  try {
    const result = await bgtClient.query({
      query: GetGauges
    });

    if (!config.subgraphs?.polSubgraph) {
        throw new Error("pol subgraph uri is not found in config");
      }

    return result.data;
  } catch (e) {
    console.error("getGaugesData:", e);
    return undefined;
  }
};