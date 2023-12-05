import { Await, useLoaderData } from "react-router-dom";
import Table from "../../components/Table";
import { Person } from "../../types";
import { Suspense } from "react";

export function Component() {
  const data = useLoaderData() as { res: unknown };
  return (
    <Suspense fallback={<>Loading...</>}>
      <Await resolve={data.res}>
        {(data: { people: Person[] }) => <Table people={data.people} />}
      </Await>
    </Suspense>
  );
}
