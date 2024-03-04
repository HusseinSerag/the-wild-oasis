import styled from "styled-components";
import Row from "./Row";
import UseGoBack from "../hooks/UseGoBack";
import Button from "./Button";

const Container = styled.div`
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
`;

export default function PageNotFound() {
  const goBack = UseGoBack();
  return (
    <Container>
      <ButtonWrapper onClick={goBack}>
        <Button variation="secondary" size="sm">
          Return
        </Button>
      </ButtonWrapper>
      <Row>
        <span>
          unfortunately, this page that you requested doesn&apos;t exist
        </span>
        <span>Please go back or contact us!</span>
      </Row>
    </Container>
  );
}
