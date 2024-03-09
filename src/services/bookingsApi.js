import { PAGE_SIZE } from "../util/constants";
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

export async function getBookings(filter, order, page, search) {
  const BASE_QUERY = supabase
    .from("bookings")
    .select("*,cabins(cabinName),guests!inner(fullName,email)", {
      count: "exact",
    });
  let response = BASE_QUERY;

  if (search !== "") {
    response = response.ilike("guests.fullName", `%${search}%`);
  }

  if (filter === "all") {
    response = response;
  } else {
    response = response.eq("status", filter);
  }

  if (order !== "") {
    const [ascending, sortBy] = order.split("-");

    response = response.order(sortBy, { ascending: ascending === "asc" });
  }

  const from = +page * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  response = await response.range(from, to);
  const { data: booking, error, count } = response;
  if (error) {
    ErrorHandle("Problem occured while fetching the bookings");
  }

  return { booking, count };
}

export async function deleteBooking(id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    ErrorHandle("Error occured while deleting cabin!");
  }
}
