// Create a Trusted Types policy for script URL creation
if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
  // Create a policy that allows script URLs from trusted sources
  window.trustedTypes.createPolicy('default', {
    createScriptURL: (url) => {
      try {
        const parsedUrl = new URL(url, window.location.origin);
        
        // Allow relative URLs and localhost in development
        if (!parsedUrl.host || 
            parsedUrl.hostname === 'localhost' ||
            parsedUrl.hostname === '127.0.0.1' ||
            // Your domains
            parsedUrl.hostname.endsWith('vardaanlearning.com') ||
            parsedUrl.hostname.endsWith('vardaanlearning.in') ||
            // Cloudinary
            parsedUrl.hostname.endsWith('cloudinary.com') ||
            parsedUrl.hostname.endsWith('res.cloudinary.com') ||
            // Common CDNs and trusted domains
            parsedUrl.hostname.endsWith('.vercel.app') ||
            parsedUrl.hostname.endsWith('.netlify.app') ||
            parsedUrl.hostname.endsWith('.netlify.com') ||
            parsedUrl.hostname.endsWith('.cloudfront.net') ||
            parsedUrl.hostname.endsWith('.amazonaws.com') ||
            parsedUrl.hostname.endsWith('.googleapis.com') ||
            parsedUrl.hostname === 'vercel.com' ||
            parsedUrl.hostname.endsWith('vercel.app') ||
            parsedUrl.hostname.endsWith('supabase.co') ||
            parsedUrl.hostname.endsWith('netlify.com')) {
          return url;
        }
        
        console.warn('Blocked script URL:', url);
        return 'about:blank';
      } catch (e) {
        console.error('Error processing URL:', url, e);
        return 'about:blank';
      }
    }
  });
}
