import React from 'react'
import Footer from './nav/Footer'
import SideNav from './nav/SideNav'
import TopNav from './nav/TopNav'

const PageLayout = () => {
    return (
        <div style={{position: 'relative', height: '100vh'}}>
            <TopNav />
            <SideNav />
            <Footer />
        </div>
    )
}
export default PageLayout