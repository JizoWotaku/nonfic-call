/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"

const Bio = () => {
  return (
    <div className="bio">
      <p>
        のんふぃく！のコール表です
        <br />
        修正点があれば以下のリポジトリに対してお気軽にプルリクエストどうぞ
        <br />
        {"->"}{" "}
        <a
          href="https://github.com/JizoWotaku/nonfic-call"
          target="_blank"
          rel="noreferrer"
        >
          JizoWotaku/nonfic-call
        </a>
        <br />
        誰も声出さない日もあるので基本好きなコール入れてOKだと思います
        <br />
        コールはライブで観測したものをできるだけ入れてます
        <br />
        のんふぃく！で使用されている
        <br />
        コールの一覧は
        <Link to="/call-list" itemProp="url">
          こちら
        </Link>
      </p>
    </div>
  )
}

export default Bio
