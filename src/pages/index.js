// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>Im making a site following the tutorial!</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
