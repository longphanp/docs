# Setup code base

```
npx create-next-app
```

# Pages

## Routing

[https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)

```
    src/pages
        -- index.tsx // root-path
        -- about.tsx // /about
        -- posts
            -- [id].tsx // /post/:id
```

## Server side rendering

[https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)

```js
    export const getServerSideProps(context) => {
        return {props: {}}
    }
```

## Static site generation

[https://nextjs.org/docs/api-reference/data-fetching/get-static-paths](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths)
[https://nextjs.org/docs/api-reference/data-fetching/get-static-props](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)

```js
    export const getStaticPaths() => {

    }

    export const getStaticProps(context) => {
        return {props: {}}
    }
```

## Incremental Static Regeneration

- Rebuild static pages

```js
    export const getStaticProps(context) => {
        return {
            props: {},
            revalidate: 10 // Once every 10 seconds
        }
    }

```

- On-Demand Revalidation
  Create api to revalidate path

```js
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate("/path-to-revalidate");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
```

# Components

## Head

```
    import Head from 'next/head'
```

## Image

```
   import Image from 'next/image'

    <Image src="" />
```

## Link

```
    import Link from 'next/link'
    <Link href=encodeURI("link") />
```

## Script

```
    import Script from 'next/script'
    <Script src=""/>
```

## Router

[https://nextjs.org/docs/routing/dynamic-routes](https://nextjs.org/docs/routing/dynamic-routes)

```
    import { useRouter } from 'next/router'

    const query = useRouter().query;
```

## API Route

[https://nextjs.org/docs/api-routes/introduction](https://nextjs.org/docs/api-routes/introduction)

## Middleware

[https://nextjs.org/docs/advanced-features/middleware](https://nextjs.org/docs/advanced-features/middleware)

# Performance

[https://nextjs.org/docs/advanced-features/measuring-performance](https://nextjs.org/docs/advanced-features/measuring-performance)

# i18

[https://nextjs.org/docs/advanced-features/i18n-routing](https://nextjs.org/docs/advanced-features/i18n-routing)

# Config

[https://nextjs.org/docs/api-reference/next.config.js/introduction](https://nextjs.org/docs/api-reference/next.config.js/introduction)
