'use client'

import { useState } from "react";
import DetailLink from "../list/DetailLink";

export default function Write() {
    // input, textarea 상태관리
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const Title = (e) => {
        setTitle(e.target.value);
    }
    const Content = (e) => {
        setContent(e.target.value);
    }
    const onClick = () => {
        if(title == '' || content == '') {
            alert('제목이나 내용을 작성해주세요');
        }
    }
    return (
        <div className="list-bg">
            <div className="top">
                <h2>글 쓰기 ✍</h2>
                <DetailLink />
            </div>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="제목을 입력하세요" 
                onChange={Title} value={title}/>
                <textarea name="content" placeholder="내용을 입력하세요" 
                onChange={Content} value={content}/>
                <nav>
                    <button type="submit" className="submit-btn" onClick={onClick}>
                        등록
                    </button>
                </nav>
            </form>
        </div>
    )
}