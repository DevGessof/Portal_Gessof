/**
 * GESSOF Portal - Supabase Configuration
 * Inicialización asíncrona para evitar race condition con el CDN de Supabase JS.
 */

export const SUPABASE_URL = 'https://wjsfqwzzrvfjhcbjhrvr.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqc2Zxd3p6cnZmamhjYmpocnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MDYwMDUsImV4cCI6MjA4NzE4MjAwNX0.qDCca0RIDRQW_UtbeyXqpjOtpQy0jFr-XAfe6N64koM';

let _client = null;

/**
 * Retorna Promise<SupabaseClient>.
 * Espera hasta 5s a que el SDK del CDN esté disponible en window.supabase.
 */
export async function getSupabase() {
    if (_client) return _client;

    if (!window.supabase) {
        await new Promise((resolve, reject) => {
            let elapsed = 0;
            const iv = setInterval(() => {
                elapsed += 100;
                if (window.supabase) { clearInterval(iv); resolve(); }
                else if (elapsed >= 5000) { clearInterval(iv); reject(new Error('Timeout: SDK Supabase CDN no cargó.')); }
            }, 100);
        });
    }

    _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _client;
}

// Export `supabase` como alias de getSupabase para compatibilidad con imports existentes.
// Internamente, cada función en supabase-client.js llama a getSupabase() antes de usarlo.
export const supabase = { _getClient: getSupabase };
