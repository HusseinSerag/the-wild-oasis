import { ErrorHandle } from "../util/helpers";
import supabase from "./supabase";

export async function login(credentials) {
  let { data, error } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    ErrorHandle(error.message);
  }

  return data;
}
