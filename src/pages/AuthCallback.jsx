import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

/**
 * Handles the OAuth redirect from Supabase (e.g. Google sign-in).
 * Supabase returns the user back to /auth/callback#<tokens>.
 * We persist the session, then immediately forward the user to /dashboard.
 */
export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function completeOAuth() {
      try {
        /*
         * When Supabase is configured with PKCE (the default in v2), the server
         * redirects back with a code parameter. For implicit flow it sends
         * tokens in the URL hash. `getSessionFromUrl` gracefully handles both
         * formats and stores the session for you.
         */
        let error = null;
        const hashParams = new URLSearchParams(window.location.hash.replace('#', '?'));
        if (hashParams.get('access_token')) {
          // Implicit flow: tokens are in the hash fragment
          const access_token = hashParams.get('access_token');
          const refresh_token = hashParams.get('refresh_token');
          const expires_in = parseInt(hashParams.get('expires_in') || '3600', 10);
          ({ error } = await supabase.auth.setSession({ access_token, refresh_token, expires_in }));
        } else if (new URLSearchParams(window.location.search).get('code')) {
          // PKCE flow: ?code=...
          ({ error } = await supabase.auth.exchangeCodeForSession(window.location.href));
        }
        if (error) {
                    console.error('Supabase OAuth callback error:', error);
        }
      } finally {
        // Regardless of success, send the user to their dashboard.
        navigate('/dashboard', { replace: true });
      }
    }
    completeOAuth();
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-orange-50">
      <div className="text-lg font-semibold text-orange-700 animate-pulse">Signing you in…</div>
    </div>
  );
}
