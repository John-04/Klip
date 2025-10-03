/*
  # Add Email Notification Trigger

  1. New Functions
    - `trigger_welcome_email()` - Function that calls the edge function to send welcome email
  
  2. New Triggers
    - `on_waitlist_insert` - Trigger that fires after a new row is inserted into waitlist table
  
  3. Important Notes
    - Uses Supabase's pg_net extension to make HTTP requests
    - Calls the send-welcome-email edge function asynchronously
    - Non-blocking to ensure fast signup experience
*/

-- Create function to trigger welcome email
CREATE OR REPLACE FUNCTION trigger_welcome_email()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  supabase_url text;
  service_role_key text;
BEGIN
  -- Get Supabase URL from environment
  supabase_url := current_setting('app.settings.supabase_url', true);
  service_role_key := current_setting('app.settings.service_role_key', true);
  
  -- If settings not available, use the public URL pattern
  IF supabase_url IS NULL THEN
    supabase_url := 'https://kmmjmmtflvdwrozxyzoo.supabase.co';
  END IF;

  -- Make async HTTP request to edge function
  SELECT INTO request_id net.http_post(
    url := supabase_url || '/functions/v1/send-welcome-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || COALESCE(service_role_key, current_setting('request.headers', true)::json->>'authorization')
    ),
    body := jsonb_build_object('email', NEW.email)
  );

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't fail the insert
    RAISE WARNING 'Failed to trigger welcome email: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
DROP TRIGGER IF EXISTS on_waitlist_insert ON waitlist;

CREATE TRIGGER on_waitlist_insert
  AFTER INSERT ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION trigger_welcome_email();