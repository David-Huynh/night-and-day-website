import * as React from "react"
import Layout from '../components/layout'
import {Helmet} from "react-helmet";

const IndexPage = () => {
    //TODO: Add more text and remove lorem ipsum
    return (
        //RENDERS LAYOUT + Blurb
        <Layout titleName="Seeking">
            <Helmet>
                <meta name="description" content="Index Page, contains a short bio"/>
            </Helmet>
            <p>Welcome! I'm David, a second year Machine Learning and Statistics student at the University of Toronto. Aspiring Developer by day, video game enjoyer by night, also artist(maybe)</p>
            <br/>
            <p>Lorem Ipsum filler text</p>
            <br/>
            <p>This site transitions into "night" mode after 9:00pm Toronto time stick around to see how it looks.</p>
        </Layout>
        
    );
}

export default IndexPage
