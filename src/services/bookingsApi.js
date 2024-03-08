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

export async function getBookings(filter, order) {
  const BASE_QUERY = supabase
    .from("bookings")
    .select("*,cabins(cabinName),guests(fullName,email)");
  let response;
  if (filter === "all") {
    response = BASE_QUERY;
  } else {
    response = BASE_QUERY.eq("status", filter);
  }

  if (order === "") {
    response = await response;
  } else {
    const [ascending, sortBy] = order.split("-");

    response = await response.order(sortBy, { ascending: ascending === "asc" });
  }

  const { data: booking, error } = response;
  if (error) {
    ErrorHandle("Problem occured while fetching the bookings");
  }
  return booking;
}
