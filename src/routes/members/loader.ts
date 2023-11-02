import { defer } from "react-router";

export async function loader() {
  return defer({ res: fetch("/api/people").then((res) => res.json()) });
}
