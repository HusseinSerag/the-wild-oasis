import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mewpgfsdvxlgombcioap.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ld3BnZnNkdnhsZ29tYmNpb2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMzE1MzYsImV4cCI6MjAyNDkwNzUzNn0.KNBuq57sHxB3IdEXFHB2ErPNI4TdoX2jbqidc06MLFg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
