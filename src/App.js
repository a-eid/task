import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import StoryList from "./components/StoryList/StoryList"
import stories from "./stories.json"


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <StoryList stories={stories.stories} />
      </div>
    )
  }
}

export default App
