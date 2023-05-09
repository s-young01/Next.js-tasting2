import { connectDB } from "@/util/database";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Bar from "./Bar";

export default async function List() {
    const db = (await connectDB).db("forum");
    // post컬렉션의 모든 document 가져오기
    let result = await db.collection("post").find().toArray();
    return (
        <div className="list-bg">
            <Bar/>
            { result.map((a, i) =>
                <div className="list-item" key={i}>
                    <Link href={`/detail/${result[i]._id}`}>
                        <h2>{result[i].title}</h2>
                    </Link>
                    <p>{result[i].content}</p>
                </div>
            ) }
            <Link href="/write">
                <button className="write-btn">
                    <FontAwesomeIcon icon={faPen} className="pen-icon"/>
                </button>
            </Link>
        </div>
    )
}