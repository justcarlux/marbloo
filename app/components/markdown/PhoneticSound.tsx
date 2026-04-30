"use client";

import { motion } from "framer-motion";
import { TbVolume } from "react-icons/tb";
import { useRef, useState } from "react";

export default function PhoneticSound({
    src,
    children,
}: {
    src: string;
    children: React.ReactNode;
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!audioRef.current) {
            audioRef.current = new Audio(src);
            audioRef.current.onplay = () => setIsPlaying(true);
            audioRef.current.onended = () => setIsPlaying(false);
            audioRef.current.onpause = () => setIsPlaying(false);
        }

        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(console.error);
    };

    return (
        <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl cursor-pointer duration-300 border-2
                ${
                    isPlaying
                        ? "bg-primary text-surface border-primary shadow-lg shadow-primary/20"
                        : "bg-primary/5 hover:bg-primary/10 text-primary border-transparent hover:border-primary/20"
                }`}
            onClick={handleClick}
        >
            <span className="font-mono font-bold">{children}</span>
            <TbVolume size={18} className={isPlaying ? "animate-pulse" : ""} />
        </motion.span>
    );
}
