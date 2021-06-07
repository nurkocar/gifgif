import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width="2em"
            height="2em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 35"
            className="prefix__logo__Logo-hisgyq-0 prefix__iopyGF"
            {...props}
        >
            <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#0f9" d="M0 3h4v29H0z" />
                <path fill="#93f" d="M24 11h4v21h-4z" />
                <path fill="#0cf" d="M0 31h28v4H0z" />
                <path fill="#fff35c" d="M0 0h16v4H0z" />
                <path fill="#f66" d="M24 8V4h-4V0h-4v12h12V8" />
                <path className="prefix__shadow" d="M24 16v-4h4M16 0v4h-4" />
            </g>
        </svg>
    )
}

export default SvgComponent