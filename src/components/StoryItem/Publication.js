import React, { Fragment } from "react"
import moment from "moment"
import Base from "./Base"

const Publication = ({
  story: {
    title,
    score,
    description,
    publishTime,
    domain_name,
    domain_cached_logo_url,
    url
  }
}) => {
  return (
    <Base
      title={title}
      score={score}
      publishTime={publishTime}
      publication
      logo={domain_cached_logo_url}
      url={url}
    >
      {(expand) => (
        <Fragment>
          <div className="news-list-item__meta ">
            <span className="news-list-item__domain">{domain_name}</span>
            <span>{moment(publishTime).fromNow()}</span>
          </div>
          {expand && (
            <div className="news-list-item__content">
              {description ? description : "No Description Provided"}
            </div>
          )}
        </Fragment>
      )}
    </Base>
  )
}

export default Publication
