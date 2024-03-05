import { ErrorHandle } from "../util/helpers";
import supabase from "./supabase";

export async function getSettings() {
  let { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) {
    ErrorHandle("Couldn't load settings");
    return;
  }
  return settings;
}

export async function updateSettings(newSettings) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSettings)
    .eq("id", 1)
    .single();

  if (error) {
    ErrorHandle("Failed to update settings");
  }

  return data;
}
