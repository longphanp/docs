import { stdout } from "process";

interface Post {
  title: string;
}

const fetchPost = async () => {
  return new Promise((reslv, rej) => {
    setTimeout(() => reslv([{ title: "hi" }, { title: "hello" }]), 2000);
  });
};

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchPost();
  console.log(process.cwd());
  return {
    props: {
      posts: data,
    },
  };
}
