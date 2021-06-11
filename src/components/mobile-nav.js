import * as React from "react"
import {line1,line2,line3,barBtn} from "./mobile-nav.module.css"
import { GlobalStyles } from '../theme/GlobalStyles';

const MobileNav = () => {
    //TODO: Implement the navbar and switch from module to styled-components
    return (
        <div id={barBtn}>
            <GlobalStyles/>
            <div className={line1}></div>
            <div className={line2}></div>
            <div className={line3}></div>
        </div>
    )
}

export default MobileNav