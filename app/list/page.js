import { connectDB } from "@/util/database";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";

export default async function List() {
    const db = (await connectDB).db("forum");
    // post컬렉션의 모든 document 가져오기
    let result = await db.collection("post").find().toArray();
    result = result.map(a => {
        a._id = a._id.toString()
        return a        
    });
    return (
        <div className="list-bg">
            <ListItem result={result}/>
            <Link href="/write">
                <button className="write-btn">
                    <FontAwesomeIcon icon={faPen} className="pen-icon"/>
                </button>
            </Link> 
        </div>
    )
}