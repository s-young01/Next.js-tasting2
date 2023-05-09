import Link from "next/link";

export default async function Home() {
  return (
    <div className="main-bg">
      <div className="center">
        <h1>나의 멋진 게시판</h1>
        👉<Link href="/list"> 게시판 바로가기 </Link>👈
      </div>
    </div>
  )
}