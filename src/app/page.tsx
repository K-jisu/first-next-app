import Link from "next/link";

export default function Home() {
  return <div>Hello World!
    <Link href={"/test"}> test페이지로 이동</Link>
  </div>;
}
