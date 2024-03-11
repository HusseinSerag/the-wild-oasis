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
