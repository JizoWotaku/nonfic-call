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
        君と見るそらの楽曲一覧とコールまとめです。
        <br />
        コールはライブで観測したものをできるだけ入れてます(間違っているかもしれません)
        <br />
        修正点があれば以下のリポジトリに対してお気軽にプルリクエストどうぞ
        <br />
        {"->"}{" "}
        <a
          href="https://github.com/JizoWotaku/nonfic-call/tree/kimisora"
          target="_blank"
          rel="noreferrer"
        >
          JizoWotaku/nonfic-call (branch: kimisora)
        </a>
        <br />
      </p>
    </div>
  )
}

export default Bio
