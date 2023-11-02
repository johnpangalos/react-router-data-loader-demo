export async function loader() {
  const res = await fetch("/api/stats");
  return await res.json();
}
