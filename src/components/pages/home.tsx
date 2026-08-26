import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '@/data';

/** Place your file at public/avatars/my_image.jpg */
const PORTRAIT_PATH = '/avatars/my_image.jpg';

const stats = [
  { value: '6+', label: 'Projects shipped' },
  { value: '4', label: 'Roles held' },
  { value: '2025', label: 'KMUTT graduate' },
  { value: 'TS', label: 'Primary language' },
] as const;

const IntroductionSection = () => {
  const [firstName, ...rest] = personalInfo.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <section
      id='introduction'
      className='pt-[120px] pb-16 sm:pt-[140px] sm:pb-24'
    >
      <div className='grid gap-10 lg:gap-14 lg:grid-cols-[1fr_minmax(200px,280px)] lg:items-start'>
        <div>
          <p className='font-mono text-[11px] uppercase tracking-[0.12em] text-folio-brand mb-6'>
            Bangkok, Thailand — Open to opportunities
          </p>
          <h1 className='text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.04em] leading-none text-folio-fg mb-5'>
            {firstName}
            <br />
            {lastName}
          </h1>
          <p className='text-[clamp(1.125rem,2.5vw,1.625rem)] font-normal text-folio-muted tracking-[-0.01em] mb-8 max-w-xl'>
            {personalInfo.title}
          </p>
          <p className='text-base leading-[1.65] text-folio-muted max-w-lg mb-10'>
            Building web and mobile applications end-to-end — from database
            schema to deployed product. Currently building a multi-vendor
            e-commerce platform at SOPet.
          </p>
          <div className='flex flex-wrap gap-3 items-center'>
            <Link
              href='#projects'
              className='inline-flex items-center gap-1.5 px-[22px] py-[11px] text-sm font-medium text-folio-bg bg-folio-fg rounded-md hover:opacity-[0.82] transition-opacity'
            >
              View Projects
            </Link>
            <Link
              href='#contact'
              className='inline-flex items-center gap-1.5 px-[22px] py-[11px] text-sm font-medium text-folio-fg bg-transparent border border-folio-border rounded-md hover:border-folio-muted transition-colors'
            >
              Get in Touch
            </Link>
          </div>

          <div className='mt-16 pt-8 border-t border-folio-border flex flex-wrap gap-8 sm:gap-10'>
            {stats.map((s) => (
              <div key={s.label} className='flex flex-col gap-1'>
                <span className='font-mono text-[22px] font-semibold tracking-[-0.02em] text-folio-fg tabular-nums'>
                  {s.value}
                </span>
                <span className='text-xs uppercase tracking-[0.04em] text-folio-muted'>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center lg:justify-end lg:pt-2 lg:sticky lg:top-24'>
          <div className='relative w-full max-w-[280px] aspect-4/5 rounded-md overflow-hidden border border-folio-border bg-folio-surface shadow-sm'>
            <Image
              src={PORTRAIT_PATH}
              alt={personalInfo.name}
              fill
              className='object-cover object-center'
              sizes='(max-width: 1024px) 100vw, 280px'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
