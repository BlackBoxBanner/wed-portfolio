export default function Loading() {
  return (
    <div className='min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-folio-bg px-6 pt-14'>
      <div className='flex flex-col items-center gap-6'>
        <div className='relative w-12 h-12'>
          <div className='absolute inset-0 rounded-full border-2 border-folio-border' />
          <div className='absolute inset-0 rounded-full border-2 border-transparent border-t-folio-fg animate-spin' />
        </div>

        <div className='text-center'>
          <p className='text-sm font-medium text-folio-fg'>Loading</p>
          <p className='text-[13px] text-folio-muted mt-1'>Please wait…</p>
        </div>

        <div className='w-40 h-px bg-folio-border rounded-full overflow-hidden'>
          <div className='h-full w-1/2 bg-folio-brand rounded-full animate-pulse' />
        </div>
      </div>
    </div>
  );
}
