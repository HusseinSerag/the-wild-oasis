import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSettings from "./useSettings";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";

export default function SettingsForm() {
  const { isLoading, settings } = useSettings();
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  const { editSettings, isEditing } = useEditSettings();
  if (isLoading) {
    return <Spinner />;
  }

  function handleUpdate(data) {
    editSettings(data);
  }
  return (
    <Form>
      <FormRow
        label="min-nights"
        error={errors?.minBookingLength}
        text="Min. nights/booking"
      >
        <Input
          type="number"
          defaultValue={settings?.minBookingLength}
          id="min-nights"
          disabled={isEditing}
          {...register("minBookingLength", {
            onBlur: handleSubmit(handleUpdate),
            required: "This field is required",
            validate: (value) =>
              +value < +getValues()?.maxBookingLength ||
              "Minimum number of nights need to be less than maximum",
            min: {
              value: 3,
              message: "Minimum number of nights can't be less than 3!",
            },
          })}
        />
      </FormRow>
      <FormRow
        text="Max. nights/booking"
        error={errors?.maxBookingLength}
        label="max-nights"
      >
        <Input
          type="number"
          id="max-nights"
          disabled={isEditing}
          defaultValue={settings?.maxBookingLength}
          {...register("maxBookingLength", {
            onBlur: handleSubmit(handleUpdate),
            required: "This field is required",
            validate: (value) =>
              +value > +getValues().minBookingLength ||
              "Value cannot be smaller than minimum booking length",
          })}
        />
      </FormRow>
      <FormRow
        text="Max. guests/booking"
        error={errors?.maxGuestPerBooking}
        label="max-guests"
      >
        <Input
          type="number"
          disabled={isEditing}
          id="max-guests"
          defaultValue={settings?.maxGuestPerBooking}
          {...register("maxGuestPerBooking", {
            onBlur: handleSubmit(handleUpdate),
            required: "This field is required",
            min: {
              value: 1,
              message: "Value cannot be less than 1",
            },
          })}
        />
      </FormRow>
      <FormRow
        text="Breakfast price"
        error={errors?.breakfastPrice}
        label="breakfast-price"
      >
        <Input
          type="number"
          id="breakfast-price"
          disabled={isEditing}
          defaultValue={settings?.breakfastPrice}
          {...register("breakfastPrice", {
            onBlur: handleSubmit(handleUpdate),
            required: "This field is required",
            min: {
              value: 1,
              message: "Value cannot be less than 1",
            },
          })}
        />
      </FormRow>
    </Form>
  );
}
