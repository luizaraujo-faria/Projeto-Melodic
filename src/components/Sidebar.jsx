import Header from "../components/Header"

function Sidebar(){
    return (
        <aside className="min-w-[20%] h-screen flex-box flex-col justify-start bg-white fixed z-30 top-0 left-0 overflow-hidden">
            <header className="w-full h-20 bg-black flex-box justify-start gap-5 p-5">
                <img src="./src/assets/icons/Logo-Black-White.svg" className="size-10 object-cover" alt="Logo"/>
                <h1 className="text-3xl text-white">Melodic</h1>
            </header>

            <main className="w-full h-full flex-box flex-col items-start justify-start gap-10 p-7 bg-black overflow-hidden overflow-y-scroll scrollbar-body">

                <nav>
                    <ul className="flex-box flex-col items-start gap-3">
                        <li className="nav-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        <a href="">Home</a></li>

                        <li className="nav-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                            </svg>
                            <a href="">Library</a></li>

                        <li className="nav-li">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <a href="">Search</a></li>
                    </ul>
                </nav>

                <nav>
                    <ul className="flex-box flex-col items-start gap-3">
                        <li className="nav-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>
                            <h3>Criar playlist</h3>
                        </li>

                        <li className="nav-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                            <a href="">Musicas Curtidas</a>
                        </li>
                    </ul>
                </nav>

                <hr className="w-full border-neutral-700"/>

                <section className="flex-box flex-col items-start gap-5">
                    <ul className="flex-box flex-col items-start gap-2 text-neutral-300 font-light">
                        <li className="hover:text-white"><a href="">@melodic.vibes</a></li>
                        <li className="hover:text-white"><a href="">@melodic.vibes</a></li>
                        <li className="hover:text-white"><a href="">@Melodic</a></li>
                        <li className="hover:text-white"><a href="">melodicmusic@gmail.com</a></li>
                        <li className="hover:text-white"><a href="">SoundMelodicOfficialChannel</a></li>
                    </ul>
                    <ul className="flex-box flex-col items-start gap-2 text-neutral-300 font-light">
                        <li className="hover:text-white"><a href="">Festival Melodic 2025</a></li>
                        <li className="hover:text-white"><a href="">Suporte</a></li>
                        <li className="hover:text-white"><a href="">Trabalhe Conosco</a></li>
                        <li className="hover:text-white"><a href="">Assine o Melidic Premium</a></li>
                    </ul>
                </section>
            </main>
        </aside>
    )
}

export default Sidebar