import { useEffect, useRef } from "react";

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);

        const codes = [];

        const snippets = [
            "const app = () => {}",
            "Wellcome",
            "import React from 'react'",
            "export default Portfolio",
            "RAIHAN ALAM",
            "useEffect()",
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "TailwindCSS",
            "Three.js",
            "Firebase",
            "async await",
            "King",
            "<Canvas />",
            "npm run dev",
            "git commit",
            "class Developer {}",
            "return <Hero />",
        ];

        for (let i = 0; i < 80; i++) {
            codes.push({
                x: Math.random() * (w + 400) - 200,
                y: Math.random() * h,
                speed: 0.3 + Math.random() * 1,
                text: snippets[Math.floor(Math.random() * snippets.length)],
                size: 10 + Math.random() * 4,
            });
        }

        function animate() {
            ctx.clearRect(0, 0, w, h);

            ctx.fillStyle = "#050816";
            ctx.fillRect(0, 0, w, h);

            codes.forEach((c) => {

                ctx.save();

                ctx.translate(c.x, c.y);

                // একটু Rotate
                ctx.rotate(-0.25);

                ctx.font = `${c.size}px monospace`;

                ctx.fillStyle = "rgba(56,189,248,0.08)";

                ctx.fillText(c.text, 0, 0);

                ctx.restore();

                c.y += c.speed * 0.5;

                if (c.y > h + 50) {
                    c.y = -50;
                    c.x = Math.random() * (w + 400) - 200;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0"
        />
    );
};

export default Background;