import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import useUpdatePassword from "./useUpdatePassword";

export default function UpdatePassword() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const { updateUserPassword, isPending: isLoading } = useUpdatePassword();

  function onSubmit({ password }) {
    updateUserPassword(
      { password },
      {
        onSuccess: () => reset(),
      }
    );
  }
  function onError(error) {}

  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Update user&apos;s password</Heading>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
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
                  getValues().password === value
                    ? true
                    : "Passwords don't match!",
              })}
            />
          </FormRow>
          <FormRow>
            <Button variation="secondary" type="reset">
              Reset
            </Button>
            <Button type="submit">Update Account</Button>
          </FormRow>
        </Form>
      </Row>
    </>
  );
}
