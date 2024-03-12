import Form from "../../ui/Form";
import Input from "../../ui/Input";

import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import useSignup from "./useSignup";
import styled from "styled-components";

export default function SignupForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const { isPending: isLoading, signupUser } = useSignup();
  function onSubmit(data) {
    signupUser(
      {
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      },
      {
        onSettled: () => reset(),
      }
    );
  }

  function onError(errors) {}
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="fullName" text="Full Name" error={errors?.fullName}>
        <Input
          id="fullName"
          disabled={isLoading}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="email" text="Email Address" error={errors?.email}>
        <Input
          id="email"
          type="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address!",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="password"
        text="Password (min. 6 characters)"
        error={errors?.password}
      >
        <Input
          id="password"
          type="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Minimum password length is 6!",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="confirmPassword"
        text="Confirm Password"
        error={errors?.confirmPassword}
      >
        <Input
          id="confirmPassword"
          type="password"
          disabled={isLoading}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value ? true : "Passwords don't match!",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Reset
        </Button>
        <Button type="submit">Add user</Button>
      </FormRow>
    </Form>
  );
}
