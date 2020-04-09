import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>{title}</h1>
      <h1>{age}</h1>
      <h1>{name}</h1>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      {/* <h1>{data.site.siteMetadata.person.age}</h1> */}
    </div>
  )
}

export default Header
