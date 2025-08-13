import Link from "next/link";

export default function Home() {
  return (
    <div>
      일기장 목록 페이지
      <nav>
        <Link href="/diary-list">일기장</Link>
      </nav>
    </div>
  );
}
