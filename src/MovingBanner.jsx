import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import '../src/style/Home.css' 

const MovingBanner = () => {
  const bannerRef = useRef(null)

  useEffect(() => {
    const element = bannerRef.current
    const width = element.scrollWidth
  
    const duration = window.innerWidth < 600 ? 10 : 20  // más rápido en móvil
  
    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: -width / 2,
        duration,
        ease: 'linear',
        repeat: -1,
      }
    )
  }, [])

  return (
    <div className="moving-banner-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
     <div className="moving-banner" ref={bannerRef}>
        Diseño UX/UI &nbsp; ** &nbsp; Desarrollo Web &nbsp; ** &nbsp; Marketing Digital &nbsp; ** &nbsp;
        Diseño UX/UI &nbsp; ** &nbsp; Desarrollo Web &nbsp; ** &nbsp; Marketing Digital &nbsp; ** &nbsp;
        Diseño UX/UI &nbsp; ** &nbsp; Desarrollo Web &nbsp; ** &nbsp; Marketing Digital &nbsp; ** &nbsp;
        Diseño UX/UI &nbsp; ** &nbsp; Desarrollo Web &nbsp; ** &nbsp; Marketing Digital &nbsp; ** &nbsp;
</div>
    </div>
  )
}

export default MovingBanner
