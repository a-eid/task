import React from "react"
import Publication from "../StoryItem/Publication"
import Tweet from "../StoryItem/Tweet"

import "./StoryList.css"

const NewsList = ({ stories }) => (
  <div className="news-list">
    <h1>WatchList</h1>
    <ul>
      {stories.map(
        (story) =>
          !story.author_followers_count ? (
            <Publication story={story} key={story.id} />
          ) : (
            <Tweet story={story} key={story.id} />
          )
      )}
    </ul>
  </div>
)

export default NewsList
