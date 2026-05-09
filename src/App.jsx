import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursor) {
        cursor.style.left = mouseX - 4 + 'px'
        cursor.style.top = mouseY - 4 + 'px'
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (follower) {
        follower.style.left = followerX - 16 + 'px'
        follower.style.top = followerY - 16 + 'px'
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-bg noise-overlay">
      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Ambient glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,0,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(127,0,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
