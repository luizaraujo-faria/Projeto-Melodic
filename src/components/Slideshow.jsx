import { useState, useRef, useEffect } from 'react'
import songs from '../data/songs.js'


function Slideshow(){
    const [index, setIndex] = useState(0)
    const sliderRef = useRef(null)
    const [slideWidth, setSlideWidth] = useState(0)

    useEffect(() => {
        if(sliderRef.current){
            const firstSlide = sliderRef.current.querySelector('.slides')
            if(firstSlide){
                setSlideWidth(firstSlide.offsetWidth + 20)
            }
        }
    }, [])

    const next = () => {
        setIndex((prevIndex) => {
          if (prevIndex < songs.length - 1) {
            return prevIndex + 1
          }
          return prevIndex
        })
      }

    const back = () => {
        setIndex((prevIndex) => {
          if (prevIndex > 0) {
            return prevIndex - 1
          }
          return prevIndex
        })
    }

    return(
        <div>
            <div className="group w-full h-64 flex-box relative overflow-x-hidden">
                <div ref={sliderRef} className="slider w-full h-full flex gap-5 transition-all duration-300"
                style={{ transform: `translateX( -${index * slideWidth}px)` }}>
                    {songs.map((song) => (
                        <div key={song.id} className="slides hover:bg-neutral-900">
                            <img src={song.src} className='slide-image' alt="Song Image"/>
                            <div className='w-full h-fit flex flex-col'>
                                <h4 className='text-white font-semibold'>{song.name}</h4>
                                <h5 className='text-neutral-500'>{song.author}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={next} id="next" className={`text-white place-items-center place-content-center bg-neutral-900 absolute right-[1%] size-8 cursor-pointer rounded-full hidden ${index == songs.length - 4? 'hidden' : 'group-hover:block'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <button onClick={back} id="back" className={`text-white place-items-center place-content-center bg-neutral-900 absolute left-[1%] size-8 cursor-pointer rounded-full hidden ${index > 0 ? 'group-hover:block' : 'hidden'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Slideshow