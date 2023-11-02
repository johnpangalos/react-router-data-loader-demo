export async function loader() {
  const res = await fetch("/api/people");
  return await res.json();
}
