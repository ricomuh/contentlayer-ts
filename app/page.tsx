import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";

const Page = () => {
  return (
    <div>
      {allPosts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Page;
