import React, { Component } from "react";
import Img from "../Img/Img";
import "./Base.css";

import AngelDown from "../../assets/svg/angel-down.svg";
import AngelUp from "../../assets/svg/angel-up.svg";

class NewsListItem extends Component {
  state = {
    expand: false
  };

  toggleExpand = () => {
    this.setState(ps => ({
      expand: !ps.expand
    }));
  };

  render() {
    const { title, score, publication = false, logo, url } = this.props;
    return (
      <li className="news-list-item">
        <div className="news-list-item__inner">
          <div className="news-list-item__logo">
            <img src={publication ? logo : null} alt="" />
          </div>

          <div className="news-list-item__body">
            <div className="news-list-item__header">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div>
                  <h2>{title}</h2>
                  {/* {this.props.renderMeta(this.state.expand)} */}
                </div>
              </a>
              <span className="news-list-item__stats">{`${score}%`}</span>

              <span
                className="news-list-item__control--tablet"
                onClick={this.toggleExpand}
              >
                {this.state.expand ? (
                  <img src={AngelDown} />
                ) : (
                  <img src={AngelUp} />
                )}
              </span>
            </div>

            {this.props.children(this.state.expand)}

            <div className="news-list-item__control">
              <span onClick={this.toggleExpand}>
                {this.state.expand ? (
                  <span>
                    Less
                    <i className="fa fa-chevron-down expand-icon" />
                  </span>
                ) : (
                  <span>
                    More
                    <i className="fa fa-chevron-up expand-icon" />
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        {this.state.expand && (
          <div className="news-list-item__vote">
            <VoteItem src="like" text="Bookmark" />
            <VoteItem src="like" text="Like" />
            <VoteItem src="dislike" text="Dislike" />
          </div>
        )}
      </li>
    );
  }
}

const VoteItem = ({ src, text }) => {
  if (text === "Bookmark") {
    return (
      <div className="vote-item">
        <i className="fa fa-bookmark-o bookmark" />
        <span>{text}</span>
      </div>
    );
  }
  return (
    <div className="vote-item">
      <Img src={src} />
      <span>{text}</span>
    </div>
  );
};
export default NewsListItem;
