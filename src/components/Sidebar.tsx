import {
  IconDiamond,
  IconLayoutSidebarRightExpand,
  IconLayoutSidebarLeftExpand
} from '@tabler/icons-react'
import { cx } from 'class-variance-authority'

import { NavButton } from './NavButton'
import { Avatar } from './Avatar'

const NAVIGATION = [
  ['Home', IconDiamond],
  ['Browse', IconDiamond],
  ['Shortlists', IconDiamond],
  ['Consultations', IconDiamond]
]

export function Sidebar({ collapsed, handleCollapse }) {
  return (
    <aside
      className={cx(
        'fixed flex h-full flex-col border-r border-neutral-200 bg-white transition-all duration-300',
        collapsed ? 'w-[73px]' : 'w-[280px]'
      )}
    >
      {/* Collapse button is absolutely positioned for animation */}
      <div
        className={cx(
          'absolute h-[24px] w-[24px] cursor-pointer text-center transition-all text-neutral-500 hover:text-neutral-950',
          collapsed ? 'right-6 top-[88px]' : 'right-3 top-6'
        )}
        onClick={handleCollapse}
      >
        {collapsed ? (
          <IconLayoutSidebarLeftExpand size={24} stroke={1.5} />
        ) : (
          <IconLayoutSidebarRightExpand size={24} stroke={1.5} />
        )}
      </div>
      {/* Top */}
      <div
        className={cx(
          'flex flex-col border-b border-neutral-200 px-3 py-6 transition-all duration-300',
          collapsed ? 'gap-14' : 'gap-4'
        )}
      >
        <div
          className={cx(
            'flex transition-all duration-300',
            collapsed ? 'flex-col gap-3' : 'justify-between'
          )}
        >
          <Avatar collapsed={collapsed} />
        </div>

        <NavButton
          variant="primary"
          collapsed={collapsed}
          IconLeft={IconDiamond}
        >
          Start walk-in
        </NavButton>
      </div>
      {/* Navigation */}
      <div className="flex grow flex-col justify-between px-3 py-6">
        <div className="flex flex-col">
          {NAVIGATION.map(([legend], i) => (
            <NavButton
              variant="secondary"
              key={i}
              collapsed={collapsed}
              IconLeft={IconDiamond}
            >
              {legend}
            </NavButton>
          ))}
        </div>
        <NavButton
          variant="secondary"
          collapsed={collapsed}
          IconLeft={IconDiamond}
        >
          Settings
        </NavButton>
      </div>
    </aside>
  )
}
