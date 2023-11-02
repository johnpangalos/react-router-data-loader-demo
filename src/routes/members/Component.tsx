import { Await, useLoaderData } from "react-router"
import Table from "../../components/Table"
import { Person } from "../../types"
import { Suspense } from "react"

export function Component() {
  const { data } = useLoaderData() as { data: unknown };
  return <Suspense fallback={<>Loading...</>}>
    <Await resolve={data}>
      {(data: { people: Person[] }) => (
        <Table people={data.people} />
      )}
    </Await>

  </Suspense>
}
