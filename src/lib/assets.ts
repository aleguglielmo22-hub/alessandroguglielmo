/** Prefixes a public asset path with Vite's base URL so it works on GitHub Pages sub-folders. */
export const asset = (path: string) => {
  const base = import.meta.env.BASE_URL ?? "/";
  // Avoid double slashes
  if (path.startsWith("/")) {
    return `${base.replace(/\/$/, "")}${path}`;
  }
  return `${base}${path}`;
};
