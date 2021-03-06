import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="143" y="114" rx="3" ry="3" width="139" height="9" />
        <rect x="58" y="112" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="15" cy="116" r="12" />
        <rect x="302" y="118" rx="3" ry="3" width="88" height="6" />
    </ContentLoader>
)

export default CardLoader