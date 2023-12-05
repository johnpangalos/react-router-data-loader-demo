import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { useMemo } from "react";

const baseRedirect = {
  path: "",
  loader() {
    return redirect("/team/members")
  },
}

const createRouter = () => createBrowserRouter([
  {
    errorElement: <>oops</>,
    async loader() {
      const { loader } = await import("./routes/root/loader")
      return loader()
    },
    lazy: () => import("./routes/root/Component"),

    children: [
      {
        path: "team",
        lazy: () => import("./routes/team/Component"),
        async loader() {
          const { loader } = await import("./routes/team/loader")
          return loader()
        },
        children: [
          {
            path: "members",
            lazy: () => import("./routes/members/Component"),
            async loader() {
              const { loader } = await import("./routes/members/loader")
              return loader()
            },
          },
          baseRedirect
        ]
      },
      baseRedirect
    ],
  },
]);

export default function Router() {
  const router = useMemo(() => createRouter(), [])
  return <RouterProvider router={router} />
}
