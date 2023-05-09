'use client'

import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function DetailLink() {
    let router = useRouter();
    return (
        <button onClick={() => { router.back() }} className="back-btn">
            <FontAwesomeIcon icon={faEllipsisVertical} className="back-icon"/>
        </button>
    )
}