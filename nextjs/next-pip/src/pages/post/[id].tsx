import { useRouter } from "next/router";

const getPost = (id: number): any => {
  const posts: any = {
    "1": { title: "hahahahahahahah" },
    "2": { title: "hohohoohohohohho" },
  };

  return posts?.[id];
};

export default function Post({ post }: any) {
  const router = useRouter();
  return (
    <div>
      <p>post-{router.query.id}</p>
      <p>{post.title}</p>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getPost(params.id);
  return { props: { post } };
}
