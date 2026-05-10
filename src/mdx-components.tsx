import type { MDXComponents } from 'mdx/types';
import { MdxAnchor } from '@/components/mdx-anchor';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MdxAnchor,
    h1: (props: object) => (
      <h1
        className='text-[clamp(1.375rem,3vw,1.75rem)] font-semibold mb-4 mt-10 first:mt-0 text-folio-fg tracking-[-0.03em] scroll-mt-28'
        {...props}
      />
    ),
    h2: (props: object) => (
      <h2
        className='text-xl sm:text-[1.375rem] font-semibold mb-4 mt-10 first:mt-0 text-folio-fg tracking-[-0.02em] scroll-mt-28'
        {...props}
      />
    ),
    h3: (props: object) => (
      <h3
        className='text-[1.0625rem] font-semibold mb-3 mt-8 first:mt-0 text-folio-fg tracking-tight scroll-mt-28'
        {...props}
      />
    ),
    p: (props: object) => (
      <p
        className='mb-4 text-[15px] text-folio-muted leading-relaxed'
        {...props}
      />
    ),
    ul: (props: object) => (
      <ul className='mb-4 ml-5 list-disc marker:text-folio-muted' {...props} />
    ),
    ol: (props: object) => (
      <ol
        className='mb-4 ml-5 list-decimal marker:text-folio-muted'
        {...props}
      />
    ),
    li: (props: object) => <li className='mb-1 pl-1' {...props} />,
    blockquote: (props: object) => (
      <blockquote
        className='border-l-2 border-folio-border pl-4 text-folio-muted mb-4 not-italic'
        {...props}
      />
    ),
    code: (props: object) => (
      <code
        className='font-mono text-[0.9em] bg-folio-surface border border-folio-border rounded px-1.5 py-0.5 text-folio-fg'
        {...props}
      />
    ),
    pre: (props: object) => (
      <pre
        className='bg-[#0d1117] border border-[#30363d] text-[#e6edf3] p-4 rounded-md overflow-x-auto mb-4 text-[13px] leading-relaxed font-mono shadow-inner'
        {...props}
      />
    ),
    hr: (props: object) => (
      <hr className='my-10 border-folio-border' {...props} />
    ),
    ...components,
  };
}
