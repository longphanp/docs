import { useEffect, useState } from "react";

export default function About() {
  const [content, setContent] = useState("Click me");

  useEffect(() => {
    fetch("/api/hello");
  }, []);

  return (
    <div>
      <p>About</p>
      <button onClick={() => setContent("Oh no")}>{content}</button>
    </div>
  );
}
