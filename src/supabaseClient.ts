const { createClient } = require('@supabase/supabase-js');

// Variables d'environnement
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;
console.log(SUPABASE_KEY);
console.log(SUPABASE_URL);

// Initialisation du client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
