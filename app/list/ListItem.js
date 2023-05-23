'use client'

import Link from "next/link"

export default function ListItem({result}) {
    return (
        <>
            { result.map((a, i) =>
                <div className="list-item" key={i}>
                    <Link href={`/detail/${result[i]._id}`}>
                        <h2>{result[i].title}</h2>
                    </Link>
                    <p>{result[i].content}</p>
                    <Link href={`/edit/${result[i]._id}`}>
                        <span>수정</span>
                    </Link>
                    <span onClick={(e) => {
                        if(confirm('게시글을 삭제하시겠습니까?')) {
                            alert('삭제되었습니다.');
                            fetch('/api/post/delete', {
                                method: 'DELETE',
                                body: result[i]._id
                            })
                            .then(() => {
                                e.target.parentElement.style.opacity = 0
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 500)
                            })
                        }else {
                            console.log('삭제 취소');
                        }
                    }}>삭제</span>
                </div>
            ) }
        </>
    )
}