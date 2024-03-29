import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import useMutateCabin from "./useMutateCabin";

export default function CabinForm({ cabin = {}, onCloseModal }) {
  const { id: cabinId } = cabin;

  const isEditing = Boolean(cabinId);
  const defaultValues = isEditing ? cabin : {};

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: defaultValues,
  });

  const { errors } = formState;
  const { mutate, status } = useMutateCabin({ isEditing, cabinId, reset });
  function onSubmit(data) {
    mutate(
      { ...data, image: !isEditing ? data.image[0] : data.image },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  const isLoading = status === "pending";
  function onError(errors) {}
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="cabinName" text="Cabin's Name" error={errors?.cabinName}>
        <Input
          id="cabinName"
          disabled={isLoading}
          {...register("cabinName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="capacity"
        text="Maximum Capacity"
        error={errors?.maxCapacity}
      >
        <Input
          id="capacity"
          type="number"
          disabled={isLoading}
          {...register("maxCapacity", {
            required: {
              value: true,
              message: "This field is required",
            },
            min: {
              value: 1,
              message: "Capacity should be atleast one",
            },
          })}
        />
      </FormRow>
      <FormRow label="price" text="Regular Price" error={errors?.regularPrice}>
        <Input
          id="price"
          type="number"
          disabled={isLoading}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be atleast one",
            },
          })}
        />
      </FormRow>
      <FormRow label="discount" text="Discount" error={errors?.discount}>
        <Input
          id="discount"
          type="number"
          disabled={isLoading}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              +value <= getValues().regularPrice ||
              "Discount should be less than price",
          })}
        />
      </FormRow>
      <FormRow
        label="description"
        text="Description of Cabin"
        error={errors?.description}
      >
        <Textarea
          id="description"
          defaultValue=""
          disabled={isLoading}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="image" text="Cabin Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditing ? false : "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Reset
        </Button>
        <Button disabled={isLoading}>
          {isEditing ? "Edit Cabin" : "Add Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}
