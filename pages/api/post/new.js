import { connectDB } from "@/util/database";

export default async function handler(res, req) {
    // res.body : 유저가 요청한 데이터 정보가 담겨져있다.
    if(res.method == 'POST') {
        // 제목이나 내용적는란이 공백일 때
        if(res.body.title == '' || res.body.content == '') {
            // 500에러를 내고, write 페이지로 이동
            req.status(500).redirect('/write');
        }else {
            const db = (await connectDB).db("forum");
            // post컬렉션에 하나의 document 삽입하기
            let result = await db.collection("post").insertOne(res.body);
            // .redirect('경로') : 정상적으로 응답되면 해당 경로로 이동
            return req.status(200).redirect('/list');
        }
    }
}