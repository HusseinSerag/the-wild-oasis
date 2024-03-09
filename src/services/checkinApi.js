import { ErrorHandle } from "../util/helpers";
import supabase from "./supabase";

export async function checkin(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    ErrorHandle("A problem occured while checking in guest!");
  }
  return data;
}

export async function checkout(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked-out" })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    ErrorHandle("A problem occured while checking out guest!");
  }
  return data;
}
