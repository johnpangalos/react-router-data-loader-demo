import { formatDistance } from "date-fns";
import { useLoaderData } from "react-router";
import { Comment } from "../../types";
import { useFetcher } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef } from "react";

const COMMENT_SUBMIT_KEY = "comment-submit";

function Example() {
  let { feed } = useLoaderData() as { feed: Comment[] };
  const fetcher = useFetcher({ key: COMMENT_SUBMIT_KEY });

  if (fetcher.formData) {
    const text = fetcher.formData.get("comment");
    const comment: Comment = {
      comment: text === null ? "" : text.toString(),
      name: "Tom Cook",
      id: uuidv4(),
      date: +new Date(),
    };
    feed = [...feed, comment];
  }

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
                      Commented{" "}
                      {formatDistance(new Date(activityItem.date), new Date(), {
                        addSuffix: true,
                      })}
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
  const fetcher = useFetcher({ key: COMMENT_SUBMIT_KEY });
  const formRef = useRef<HTMLFormElement>(null);

  if (fetcher.state === "submitting") formRef.current?.reset();

  return (
    <>
      <>Feed</>

      <Example />
      <fetcher.Form method="post" ref={formRef}>
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add your comment
        </label>
        <div className="my-2">
          <textarea
            placeholder="Your comment goes here!"
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue=""
          />
        </div>
        <button
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </fetcher.Form>
    </>
  );
}
