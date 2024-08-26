import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { formatDate } from '@/app/utils'

export default function Home() {
  return (
    <div className="prose dark:prose-invert mx-auto pb-10">
      {allPosts.map((post) => (
        <article key={post._id} className="mb-8">
          <Link href={post.slug}>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          </Link>
          {post.description && <p className="mb-4">{post.description}</p>}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(post.date)}
          </p>
        </article>
      ))}
    </div>
  )
}
