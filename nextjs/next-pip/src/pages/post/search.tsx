import { useRouter } from "next/router";

function getPosts(q: any) {
  return { title: `Search this post : ${q}` };
}

export default function Search({ post }: any) {
  return (
    <div>
      <p>search post</p>
      <b>{post.title}</b>
    </div>
  );
}

export function getServerSideProps({ query, res }: any) {
  const post = getPosts(query.q);
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { post } };
}
