import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://mjpzcrwtebxgiicgqfeb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qcHpjcnd0ZWJ4Z2lpY2dxZmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4OTE5OTEsImV4cCI6MjAwNjQ2Nzk5MX0.i993Bta2U2K8qSHI7j63hANUbO2eANU3P3dm-fj8scw';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
