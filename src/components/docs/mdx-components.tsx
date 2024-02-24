import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import { Code } from "@/components/ui/typography/Code";
import { Heading } from "@/components/ui/typography/Heading";
import { Link } from "@/components/ui/typography/Link";
import { Text } from "@/components/ui/typography/Text";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentExample } from "@/components/docs/component-example";
import { DecorativeBox } from "@/components/docs/DecorativeBox";
import { MdxCard } from "@/components/docs/mdx-card";
import { Icons } from "@/components/icons";
import * as uicomponents from "@/components/ui";

const components = {
  ...uicomponents,
  Icons,
  h1: ({ className, ...props }) => (
    <Heading asChild size="5xl" className="mb-3 scroll-mt-9">
      <h1 {...props}></h1>
    </Heading>
  ),
  h2: ({ className, id, children, ...props }) => (
    <Heading asChild size="4xl" className="mb-2 mt-7 scroll-mt-9">
      <h2 {...props}>
        <Link
          id={id}
          href={`#${id}`}
          underline="hover"
          className={cn("text-fg inline-flex items-center gap-2", className)}
        >
          {children}
          <Icons.link aria-hidden className="size-4" />
        </Link>
      </h2>
    </Heading>
  ),
  h3: ({ className, id, children, ...props }) => (
    <Heading asChild size="3xl" className="mb-2 mt-7 scroll-mt-9">
      <h3 {...props}>
        <Link
          id={id}
          href={`#${id}`}
          underline="hover"
          className={cn("text-fg inline-flex items-center gap-2", className)}
        >
          {children}
          <Icons.link aria-hidden className="size-4" />
        </Link>
      </h3>
    </Heading>
  ),
  h4: ({ className, children, id, ...props }) => (
    <Heading asChild size="2xl" className="mb-3 mt-6 scroll-mt-9">
      <h4 {...props}>{children}</h4>
    </Heading>
  ),
  h5: ({ className, id, children, ...props }) => (
    <Heading asChild size="xl" className="mb-3 mt-6 scroll-mt-9">
      <h5 {...props}>{children}</h5>
    </Heading>
  ),
  h6: ({ className, id, children, ...props }) => (
    <Heading asChild size="lg" className="mb-3 mt-6 scroll-mt-9">
      <h4 {...props}>{children}</h4>
    </Heading>
  ),
  a: ({ className, href, children, ...props }) => {
    if (href.startsWith("http")) {
      return (
        <Link {...props} asChild>
          <a href={href} target="_blank" rel="noopener"></a>
        </Link>
      );
    }
    return (
      <Link {...props} asChild>
        <NextLink href={href}>{children}</NextLink>
      </Link>
    );
  },
  p: ({ className, ...props }) => (
    <Text as="p" size="base" className="mb-3" {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn("list-circle mb-3 flex flex-col gap-2 pl-4", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("mb-3 list-decimal pl-4", className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn(className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "[&>*]:text-fgsubtle mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-panel m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <CodeBlock className={cn(className)} {...props} />
  ),
  code: ({ className, ...props }) => {
    // if it's a codeblock (``` block in markdown), it'll have a data-theme from rehype
    const isInlineCode = !props["data-theme"];
    return isInlineCode ? (
      <Code className={className} {...props} />
    ) : (
      <code
        className={cn(
          "text-fg grid min-w-full break-words rounded-none border-0 bg-transparent p-0 text-sm",
          className
        )}
        {...props}
      />
    );

    // <code
    //   className={cn("relative font-mono text-sm leading-snug", className)}
    //   {...props}
    // />
  },
  Image: (props: React.ComponentProps<typeof Image>) => (
    <Image {...props} alt={props.alt} />
  ),
  DecorativeBox,
  ComponentExample,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
