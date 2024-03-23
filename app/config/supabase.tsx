import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_API_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_API_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("As variáveis de ambiente EXPO_PUBLIC_API_SUPABASE_URL e EXPO_PUBLIC_API_SUPABASE_ANON_KEY devem estar definidas.");
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
