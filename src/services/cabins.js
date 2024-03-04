import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    ErrorHandle("cabins could not be loaded");
  }

  return cabins;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    ErrorHandle("Cabin couldn't be deleted, please try again later!");
  }
}

export async function addCabin(cabin) {
  const { data, error } = await supabase.from("cabins").insert([cabin]);
  if (error) {
    ErrorHandle("Failed to add Cabin!");
  }
}

function ErrorHandle(error) {
  throw new Error(error);
}
