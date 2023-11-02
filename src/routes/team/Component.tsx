import { Outlet, useLoaderData } from "react-router"
import Stats from "../../components/Stats"
import { Stat } from "../../types"

export function Component() {
  const data = useLoaderData() as { stats: Stat[] }
  return <>
    {data.stats && <Stats stats={data.stats} />}
    <div className="py-12">
      <Outlet />
    </div>
  </>
}
