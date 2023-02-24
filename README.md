# Next.js with TypeScript, Tailwind CSS, Contentlayer, and MDX

This is a template repository for creating a website with Next.js using TypeScript and Tailwind CSS for styling. It also includes Contentlayer for a CMS system and MDX for creating dynamic pages with content from the CMS.

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/ricomuh/contentlayer-ts.git
   ```

2. Install dependencies:

   ```bash
   cd contentlayer-ts
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The website should now be running at [http://localhost:3000](http://localhost:3000).

## Contentlayer

Contentlayer is a simple and flexible content management system for Next.js. It allows you to define a schema for your content and use it to generate static pages using MDX.

### Defining a Schema

The schema is defined in `src/contentlayer/schema.ts`. Here's an example schema for a blog:

```typescript
import { defineDocumentType } from "contentlayer/schema";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: { type: "string" },
    author: { type: "string" },
    body: { type: "mdx" },
    publishedAt: { type: "date" },
  },
}));
```

The `filePathPattern` field is used to tell Contentlayer where to find the content files. In this example, it's set to `posts/*.mdx`, which means that Contentlayer will look for `.mdx` files in the `posts` directory.

### Creating Content

To create content, create a new Markdown file in the `posts` directory. The file should have a `.mdx` extension and start with a YAML front matter section defining the document type and its fields:

```yaml
---
type: Post
title: My First Post
author: Jane Doe
publishedAt: "2023-02-24"
---
# Welcome to my blog

This is my first post.
```

## TypeScript Support

Contentlayer has built-in TypeScript support. The `Post` type used in the example above is automatically generated from the schema definition.

### Tailwind CSS

This repository uses Tailwind CSS for styling. Tailwind is a utility-first CSS framework that allows you to rapidly build custom designs. If you're not familiar with Tailwind, you can learn more at [TailwindCSS.com](https://tailwindcss.com/).

## Deploying

To deploy your website, you can use any deployment platform that supports Next.js. Here are some popular options:

- Vercel
- Netlify
- AWS Amplify

You can also deploy to a custom server by building the app and running it as a Node.js process. Here's how to do it:

Build the app:

    ```bash
    npm run build
    ```

Start the app:

    ```bash
    npm start
    ```

The website should now be running at http://localhost:3000.

## Learn More

To learn more about Next.js, check out the [Next.js documentation](https://nextjs.org/docs).

To learn more about Contentlayer, check out the [Contentlayer documentation](https://www.contentlayer.dev/docs/).

To learn more about Tailwind CSS, check out the [Tailwind CSS documentation](https://tailwindcss.com/docs).

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, please open an issue or submit a pull request.
