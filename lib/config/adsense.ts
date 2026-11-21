export const ADSENSE_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "";

/**
 * Explicitly enable the AdSense script when connecting/verifying the site
 * for AdSense review or when enabling ads after approval. A publisher ID
 * alone must not load the script unintentionally.
 */
export const ADSENSE_ENABLED =
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" &&
  Boolean(ADSENSE_PUBLISHER_ID);
