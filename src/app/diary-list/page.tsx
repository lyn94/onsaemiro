import Link from "next/link";

export default function DiaryList() {
  const dummyNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="w-1/2">
      <h1>일기장 목록</h1>
      <div>
        <Link href="/diary-list/new">일기 쓰기</Link>
      </div>
      <div className="flex flex-col gap-4">
        {dummyNumbers.map((num, key) => (
          <Link href={`/diary-list/${num}`} key={key} className="bg-amber-100">
            {num}번 노트
          </Link>
        ))}
      </div>
    </div>
  );
}
