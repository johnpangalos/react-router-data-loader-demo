import { defer } from "react-router";

export async function loader() {
  return defer({ data: fetch("/api/people").then((res) => res.json()) });
}
