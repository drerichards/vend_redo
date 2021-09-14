/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const SideNav = () => {
    return (
        <nav className="navbar flex">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">Women's</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">
                        <a className="nav-link">Men's</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog/hello-world">
                        <a className="nav-link">Electronics</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default SideNav