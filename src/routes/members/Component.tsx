import { useLoaderData } from "react-router"
import Table from "../../components/Table"
import { Person } from "../../types"

export function Component() {
  const data = useLoaderData() as { people: Person[] }
  return <Table people={data.people} />
}
