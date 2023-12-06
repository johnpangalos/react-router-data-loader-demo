export async function loader() {
  const res = await fetch("/api/feed");
  return await res.json();
}
