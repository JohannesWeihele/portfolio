import React, { useEffect, useRef, useState } from "react";

interface LazyMediaProps {
    src: string;
    type?: "video" | "image";
    className?: string;
    [key: string]: any;
}

const LazyMedia: React.FC<LazyMediaProps> = ({ src, type = "image", className, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ minHeight: "200px" }}>
            {isVisible ? (
                type === "video" ? (
                    <video src={src} {...rest} className={className} />
                ) : (
                    <img src={src} {...rest} className={className} loading="lazy" />
                )
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span>Lädt …</span>
                </div>
            )}
        </div>
    );
};

export default LazyMedia;
