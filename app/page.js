import { connectDB } from "/util/database";

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db("forum");
  // 위의 두 코드를 하나로 축약하기
  const db = (await connectDB).db("forum");
  // post컬렉션의 모든 document 가져오기
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div>
      안녕 여기에는 게시판을 만들어볼거야^_^
    </div>
  )
}
