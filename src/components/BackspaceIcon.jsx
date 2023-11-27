import React from "react";

function BackspaceIcon({onClick, disabled}) {
    return (
        <button className="ml-auto px-1 " disabled={disabled} onClick={onClick}>
            <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={`w-5  ${disabled ? "cursor-not-allowed text-slate-400" : "text-lime-500"}`}
            >
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                ></path>
            </svg>
        </button>
    );
}

export default BackspaceIcon;
