import { notFound } from "next/navigation";
import { allPosts } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  return {
    title: JSON.stringify(params),
    // title: "test",
  };
  // const post = allPosts.find((post) => post.slug === params.slug);

  // if (!post) {
  //   return;
  // }

  // // the description is from post.body.raw and generate 15 words
  // const description = post.body.raw.split(" ").slice(0, 15).join(" ");

  // return {
  //   title: post.title,
  //   description,
  // };
};

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  // const Component = useMDXComponent(post.body.html);
  // const MDXComponent = useMDXComponent();

  return (
    <div>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.body.html }}></p>
      {/* <Component /> */}
    </div>
  );
};

export default Post;
