import Image from 'next/image'
import './nav.css'

const Nav = () => {
  return (
    <div className="container">
      <div className="logo">
        <Image src="./logo.svg" alt="Logo" width={100} height={100} />
        UniLink
      </div>
      <div className="nav">
        <a className="nav-item" href="/">
          Item 1
        </a>
        <a className="nav-item" href="/">
          Item 2
        </a>
        <a className="nav-item" href="/">
          Item 3
        </a>
        <a className="nav-item" href="/">
          Item 4
        </a>
      </div>
    </div>
  )
}

export default Nav
