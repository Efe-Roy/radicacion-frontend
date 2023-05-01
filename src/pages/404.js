import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/files");
    }, 3000);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          Homepage
        </Link>
        is 3 seconds...
      </p>
    </div>
  );
};

export default NotFound;
