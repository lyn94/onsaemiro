export default async function diary({
  params,
}: {
  params: Promise<{ diary: string }>;
}) {
  const { diary } = await params;
  return <div> {diary}번째 일기입니다</div>;
}
