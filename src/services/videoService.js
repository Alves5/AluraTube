import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ugbybrwbofvgiimkxoce.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnlicndib2Z2Z2lpbWt4b2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODAxNzksImV4cCI6MTk4Mzc1NjE3OX0.c6wFj1iowioivMixW5yLq3pp9oFe7YA8Af_WDi885EI";
const supabase = createClient(supabaseUrl, supabaseKey);

export function videoService(){
    return {
        getAllVideos(){
            return supabase.from("video")
                .select("*");
        }
    }
}