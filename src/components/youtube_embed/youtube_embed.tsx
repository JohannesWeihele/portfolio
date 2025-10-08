import { FC, useEffect, useRef, useState } from "react";

interface YoutubeEmbedProps {
    videoId: string;
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ videoId }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Lazy Load: iframe erst laden, wenn sichtbar
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} style={{ position: "relative", paddingTop: "56.25%" }}>
            {isVisible && (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                ></iframe>
            )}
            {!isVisible && <div style={{ background: "#000", width: "100%", height: "100%" }}>Lädt Video …</div>}
        </div>
    );
};

export default YoutubeEmbed;
