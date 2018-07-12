import React, { Fragment } from "react"
import moment from "moment"
import numeral from "numeral"
import Base from "./Base"

const Publication = ({
  story: {
    title,
    score,
    publishTime,
    author_screen_name,
    author_image_url,
    author_followers_count,
    url
  }
}) => (
  <Base
    title={title}
    score={score}
    publishTime={publishTime}
    publication
    logo={author_image_url}
    url={url}
  >
    {(expand) => (
      <div className="tweet-item-content">
        <div className="news-list-item__meta">
          <i className="fa fa-twitter twitter"></i>
          <span className="news-list-item__domain">{author_screen_name}</span>
          <span>{moment(publishTime).fromNow()}</span>
        </div>
        {expand && (
          <div className="news-list-item__followers">
            <span>
              follower / ing ratio:{" "}
              {numeral(author_followers_count).format("0a")}{" "}
            </span>
          </div>
        )}
      </div>
    )}
  </Base>
)

export default Publication
