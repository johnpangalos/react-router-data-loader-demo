import { Outlet, useLoaderData } from "react-router-dom"
import Layout from "../../components/Layout"

import { Navigation } from "../../types"

export function Component() {
  const data = useLoaderData() as { navigation: Navigation[] }
  return <Layout navigation={data.navigation}>
    <Outlet />
  </Layout>
}
