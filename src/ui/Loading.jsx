import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  background: var(--color-grey-0) 0.4;
`;

const Loader = styled.div`
  /* https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje */

  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(var(--color-grey-900) 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 50%;
  animation: loading 1s infinite linear;

  @keyframes loading {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;
export default function Loading() {
  return (
    <Container>
      <Loader></Loader>
    </Container>
  );
}
