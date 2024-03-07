import { ErrorHandle } from "../util/helpers";
import supabase from "./supabase";

export async function getBooking(id) {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("*,cabins(*),guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    ErrorHandle("Problem occured while fetching the booking");
  }
  return bookings;
}

export async function getBookings() {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("*,cabins(cabinName),guests(fullName,email)");

  if (error) {
    ErrorHandle("Problem occured while fetching the bookings");
  }
  return booking;
}
