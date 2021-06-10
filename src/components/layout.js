import * as React from 'react'
import Clock from './clock'
import { Link } from 'gatsby'
import { container, header, navBarName, navBar, navList, link, text_color_high_emph,text_color_medium_emph} from './layout.module.css'

const Layout = ({ titleName, children }) => {
    return (
        //TODO: ADD FOOTER SOCIAL MEDIA LINKS
        <main className={container}>
            {/* IMPORTS FONTS FOR THE HEADER "LOGO" */}
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
            <div className={header}>
                <h2 id={navBarName}>DAVID</h2>
                <nav className={navBar}>
                    <ul className={navList}>
                        <li><Link className={link} to="/">About</Link></li>
                        <li><Link className={link} to="/resume">Resume</Link></li>
                        <li><Link className={link} to="/contact">Contact Me</Link></li>
                    </ul>
                </nav>
            </div>
            {/* RENDERS THE PAGE TITLE AND CLCOK COMPONENT */}
            <div className={header}>
                <h1 className={text_color_high_emph}>{titleName}</h1>
                <Clock className={text_color_high_emph}/>
            </div>
            
            {children}
            <div>

            </div>
        </main>
    )
}
export default Layout
