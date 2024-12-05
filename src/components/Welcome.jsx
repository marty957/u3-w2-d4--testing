import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="success" className="mt-4 my-2">
      <Alert.Heading> A book is a friend!</Alert.Heading>
      <p>Every week new authors and books just for you. Do not miss it!! if you buy 3 books one is free!!!!</p>
    </Alert>
  );
};

export default Welcome;
