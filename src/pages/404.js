import * as React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
    return (
        <Layout titleName="404">
            <p>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">😔</span>{" "}
                we couldn’t find what you were looking for.
                <br />
                <Link to="/">Go home</Link>.
            </p>
        </Layout>
    )
}

export default NotFoundPage
