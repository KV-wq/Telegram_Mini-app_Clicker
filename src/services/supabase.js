import { createClient } from "@supabase/supabase-js";

const dbUrl = "https://yiqfihqhmoehysdvrcqz.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcWZpaHFobW9laHlzZHZyY3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNjc4ODIsImV4cCI6MjA0NDg0Mzg4Mn0.eJVYxe8CFC_a0dnigmiF5Mnxz2EbZVcFL9qKtw072ro";

const supabase = createClient(dbUrl, apiKey);
export default supabase;
