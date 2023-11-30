import { cx } from 'class-variance-authority'

export function Avatar({ collapsed }) {
  return (
    <div
      className={cx(
        'flex shrink-0 items-center justify-center rounded-lg bg-neutral-200 text-neutral-500 text-sm transition-all duration-300',
        collapsed ? 'h-[48px] w-[48px]' : 'h-[80px] w-[160px]'
      )}
    >
      BL
    </div>
  )
}
