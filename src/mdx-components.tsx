import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components
    a: (props: ComponentPropsWithoutRef<"a">) => {
      const { href, children, ...rest } = props;
      if (href?.toString().startsWith("/")) {
        return (
          <Link href={href as string} {...(rest as any)}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    },
    // Typography components with Tailwind classes
    h1: (props: any) => (
      <h1 className="text-4xl font-bold mb-6 text-foreground" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="text-3xl font-semibold mb-4 text-foreground" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="text-2xl font-semibold mb-3 text-foreground" {...props} />
    ),
    p: (props: any) => (
      <p className="mb-4 text-muted-foreground leading-7" {...props} />
    ),
    ul: (props: any) => <ul className="mb-4 ml-6 list-disc" {...props} />,
    ol: (props: any) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4"
        {...props}
      />
    ),
    code: (props: any) => (
      <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />
    ),
    pre: (props: any) => (
      <pre
        className="bg-muted p-4 rounded-lg overflow-x-auto mb-4"
        {...props}
      />
    ),
    hr: (props: any) => <hr className="my-8 border-border" {...props} />,
    ...components,
  };
}
