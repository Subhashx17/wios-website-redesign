import { useEffect } from 'react';

/**
 * Minimal per-page SEO helper (no extra dependency like react-helmet
 * needed for a site this size). Sets document title + meta description
 * on mount and restores the defaults on unmount.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');

    if (title) document.title = title;
    if (description && metaDescription) metaDescription.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);

  return null;
}
