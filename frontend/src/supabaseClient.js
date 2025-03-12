import { createClient } from "@supabase/supabase-js"
import { VITE_PROJECT_URL, VITE_ANON_KEY } from "../envConfig"

export const supabase = createClient(VITE_PROJECT_URL, VITE_ANON_KEY)
