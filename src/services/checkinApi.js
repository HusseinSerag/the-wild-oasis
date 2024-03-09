import { ErrorHandle } from "../util/helpers";
import supabase from "./supabase";

export async function checkin(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "checked-in" }, { isPaid: true })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    ErrorHandle("A problem occured while checking in guest!");
  }
  return data;
}
