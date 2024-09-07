/* 首页 */
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { formatDate } from "@/app/utils";

export default function Home() {
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });

  return (
    <div className="prose dark:prose-invert mx-auto pb-10">
      {sortedPosts.map((post) => (
        <article key={post._id} className="mb-8">
          <Link href={post.slug} className="no-underline">
            <h2 className="text-2xl font-bold mb-2 hover:text-gray-400 dark:hover:text-gray-500">
              {post.title}
            </h2>
          </Link>
          {post.description && <p className="mb-4">{post.description}</p>}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(post.date)}
          </p>
          <hr />
        </article>
      ))}
    </div>
  );
}
