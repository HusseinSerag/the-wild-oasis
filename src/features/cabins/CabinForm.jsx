import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../../services/cabins";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 12rem 2fr 1fr;
  gap: 2.4rem;
  padding: 2rem 4rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1.4rem;
    padding: 1rem 2rem;

    & button {
      max-width: 35rem;
      min-width: 20rem;
    }
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.5rem;
`;
export default function CabinForm() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (cabin) => addCabin(cabin),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      toast.success("Cabin successfully created!");
      reset();
    },
    onError: (err) => toast.error(err),
  });
  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="cabinName">Name</Label>
        <Input id="cabinName" {...register("cabinName")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="capacity">Maximum Capacity</Label>
        <Input id="capacity" type="number" {...register("maxCapacity")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="price">Regular Price</Label>
        <Input id="price" type="number" {...register("regularPrice")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          id="discount"
          type="number"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="description">Description of Cabin</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput type="file" id="image" accept="image/*" />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Reset
        </Button>
        <Button disabled={isLoading}>Add Cabin</Button>
      </FormRow>
    </Form>
  );
}
