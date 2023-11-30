import { cva, cx } from 'class-variance-authority'

const button = cva(['flex', 'gap-3', 'p-3', 'rounded-md', 'overflow-hidden'], {
  variants: {
    variant: {
      primary: ['bg-neutral-950', 'text-white', 'hover:bg-neutral-800'],
      secondary: ['bg-white', 'text-neutral-950', 'hover:bg-neutral-200']
    }
  }
})

export function NavButton({ variant, collapsed, IconLeft, children }) {
  return (
    <button className={button({ variant })}>
      <IconLeft className="shrink-0" size={24} stroke={1.5} />
      <div
        className={cx(
          'shrink text-left transition-all duration-300 whitespace-nowrap',
          collapsed ? 'opacity-0' : 'opacity-100'
        )}
      >
        {children}
      </div>
    </button>
  )
}
