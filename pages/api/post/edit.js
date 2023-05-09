import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(res, req) {
    if(res.method == 'POST') {
        if(res.body.title == '' || res.body.content == '') {
            // 500에러를 내고, edit 페이지로 이동
            req.status(500).redirect('/edit');
        }else {
            // 수정할 데이터들만 변수에 담기
            let edit = {
                title: res.body.title,
                content: res.body.content
            }
            const db = (await connectDB).db("forum");
            // .updateOne({수정할 document 정보}, {$set: {수정할 내용}})
            let result = await db.collection('post').updateOne(
                {_id: new ObjectId(res.body._id)}, 
                {$set: edit}
            );
            return req.status(200).redirect('/list');
        }
    }
}