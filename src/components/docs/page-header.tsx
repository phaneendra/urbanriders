import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/typography/Heading";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        {/* <h1 className="font-heading inline-block text-4xl lg:text-5xl">
          {heading}
        </h1> */}
        <Heading fluid="xl" className="inline-block">
          {heading}
        </Heading>
        {text && <p className="text-fgsubtle text-lg">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  );
}
