import { useState } from 'react'
import { cx } from 'class-variance-authority'

import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Home } from './Home'

function App() {
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(false)

  const handleCollapse = () => setSidebarIsCollapsed((prevState) => !prevState)

  return (
    <>
      <Sidebar collapsed={sidebarIsCollapsed} handleCollapse={handleCollapse} />
      <main
        className={cx(
          'transition-all duration-300',
          sidebarIsCollapsed ? 'pl-[73px]' : 'pl-[280px]'
        )}
      >
        <Header />
        <Home handleCollapse={handleCollapse} />
      </main>
    </>
  )
}

export default App
