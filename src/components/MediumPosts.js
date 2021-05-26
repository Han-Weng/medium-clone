import React from "react";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import moment from "moment";
import { Link } from "react-router-dom";

const MediumPosts = ({ id, data }) => {
  return (
    <Link to={`/Post/${id}`} style={{ textDecoration: "none" }}>
      <div className="MediumPosts">
        <div className="MediumPosts_Text">
          <h2>{data.title}</h2>
          <p>{data.paragraph}</p>

          <div className="MediumPosts_TimeStamps">
            <div className="MediumPosts_TimeStamp_Paragraph">
              <span>
                {moment(new Date(data?.timestamp?.toDate()), "YYYYMMDD").format(
                  "LL"
                )}
              </span>
              &nbsp;-&nbsp;
              <span style={{ display: "flex", alignItems: "center" }}>
                {moment(
                  new Date(data?.timestamp?.toDate()),
                  "YYYYMMDD"
                ).fromNow()}

                <StarIcon />
              </span>
            </div>
            <BookmarkBorderIcon className="MediumPosts_Bookmark" />
          </div>
        </div>

        {data.image && (
          <div
            className="MediumPosts_image"
            style={{ backgroundImage: `url(${data.image})` }}
          />
        )}
      </div>
    </Link>
  );
};

export default MediumPosts;
