import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";

//Styles the phonenumber text
const Cell = styled.p`
  color: ${({ theme }) => theme.foreground};
  opacity: ${({ theme }) => theme.highEmphText};
`;
//Styles the Mail Text
const Mail = styled.p`
  margin: 0;
  opacity: ${({ theme }) => theme.highEmphText};
`;
//Styles the email link
const Link = styled.a`
  color: ${({ theme }) => theme.foreground};
  text-decoration: none;
`;

const ContactPage = () => {
  //TODO: Change text according to theme state
  return (
    //RENDERS CONTACT INFO
    <Layout titleName="Contact Info">
      <Helmet>
        <meta name="description" content="Contact Info page" />
      </Helmet>
      <p>
        It's currently day where I live and I should be available to answer the
        phone
      </p>
      <br />
      <Cell>
        Cell Number: <b>(647) 929-9932</b>
      </Cell>
      <Mail>
        Email:{" "}
        <b>
          <Link href="mailto:huynh.david.work@gmail.com">
            huynh.david.work@gmail.com
          </Link>
        </b>
      </Mail>
    </Layout>
  );
};

export default ContactPage;
