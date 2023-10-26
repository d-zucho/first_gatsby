import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle='About me!'>
      <Link to='/'>Back Home</Link>
      <p>This is the about page!</p>
    </Layout>
  )
}

export const Head = () => <title>About me!</title>
// Head is a component that sets the page title for the browser tab.
export default AboutPage
