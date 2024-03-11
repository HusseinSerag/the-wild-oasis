import { useForm } from "react-hook-form";
import styled from "styled-components";
import LoginRow from "../../ui/LoginRow";
import Button from "../../ui/Button";
import { login } from "../../services/auth";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-200);
  height: 4rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

const Container = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  width: min(60rem, 100%);
`;
export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { loginUser, isPending: isLoggingIn } = useLogin();

  function onSubmit(data) {
    loginUser(data);
  }
  return (
    <Container>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginRow
          label="Email"
          text="Email Address"
          type="email"
          error={errors.email}
        >
          {
            <Input
              id="Email"
              {...register("email", {
                required: "This field is required",
              })}
              autoComplete="username"
              disabled={isLoggingIn}
              defaultValue="hussein@gmail.com"
            />
          }
        </LoginRow>

        <LoginRow
          label="password"
          text="Password"
          type="password"
          error={errors.password}
        >
          {
            <Input
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters long!",
                },
              })}
              autoComplete="password"
              disabled={isLoggingIn}
              defaultValue="123456"
            />
          }
        </LoginRow>

        <Button disabled={isLoggingIn} size="md">
          {isLoggingIn ? <SpinnerMini /> : "Log in"}
        </Button>
      </StyledLoginForm>
    </Container>
  );
}
