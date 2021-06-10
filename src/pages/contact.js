import * as React from "react"
import Layout from '../components/layout'
import {email} from './contact.module.css'

const ContactPage = () => {
  return (
    //RENDERS CONTACT INFO
    <Layout titleName="Contact Info">
        <p>It's currently day where I live and I should be available to answer the phone</p>
        <br/>
        <p>Cell Number: <b>(647) 929-9932</b></p>
        <p>Email: <b><a href="mailto:huynh.david.work@gmail.com" className={email}>huynh.david.work@gmail.com</a></b></p>
    </Layout>
      
  )
}

export default ContactPage
