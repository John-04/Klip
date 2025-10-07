/*
  # Fix Email Notification System

  1. Changes
    - Drop the previous trigger and function
    - Create new trigger using Supabase's http extension
    - Use proper URL and authentication
  
  2. Important Notes
    - Uses extensions.http_post for making requests
    - Properly configured to call edge function
    - Non-blocking to ensure fast signup
*/

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_waitlist_insert ON waitlist;
DROP FUNCTION IF EXISTS trigger_welcome_email();

-- Create new function to trigger welcome email using http extension
CREATE OR REPLACE FUNCTION trigger_welcome_email()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Make HTTP request to edge function using supabase_url from .env
  SELECT extensions.http_post(
    url := 'https://0ec90b57d6e95fcbda19832f.supabase.co/functions/v1/send-welcome-email',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw"}'::jsonb,
    body := jsonb_build_object('email', NEW.email)
  ) INTO request_id;

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't fail the insert
    RAISE WARNING 'Failed to trigger welcome email: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
CREATE TRIGGER on_waitlist_insert
  AFTER INSERT ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION trigger_welcome_email();