import * as React from "react"
import Layout from '../components/layout'
import './index.module.css'

const IndexPage = () => {
    return (
        //RENDERS LAYOUT + Blurb
        <Layout titleName="Seeking">
            <p>Welcome! I'm David, a second year Machine Learning and Statistics student at the University of Toronto. Aspiring Software Developer by day, video game enjoyer by night, also artist(maybe)</p>
            <br/>
            <p>This site transitions into dark mode after 9:00pm Toronto time stick around to see how it looks.</p>
        </Layout>
        
    )
}

export default IndexPage
