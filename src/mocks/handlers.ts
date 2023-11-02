import { delay, http, HttpResponse, passthrough } from "msw";
import { navigation, stats, people } from "./dummies";

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
  http.get("*", () => {
    return passthrough();
  }),
];
