import { useQuery as useConvexQuery } from "convex/react";
import { FunctionReference } from "convex/server";

import { useSessionContext } from "@/components/providers/SessionProvider";

type Args = { sessionId: string | null };
type Query = FunctionReference<"query", "public", Args>;

// custom hook to extend convex query hook to add sessionId.
export const useQuery = (
  query: Query,
  args: Omit<Query["_args"], "sessionId">
): Query["_returnType"] | undefined => {
  const sessionId = useSessionContext().sessionId;
  return useConvexQuery(query, { ...args, sessionId } as any);
};
