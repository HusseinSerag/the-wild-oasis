import { ErrorHandle } from "../util/helpers";
import supabase from "./supabase";

export async function login(credentials) {
  let { data, error } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    ErrorHandle(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    ErrorHandle(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    ErrorHandle("Error occured while logging out!");
  }
}

export async function signup(email, password, fullName) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    ErrorHandle("Error occured while signing up!");
  }

  return data;
}

export async function updateUser({ avatarSrc, fullName }) {
  let image = avatarSrc;
  if (avatarSrc) {
    const avatarName = `${Math.random()}${avatarSrc.name.replace("/", "")}`;
    const { data: imgSrc, error } = await supabase.storage
      .from("avatars")
      .upload(avatarName, avatarSrc);

    if (error) {
      ErrorHandle("Problem happened while the image is being uploaded");
    }

    image = getPublicURL(imgSrc.path);
  }

  const { data, error } = await supabase.auth.updateUser({
    data: { avatar: image, fullName: fullName },
  });

  if (error) {
    ErrorHandle("Error occured while signing up!");
  }

  return data;
}

export async function updatePassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    ErrorHandle("Error occured while updating the password");
  }

  return data;
}
function getPublicURL(path) {
  const { data } = supabase.storage.from("avatars").getPublicUrl(path);
  const { publicUrl } = data;
  return publicUrl;
}
