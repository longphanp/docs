import { useEffect, useState } from "react";
import Image from "next/image";
import Pepe from "@/assets/pepe.gif";

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hey");
  });
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Image src={Pepe} alt="pepe" priority />
    </div>
  );
}
