const backendUrl =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export function buildApiUrl(path) {
  return `${backendUrl}${path}`;
}
