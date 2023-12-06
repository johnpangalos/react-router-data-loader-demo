import { useLoaderData } from "react-router";
import { Comment } from "../../types";
import { Form } from "react-router-dom";

export default function Example() {
  const { feed } = useLoaderData() as { feed: Comment[] };
  return (
    <div className="flow-root">
      <ul role="list" className="pt-4">
        {feed.map((activityItem) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              <div className="relative flex items-start space-x-3">
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">{activityItem.name}</div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Commented {activityItem.date}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{activityItem.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Component() {
  return (
    <>
      <>Feed</>

      <Example />
      <Form method="post">
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add your comment
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue=""
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
