/*
  # Enable pg_net Extension

  1. Extensions
    - Enable `pg_net` extension for async HTTP requests
  
  2. Important Notes
    - pg_net is required for database triggers to make HTTP calls
    - This enables the trigger to call the edge function
*/

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;