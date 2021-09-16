/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import styles from '../../styles/nav/SideNav.module.scss'

const menuLinks = [
    {
        id: 'women',
        mainLink: 'Women\'s',
        subLinks: ['Shirts', 'Pants', 'Dresses', 'Shoes']
    },
    {
        id: 'men',
        mainLink: 'Men\'s',
        subLinks: ['Shirts', 'Pants', 'Shoes']
    },
    {
        id: 'electronics',
        mainLink: 'Electronics',
        subLinks: ['TVs', 'Computers', 'Gaming', 'Tablets']
    },
    {
        id: 'home',
        mainLink: 'Home',
        subLinks: ['Furniture', 'Kitchen', 'Bed & Bath', 'Decor']
    }
]

const renderNavLinks = navLinks => (
    navLinks.map(nav => (
        <li key={nav.mainLink} className="nav-item">
            <Link href="/">
                <a className={`nav-link ${styles.navLink}`} data-bs-toggle="collapse" href={`#${nav.id}Menu`}>{nav.mainLink}</a>
            </Link>
            <div className="collapse" id={`${nav.id}Menu`}>
                <nav className="nav">
                    <ul className="nav flex-column">
                        {
                            nav.subLinks.map(link => (
                                <li key={nav + link} className={`nav-item ${styles.subLink}`}>
                                    <Link href="/">
                                        <a><i className="bi bi-chevron-right"></i>{link}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </li>
    ))
)

const SideNav = () => {
    return (
        <>
            <nav className="navbar">
                <ul className={`flex-column ${styles.sideNav}`}>
                    {renderNavLinks(menuLinks)}
                </ul>
            </nav>
        </>
    )
}
export default SideNav