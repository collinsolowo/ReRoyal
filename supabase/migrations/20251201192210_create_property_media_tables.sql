/*
  # Create Property Media Tables
  
  1. New Tables
    - `properties_extended` - Enhanced property data with details
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique) - URL-friendly identifier
      - `location` (text)
      - `type` (text)
      - `status` (text)
      - `description` (text)
      - `long_description` (text) - Detailed property info
      - `price` (numeric or text) - Stored as string for USD format
      - `bedrooms` (integer)
      - `bathrooms` (integer)
      - `size` (integer) - in sqm
      - `features` (jsonb) - Array of features
      - `specifications` (jsonb) - Additional specs like title, completion date, etc.
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `property_media` - Images and videos for properties
      - `id` (uuid, primary key)
      - `property_id` (uuid, foreign key)
      - `media_url` (text)
      - `media_type` (text) - 'image' or 'video'
      - `title` (text) - Optional title for media
      - `display_order` (integer) - For sorting
      - `is_primary` (boolean) - Featured image
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS properties_extended (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  location text NOT NULL,
  type text NOT NULL,
  status text NOT NULL DEFAULT 'available',
  description text,
  long_description text,
  price text,
  bedrooms integer,
  bathrooms integer,
  size integer,
  features jsonb DEFAULT '[]'::jsonb,
  specifications jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS property_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties_extended(id) ON DELETE CASCADE,
  media_url text NOT NULL,
  media_type text NOT NULL CHECK (media_type IN ('image', 'video')),
  title text,
  display_order integer DEFAULT 0,
  is_primary boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE properties_extended ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view properties"
  ON properties_extended
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view property media"
  ON property_media
  FOR SELECT
  TO public
  USING (true);

CREATE INDEX idx_properties_extended_slug ON properties_extended(slug);
CREATE INDEX idx_property_media_property_id ON property_media(property_id);
CREATE INDEX idx_property_media_display_order ON property_media(display_order);
