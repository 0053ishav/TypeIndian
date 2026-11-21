export const ADSENSE_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "";

/**
 * Enable this only after the site has been approved for AdSense and ads
 * are intentionally being activated in the production environment.
 * A publisher ID alone must not load the advertising script.
 */
export const ADSENSE_ENABLED =
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" &&
  Boolean(ADSENSE_PUBLISHER_ID);
