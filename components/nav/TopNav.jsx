import Link from 'next/link'

const TopNav = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand mb-0 h1">
                        Vendible
                    </a>
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active" aria-current="page">Account</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Cart</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default TopNav