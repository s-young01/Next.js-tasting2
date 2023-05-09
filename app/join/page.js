export default function Join() {
    return (
        <div className="join-bg">
            <form className="join-form">
            <h2>회원가입</h2>
                <table className="join-table">
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input name="name"/>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input name="id"/>
                                <button className="duplex-btn">중복확인</button> 
                            </td>
                            
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name="pw"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav className="join-btns">
                    <button type="submit">가입</button>
                    <button type="">취소</button>
                </nav>
            </form>
        </div>
    )
}