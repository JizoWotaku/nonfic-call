/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {(
        <p>
          のんふぃく！のコール表です<br />
          修正点があれば以下のリポジトリに対してお気軽にプルリクエストどうぞ<br />
          {'->'} <a href="https://github.com/JizoWotaku/nonfic-call" target="_blank">
            JizoWotaku/nonfic-call
          </a><br />
          誰も声出さない日もあるので基本好きなコール入れてOKだと思います<br />
          コールはライブで観測したものをできるだけ入れてます
        </p>
      )}
    </div>
  )
}

export default Bio
