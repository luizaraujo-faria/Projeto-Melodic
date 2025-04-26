import Sidebar from "../components/Sidebar"
import Slideshow  from "../components/Slideshow"
import Footer from "../components/Footer"
import songs from "../data/songs.js"

function Main(){

    return (
        <div>
            <main  className="relative w-full h-screen bg-black flex-box justify-end items-start overflow-y-scroll scrollbar-body">
                <Sidebar/>
                <section className="relative min-w-[80%] max-w-[75%] h-fit bg-black flex-box flex-col justify-start">
                    <section className="w-full h-[40vh] flex flex-col justify-end bg-gradient-to-t from-black to-neutral-500 p-5">
                        <div className="w-full h-fit flex-box justify-start gap-5 p-10">
                            <h3 className="w-1/12 h-8 rounded-full bg-[#ffffff42] text-white flex-box p-1 cursor-pointer hover:bg-[#ffffff60]">All</h3>
                            <h3 className="w-1/12 h-8 rounded-full bg-[#ffffff42] text-white flex-box p-1 cursor-pointer hover:bg-[#ffffff60]">Musics</h3>
                            <h3 className="w-1/12 h-8 rounded-full bg-[#ffffff42] text-white flex-box p-1 cursor-pointer hover:bg-[#ffffff60]">Podcasts</h3>
                        </div>
                        <div className="w-full h-[80%] grid grid-rows-2 grid-cols-3 gap-2 gap-y-4 place-items-center p-5">
                            <div className="most-listened row-start-1">1</div>
                            <div className="most-listened row-start-1">2</div>
                            <div className="most-listened row-start-1">3</div>
                            <div className="most-listened row-start-2">4</div>
                            <div className="most-listened row-start-2">5</div>
                            <div className="most-listened row-start-2">6</div>
                        </div>
                    </section>
                    
                    <section className="w-full h-fit flex flex-col gap-20 p-10">
                        <div className="slide-bar w-full flex flex-col gap-5">
                            <h2 className="text-2xl text-white font-thin">Feitos para (usuario)</h2>
                            <Slideshow songs={songs}/>
                        </div>
                        <div className="slide-bar w-full flex flex-col gap-5">
                            <h2 className="text-2xl text-white font-thin">Recomendações do dia</h2>
                            <Slideshow songs={songs}/>
                        </div>
                        <div className="slide-bar w-full flex flex-col gap-5">
                            <h2 className="text-2xl text-white font-thin">Tocados Recentemente</h2>
                            <Slideshow songs={songs}/>
                        </div>
                    </section>

                    <Footer/>
                </section>
            </main>
        </div>
    )
}

export default Main