import { useCallback } from "react";
import { ReactMutation, useMutation as useConvexMutation } from "convex/react";
import { FunctionReference } from "convex/server";

import { useSessionContext } from "@/components/providers/SessionProvider";

type Args = { sessionId: string | null };
type Mutation = FunctionReference<"mutation", "public", Args>;

// custom hook to extend convex mutation hook to add sessionId.
export const useMutation = (
  mutation: Mutation
): ReactMutation<
  FunctionReference<"mutation", "public", Omit<Mutation["_args"], "sessionId">>
> => {
  const doMutation = useConvexMutation(mutation);
  const sessionId = useSessionContext().sessionId;
  return useCallback(
    (args: Omit<Mutation["_args"], "sessionId">) => {
      return doMutation({ ...args, sessionId } as any);
    },
    [doMutation, sessionId]
  ) as any; // We don't support optimistic updates
};
