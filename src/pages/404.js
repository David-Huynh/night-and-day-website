import * as React from "react";
import Layout from '../components/layout';
import { Link } from "gatsby";
import {Helmet} from "react-helmet";
// markup
const NotFoundPage = () => {
    return (
        <Layout titleName="404">
            <Helmet>
                <meta name="description" content="404 Page Not Found"/>
            </Helmet>
            <p>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">😔</span>{" "}
                we couldn’t find what you were looking for.
                <br />
                <Link to="/">Go home</Link>.
            </p>
        </Layout>
    );
};

export default NotFoundPage;
