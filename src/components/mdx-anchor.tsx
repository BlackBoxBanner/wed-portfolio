import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { normalizeAnchorHref } from '@/lib/mailto';

export function MdxAnchor(props: ComponentPropsWithoutRef<'a'>) {
  const { href, children, ...rest } = props;
  const resolved = normalizeAnchorHref(href?.toString());

  if (resolved?.startsWith('/')) {
    return (
      <Link href={resolved} {...(rest as object)}>
        {children}
      </Link>
    );
  }

  const isMailto = resolved?.toLowerCase().startsWith('mailto:');
  return (
    <a
      href={resolved}
      {...(isMailto ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
    </a>
  );
}
