import * as React from "react"
import {barBtn} from "./mobile-nav.module.css"
import { GlobalStyles } from '../theme/GlobalStyles';

const MobileNav = () => {
    //TODO: Implement the navbar and switch from module to styled-components
    return (
        <div id={barBtn}>
            <GlobalStyles/>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MobileNav