import Link from "next/link";

export default function Bar() {
    return (
        <ul className="menu-bar">
            <li>
                <Link href="/login">로그인</Link>
            </li>
            <li>
                <Link href="/join">회원가입</Link>
            </li>
        </ul>
    )
}