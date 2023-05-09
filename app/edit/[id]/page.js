import DetailLink from "@/app/list/DetailLink";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    const db = (await connectDB).db("forum");
    // post컬렉션의 하나의 document만 가지고 오기
    // .findOne({찾을document정보})
    let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.id) });
    return (
        <div className="list-bg">
            <div className="top">
                <h2>글 수정 ✍</h2>
                <DetailLink />
            </div>
            <form action="/api/post/edit" method="POST">
                {/* defaultValue : 기본값으로 만들어줌 */}
                <input name="title" placeholder="제목을 입력하세요" defaultValue={result.title}/>
                <textarea name="content" placeholder="내용을 입력하세요" defaultValue={result.content}/>
                <input style={{display: 'none'}} name="_id" defaultValue={result._id.toString()}/>
                <nav>
                    <button type="submit" className="submit-btn">
                       수정
                    </button>
                </nav>
            </form>
        </div>
    )
}