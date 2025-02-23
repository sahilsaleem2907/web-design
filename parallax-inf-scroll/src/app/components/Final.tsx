"use client"
import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface PropTypes {
    start?: string;
    end?: string;
}

export default function Final({ start = '-50vh', end = '50vh' }: PropTypes) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);

    return (
        <div className='h-screen overflow-hidden relative'>
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='text-[5vw] uppercase mix-blend-difference'>PIPE DOWN.</p>
            </div>
            <motion.div style={{ y }} className='absolute inset-0'>
                <Image
                    alt=""
                    src="/images/drake.jpg"
                    fill
                />
            </motion.div>
        </div>
    );
}