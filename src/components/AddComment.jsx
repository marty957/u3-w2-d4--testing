import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  /* state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin
    }
  };*/

  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin
  });

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzMyMzEyNDQsImV4cCI6MTczNDQ0MDg0NH0.Trs6hqZzdzvXcEdPavCOHJM-y90n-dPvqs_3GdxjCO4"
        }
      });
      if (response.ok) {
        alert("Recensione inviata!");

        setComment({
          comment: "",
          rate: 1,
          elementId: props.asin
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: props.asin
    }));
  }, [props.asins]);

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
