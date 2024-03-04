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
  const imageName = `${Math.random()}-${cabin.image.name}`.replace("/", "");

  //1)upload img to bucket
  const { data: url, error: imgError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  if (imgError) {
    ErrorHandle("Image could not been uploaded");
    return;
  }

  //2)retreive image full public path

  const { data } = supabase.storage.from("cabin-images").getPublicUrl(url.path);

  //3)insert whole cabin data into table with dynamically fetched path
  const newCabin = { ...cabin, image: data.publicUrl };

  const { error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    await deleteAssetFromBucket(url.path);
    ErrorHandle("Failed to add Cabin!");
    return;
  }
}

function ErrorHandle(error) {
  throw new Error(error);
}

async function deleteAssetFromBucket(path) {
  await supabase.storage.from("cabin-images").remove(path);
}
