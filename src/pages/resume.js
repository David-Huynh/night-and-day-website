import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { GlobalStyles } from "../theme/GlobalStyles";
import { FaLink } from "react-icons/fa";

const ResumeStyle = styled.div`
  a{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h2 {
    color: ${({ theme }) => theme.primaryVariant};
    margin-top: 0;
    margin-bottom: 5px;
  }
  li {
    color: ${({ theme }) => theme.foreground};
    opacity: ${({ theme }) => theme.mediumEmphText};
    transition: all 0.5s linear;
    margin: 5px;
  }
`;
const ResumePage = () => {
  return (
    <Layout titleName="Resume">
      <Helmet>
        <meta
          name="description"
          content="Resume Page, contains my experience and project descriptions"
        />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@dhuynh"></meta>
        <meta name="twitter:title" content="My projects/resume"></meta>
        <meta
          name="twitter:description"
          content="Resume Page - David Huynh"
        ></meta>
      </Helmet>
      <GlobalStyles />
      <ResumeStyle>
        <a
          href="https://docs.google.com/document/d/1v_za99w6o9s4XS2CSu8SJrn6ThQJg2smcrfT_m9N2MU/edit#"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>FarmLink Marketing Solutions (Grainfox)</h2>
          <FaLink></FaLink>
        </a>
        <ul>
          <li>
            Integrated Salesforce using Webhooks resulting in on average <b>66x </b> 
            less server load than a polling solution
          </li>
          <li>
            Utilized Microsoft Graph API's delta links to create a nearly <b>100% </b> 
            efficient polling solution for Microsoft SharePoint excel files
          </li>
          <li>
            Proficiency in Python applied when creating an Excel Sheet parser to insert
            into a MySQL database
          </li>
          <li>
            Applied proficient networking and server administration skills to sucessfully
            monitor and alert Grainfox servers using Prometheus and Grafana 
          </li>
        </ul>
        <a
          href="https://github.com/David-Huynh/personal-nightday-website"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>Personal Website</h2>
          <FaLink></FaLink>
        </a>
        <ul>
          <li>
            Utilized React states and props to make an interactive and
            responsive website
          </li>
          <li>
            Designed a Mobile Friendly, Accessible, SEO, and PWA website using
            web development best practices resulting in a perfect Lighthouse
            Score
          </li>
          <li>
            Ensured perfect user experience by registering Service Worker
            allowing for features such as offline mode
          </li>
        </ul>
        <a
          href="https://github.com/David-Huynh/CourseWebsite"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>Course Website</h2>
          <FaLink></FaLink>
        </a>
        <ul>
          <li>
            Implemented responsive and dynamic pages using Flask and JINJA2
            resulting in cleaner code
          </li>
          <li>
            Applied extensive knowledge of AJAX, Javascript, and Long Polling to
            efficiently render pages via Partial Renders and to actively sync
            submitted information across all users
          </li>
          <li>
            Ensured seamless user experience across all devices by using best
            web design practices
          </li>
          <li>
            Efficient SQL queries resulted in faster load times and better user
            experience
          </li>
        </ul>
        <a
          href="https://github.com/FredWei-Hub/ChefSwipe"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>Chefs Swipe</h2>
          <FaLink></FaLink>
        </a>
        <ul>
          <li>
            Developed a tinder-like recipe finder using native android
            development with Java and Jetpack
          </li>
          <li>
            Utilized best practices such as MVVM and Observer pattern ensuring
            future maintainability, scalability. and testability
          </li>
          <li>
            Employed extensive knowledge of Firebase in order to securely
            authorize users using OAuth2
          </li>
          <li>
            Proficient understanding of NoSQL, ViewModel, and Observer pattern
            resulted in secure and swift storage of user data
          </li>
        </ul>
        <a
          href="https://github.com/David-Huynh/JShell"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>Simulated Java Shell</h2>
          <FaLink></FaLink>
        </a>
        <ul>
          <li>
            Created a working virtual shell using SOLID design principles in an
            Agile SDLC
          </li>
          <li>
            Rigorously unit tested every command using Junit resulting in safe
            effective code
          </li>
        </ul>
      </ResumeStyle>
    </Layout>
  );
};

export default ResumePage;
