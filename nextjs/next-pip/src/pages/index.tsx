import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <div>
      home
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/posts">Posts</Link>
    </div>
  );
}
