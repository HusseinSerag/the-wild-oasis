import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Users() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Create new user</Heading>
      </Row>
      <Row>
        <SignupForm />
      </Row>
    </>
  );
}
