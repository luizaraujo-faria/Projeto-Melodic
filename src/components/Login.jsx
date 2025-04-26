import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = () => {
        if(email === "Luiz" && password === "123"){
            alert("Login feito com sucesso")
            navigate("/dashboard")
        }
        else{
            alert("Falha ao realizar login")
            
        }
    }

    return (
        <main className="w-full min-h-[150vh] max-h-[150vh] bg-gradient-to-t from-black to-neutral-800 from-50% flex-box">
            <section className="w-3/5 h-[95%] flex-box flex-col justify-start gap-8 p-5 bg-gradient-to-t from-neutral-900 to-black rounded-xl max-sm:w-[95%] max-md:w-[90%] max-lg:w-3/5 max-xl:w-3/5 max-2xl:w-3/5">
                <section className="w-full h-2/5 flex-box flex-col gap-5">
                    <header className="w-full h-36 flex-box flex-col gap-5">
                        <img className="size-12 object-cover" src="./src/assets/icons/Logo-Black-White.svg" alt="logo-Melodic"/>
                        <h1 className="text-4xl text-white font-light max-sm:text-3xl max-md:text-4xl max-lg:text-4xl max-xl:text-4xl max-2xl:text-4xl">Entre para a Melodic</h1>
                    </header>
                    <div className="w-full h-auto flex-box flex-col gap-3">
                        <div className="login-option max-sm:w-[100%] max-md:w-[75%] max-lg:w-[75%] max-xl:w-[75%] max-2xl:w-[60%]">
                            <img className="size-8 absolute left-[15%]" src="./src/assets/icons/icon-google.png" alt="icon-google"/>
                            <h1 className="text-white text-xl absolute left-[35%]">Entrar com Google</h1>
                        </div>
                        <div className="login-option max-sm:w-[100%] max-md:w-[75%] max-lg:w-[75%] max-xl:w-[75%] max-2xl:w-[60%]">
                            <img className="size-8 absolute left-[15%]" src="./src/assets/icons/icon-apple.png" alt="icon-apple"/>
                            <h1 className="text-white text-xl absolute left-[35%]">Entrar com Apple</h1>
                        </div>
                        <div className="login-option max-sm:w-[100%] max-md:w-[75%] max-lg:w-[75%] max-xl:w-[75%] max-2xl:w-[60%]">
                            <img className="size-8 absolute left-[15%]" src="./src/assets/icons/icon-facebook.png" alt="icon-facebook"/>
                            <h1 className="text-white text-xl absolute left-[35%]">Entrar com Facebook</h1>
                        </div>
                    </div>
                </section>
                <div className="w-full flex-box gap-3"><hr className="w-4/12 border-neutral-500"/><h3 className="text-white text-xl">OU</h3><hr className="w-4/12 border-neutral-500"/></div>
                <form action="" className="w-[60%] h-3/5 flex-box flex-col justify-start gap-6 max-sm:w-[100%] max-md:w-[75%] max-lg:w-[75%] max-xl:w-[75%] max-2xl:w-[60%]">
                    <div className="w-full items-start">
                        <label htmlFor="email" className="text-white text-2xl font-light">Email</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 bg-transparent border-[1px] border-neutral-400 outline-none text-white p-5" required/>
                    </div>
                    <div className="w-full items-start">
                        <label htmlFor="password" className="text-white text-2xl font-light">Senha</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-12 bg-transparent border-[1px] border-neutral-400 outline-none text-white p-5" required/>
                    </div>
                    <button id="btn-login" type="submit" onClick={handleLogin} className="w-full h-12 text-black text-2xl font-light bg-white hover:bg-neutral-200 cursor-pointer">Entrar</button>

                    <a href="" className="text-xl text-white font-light underline">Esqueceu a senha?</a>
                    <div className="flex gap-2"><h2 className="text-neutral-400 text-xl font-light">Não possui conta?</h2> <a href="" className="text-white text-xl font-light underline">Inscreva-se já</a></div>
                </form>
            </section>
        </main>
    )
}

export default Login