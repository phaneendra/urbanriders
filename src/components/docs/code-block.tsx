"use client";

import * as React from "react";
import copy from "copy-to-clipboard";

import { cn } from "@/lib/utils";
import { IconButton } from "@/components/ui/elements/IconButton";
import { ScrollArea } from "@/components/ui/elements/ScrollArea";
import { Box } from "@/components/ui/layout/Box";
import { Pre } from "@/components/ui/typography/Pre";
import { Icons } from "@/components/icons";

const CodeBlock = (props) => {
  const [code, setCode] = React.useState("");
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  return (
    <Box className="bg-panel shadow-divider relative my-5 rounded-sm p-2 shadow-inner">
      <ScrollArea scrollbars="both" className="max-h-[30vh]">
        <Pre
          {...props}
          ref={(node) => {
            if (node) {
              // remove double line breaks
              const codeElement = node.querySelector("code");
              const code = codeElement?.innerText.replace(/\n{2}/g, "\n");
              if (code) setCode(code);
            }
          }}
        />
      </ScrollArea>
      <IconButton
        className={cn("absolute right-0 top-0 mr-2 mt-2")}
        variant="soft"
        aria-label="Copy to clipboard"
        onClick={() => {
          copy(code);
          setHasCopied(true);
        }}
      >
        {hasCopied ? <Icons.check /> : <Icons.clipboard />}
      </IconButton>
    </Box>
  );
};

export { CodeBlock };
