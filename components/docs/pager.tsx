import Link from "next/link";
import { Doc } from "contentlayer/generated";

import { docsConfig } from "@/config/docs";
import { NavLink } from "@/components/ui/navigation/NavLinks";
import { Icons } from "@/components/icons";

interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <NavLink variant="ghost">
          <Link href={pager.prev.href}>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            {pager.prev.title}
          </Link>
        </NavLink>
      )}
      {pager?.next && (
        <NavLink variant="ghost" className="ml-auto">
          <Link href={pager.next.href}>
            {pager.next.title}
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </NavLink>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
