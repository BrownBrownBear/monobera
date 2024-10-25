import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({
  path: ["../../.env.local", "../../.env"],
});

const governanceSchemaUrl = process.env.NEXT_PUBLIC_GOVERNANCE_SUBGRAPH_URL;
const chainSchemaUrl = process.env.NEXT_PUBLIC_CHAIN_BLOCKS_SUBGRAPH_URL;
const polSchemaUrl = process.env.NEXT_PUBLIC_POL_SUBGRAPH_URL;
if (!governanceSchemaUrl || !chainSchemaUrl || !polSchemaUrl) {
  throw new Error(
    "GraphQL schema URLs are not defined in the environment variables.",
  );
}
const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./src/modules/governance/codegen.ts": {
      schema: governanceSchemaUrl,
      documents: "./src/modules/governance/**/*.ts",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        {
          "typescript-document-nodes": {
            gqlImport: "@apollo/client#gql",
          },
        },
      ],
      config: {
        gqlImport: "@apollo/client#gql",
        withHooks: true,
      },
    },
    "./src/modules/pol/codegen.ts": {
      schema: polSchemaUrl,
      documents: "./src/modules/pol/**/*.ts",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        {
          "typescript-document-nodes": {
            gqlImport: "@apollo/client#gql",
          },
        },
      ],
      config: {
        gqlImport: "@apollo/client#gql",
        withHooks: true,
      },
    },
    "./src/modules/chain/codegen.ts": {
      schema: chainSchemaUrl,
      documents: "./src/modules/chain/**/*.ts",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        {
          "typescript-document-nodes": {
            gqlImport: "@apollo/client#gql",
          },
        },
      ],
      config: {
        withHooks: true,
        gqlImport: "@apollo/client#gql",
      },
    },
  },
};

export default config;
