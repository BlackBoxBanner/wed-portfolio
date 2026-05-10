const HAS_SCHEME = /^[a-z][a-z0-9+.-]*:/i;

/** `user+tag@example.com` — no path, no scheme */
const BARE_EMAIL =
  /^[^\s<>()[\]\\'",;]+@[^\s<>()[\]\\'",;]+\.[^\s<>()[\]\\'",;]+$/i;

export function isBareEmailHref(href: string): boolean {
  return BARE_EMAIL.test(href.trim());
}

/**
 * If `href` is a bare email (no scheme, not a site path), prefix `mailto:`.
 * RFC 6068: percent-encode the mailbox for special characters such as `+`.
 */
export function normalizeAnchorHref(
  href: string | undefined,
): string | undefined {
  if (href == null || href === '') return href;
  const h = href.trim();
  if (h.startsWith('/')) return h;
  if (h.startsWith('#')) return h;
  if (h.startsWith('//')) return h;
  if (HAS_SCHEME.test(h)) return h;
  if (isBareEmailHref(h)) return mailtoHref(h);
  return h;
}

export function mailtoHref(email: string): string {
  return `mailto:${encodeURIComponent(email.trim())}`;
}
