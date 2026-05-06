import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

function CustomLink(props: ComponentPropsWithoutRef<"a">) {
  const href = props.href ?? "";
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...(props as ComponentPropsWithoutRef<typeof Link>)}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export const mdxComponents: MDXComponents = {
  a: CustomLink,
};
