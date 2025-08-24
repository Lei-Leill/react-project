import { createClient } from '@supabase/supabase-js';

const URL = 'https://opkmatdrragqxqpclkgf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wa21hdGRycmFncXhxcGNsa2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDc3MTYsImV4cCI6MjA3MTU4MzcxNn0.3zOQkwL4IhQ-IC7Vf-dFVaJuxzJkT2VzCpDP_LoUG9w'

export const supabase = createClient(URL, API_KEY);
