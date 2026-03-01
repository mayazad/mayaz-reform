'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface EvolvingAvatarProps {
    level: number;
}

export function EvolvingAvatar({ level }: EvolvingAvatarProps) {
    const getStage = (lvl: number) => {
        if (lvl <= 10) return { id: 1, name: 'Starting Out', description: 'Body Stage 1: Soft', gradient: 'from-slate-400 to-slate-600', imagePath: '/avatars/stage-1.png' };
        if (lvl <= 25) return { id: 2, name: 'Leaning Down', description: 'Body Stage 2: Toned', gradient: 'from-cyan-400 to-blue-600', imagePath: '/avatars/stage-2.png' };
        if (lvl <= 40) return { id: 3, name: 'Building Muscle', description: 'Body Stage 3: Muscular', gradient: 'from-violet-400 to-purple-600', imagePath: '/avatars/stage-3.png' };
        return { id: 4, name: 'Goal Physique', description: 'Body Stage 4: Shredded', gradient: 'from-orange-400 to-red-600', imagePath: '/avatars/stage-4.png' };
    };

    const stage = getStage(level);

    return (
        <div className="relative w-[140px] h-[220px] sm:w-[200px] sm:h-[260px] flex-shrink-0 group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-end"
                >
                    {/* Character Visual */}
                    <div className="relative w-full h-[90%] z-10 drop-shadow-2xl">
                        {/* Soft behind glow */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${stage.gradient} opacity-20 blur-2xl rounded-full scale-110 pointer-events-none`} />
                        <Image
                            src={stage.imagePath}
                            alt={stage.name}
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>

                    {/* Stage Label overlapping character's feet slightly */}
                    <div className="relative z-20 mt-[-10px] bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-xl group-hover:border-white/30 transition-colors">
                        <p className="text-[10px] sm:text-xs font-bold text-white text-center tracking-wider">{stage.name}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Level Badge Overlay (Top Left) */}
            <div className="absolute top-2 -left-2 sm:top-4 sm:-left-4 z-30 drop-shadow-2xl group-hover:scale-110 transition-transform">
                <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                    {/* Outer hexagon/circle shape glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.gradient} rounded-xl rotate-45 opacity-70 blur-sm`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.gradient} rounded-xl rotate-45 border border-white/30 flex items-center justify-center shadow-inner`} />
                    <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                        <span className="text-white font-black text-sm sm:text-lg drop-shadow-md">
                            {level}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
