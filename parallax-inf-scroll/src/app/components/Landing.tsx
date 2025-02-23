"use client"
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';



export default function Landing() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh']);

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
        >
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='text-[5vw] uppercase mix-blend-difference'>iPod.</p>
            </div>
            <div className='w-full'>
                <motion.div style={{ y }} className='absolute inset-0'>
                    <Image
                        alt=""
                        src="/images/ipod.png"
                        fill
                        style={{ objectFit: "fill" }}
                    />
                </motion.div>
            </div>
        </div>
    );
}