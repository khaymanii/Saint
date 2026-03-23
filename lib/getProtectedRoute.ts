export function getProtectedRoute(user: any, path: string): string {
  return user ? path : `/login?redirect=${encodeURIComponent(path)}`;
}
