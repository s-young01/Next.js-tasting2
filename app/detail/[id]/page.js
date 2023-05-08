import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    const db = (await connectDB).db("forum");
    // post컬렉션의 하나의 document만 가지고 오기
    // .findOne({찾을document정보})
    let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.id) });
    console.log(props.params.id);
    return (
        <div>
            <h2>상세 페이지</h2>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
        </div>
    )
}