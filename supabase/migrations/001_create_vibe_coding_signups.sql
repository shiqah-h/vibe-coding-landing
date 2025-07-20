-- Migration: Create vibe_coding_signups table
CREATE TABLE IF NOT EXISTS vibe_coding_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  newsletter_consent BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Index for fast email lookup
CREATE INDEX IF NOT EXISTS idx_vibe_coding_signups_email ON vibe_coding_signups(email);

-- Index for fast created_at queries
CREATE INDEX IF NOT EXISTS idx_vibe_coding_signups_created_at ON vibe_coding_signups(created_at); 