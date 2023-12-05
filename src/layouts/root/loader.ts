export async function loader() {
  const res = await fetch("/api/permissions");
  return await res.json();
}
