import React from 'react'

interface BannerProps {
    image: string;
    title: string;
    onClick: () => void;
    buttonText: string;
    href?: string
}

const Banner = ({ image, title, onClick, buttonText, href }: BannerProps) => {
    const handleClick = () => {
        if (href) {
            window.open(href)
        } else {
            onClick()
        }
    }
    return (
        <>
            <div style={{
                width: '240px',
                height: '240px',
                border: '1px solid lightgrey',
                margin: '20px',
                borderRadius: '6px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px'
            }}>
                <div style={{ textAlign: 'center', backgroundColor: 'green', color: 'red' }}>{title}</div>
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        </>
    )
}

export default Banner