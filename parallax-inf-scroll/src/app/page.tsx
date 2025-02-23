"use client"
import { useEffect } from 'react';
import Lenis from 'lenis'
import Landing from "./components/Landing";
import Description from './components/Description';
import Secondary from './components/Secondary';
import Final from './components/Final';

export default function Home() {
  useEffect(() => {

    const lenis = new Lenis()
    function raf(time: number) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)

  }, [])



  return (

    <main>

      <Landing />
      <Description />
      <Secondary />
      <Final />

      <div className='h-screen'></div>

    </main>

  );
}
