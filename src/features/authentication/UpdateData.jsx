import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useUsers } from "./useUsers";
import useUpdateData from "./useUpdateData";
import toast from "react-hot-toast";

export default function UpdateData() {
  const { user } = useUsers();

  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  const { updateData, isPending: isLoading } = useUpdateData();
  function onSubmit(data) {
    const image = data.image[0];
    if (!image && data.fullName === user.user_metadata.fullName) {
      toast("Nothing changed!");
      return;
    } else if (image || data.fullName !== user.user_metadata.fullName) {
      updateData(
        { avatarSrc: image, fullName: data.fullName },
        { onSuccess: () => reset() }
      );
    }
  }
  function onError(error) {}

  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Update user&apos;s data</Heading>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormRow label="email" text="Email Address">
            <Input id="email" type="email" disabled={true} value={user.email} />
          </FormRow>
          <FormRow label="fullName" text="Full Name" error={errors?.fullName}>
            <Input
              id="fullName"
              type="text"
              defaultValue={user.user_metadata.fullName}
              disabled={isLoading}
              {...register("fullName")}
            />
          </FormRow>
          <FormRow label="image" text="Avatar" error={errors?.image}>
            <FileInput id="image" accept="image/*" {...register("image")} />
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
