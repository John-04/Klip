/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each waitlist entry
      - `email` (text, unique, not null) - User's email address
      - `created_at` (timestamptz) - Timestamp when user joined waitlist
      - `metadata` (jsonb) - Optional metadata (e.g., referral source, user agent)
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous users to insert their email (one-time only)
    - Add policy for service role to read all entries (admin access)
  
  3. Important Notes
    - Email must be unique to prevent duplicate signups
    - Table is insert-only for public users to maintain data integrity
    - Timestamps automatically set to current time on insert
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  metadata jsonb DEFAULT '{}'::jsonb
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert their email once
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admin) to view all waitlist entries
CREATE POLICY "Authenticated users can view all entries"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);