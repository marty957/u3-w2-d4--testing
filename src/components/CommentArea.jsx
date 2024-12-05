import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  /*state = {
    comments: [],
    isLoading: false,
    isError: false
  };*/

  const [comments, setcomments] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const fetchComments = async () => {
    setisLoading(true);

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzMyMzEyNDQsImV4cCI6MTczNDQ0MDg0NH0.Trs6hqZzdzvXcEdPavCOHJM-y90n-dPvqs_3GdxjCO4"
        }
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();

        setcomments(comments);
        setisLoading(false);
        setisError(false);
      } else {
        setisLoading(false);
        setisError(true);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
      setisError(true);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [props.asin]);
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
