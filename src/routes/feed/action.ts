import { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  return fetch("/api/feed", {
    method: "POST",
    body: JSON.stringify({
      comment: formData.get("comment"),
      name: "Tom Cook",
      data: +new Date(),
    }),
  });
}
