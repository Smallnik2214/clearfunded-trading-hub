
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thponngagljdnzijrhmf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocG9ubmdhZ2xqZG56aWpyaG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MDYzODYsImV4cCI6MjA2NjE4MjM4Nn0.b1hhOaIXV3-JxXyFZNuqzw43osLZjqjMiq3QQPKlmic'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
