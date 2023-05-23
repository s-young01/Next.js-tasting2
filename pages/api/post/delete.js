import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(res, req) {
    if(res.method == 'DELETE') {
        try {
            const db = (await connectDB).db("forum");
            // .deleteOne({삭제할 document 정보})
            let result = await db.collection('post').deleteOne(
                {_id: new ObjectId(res.body)});
            console.log(result);
        }
        catch(e) {
            req.status(500);
        }
        return req.status(200).redirect('/list');
    }
}