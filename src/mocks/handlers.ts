import { delay, http, HttpResponse, passthrough } from "msw";
import { navigation, stats, people, feed } from "./dummies";
import { Comment } from "../types";
import { v4 as uuidv4 } from "uuid";

let localFeed = [...feed];

export const handlers = [
  http.get("/api/permissions", async () => {
    await delay(200);
    return HttpResponse.json({ navigation });
  }),
  http.get("/api/stats", async () => {
    await delay(200);
    return HttpResponse.json({ stats });
  }),
  http.get("/api/people", async () => {
    await delay(2000);
    return HttpResponse.json({ people });
  }),
  http.get("/api/feed", async () => {
    await delay(200);
    return HttpResponse.json({ feed: localFeed });
  }),
  http.post("/api/feed", async ({ request }) => {
    await delay(200);
    const comment = (await request.json()) as Comment;
    localFeed = [...localFeed, { ...comment, id: uuidv4() }];
    return HttpResponse.json({ comment });
  }),
  http.get("*", () => {
    return passthrough();
  }),
];
