
export default function Videosec() {
    return (
        <div className="w-full md:w-9/12 md:justify-start md:gap-x-10 flex items-center justify-center gap-x-10">
            <button className="download-app cursor-pointer"><a href="#">Downlode App</a></button>
            <div className="flex items-center justify-center">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_176_373)">
                        <circle cx="56" cy="41" r="26" fill="white" />
                    </g>
                    <path d="M64 42.5L52.75 48.9952L52.75 36.0048L64 42.5Z" fill="#F54748" />
                    <defs>
                        <filter id="filter0_d_176_373" x="0" y="0" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="15" />
                            <feGaussianBlur stdDeviation="15" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_176_373" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_176_373" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <span className="text-[14px] font-inter text-[#686D77]"><a href="#">Watch Video</a></span>
            </div>
        </div>
    )
}
