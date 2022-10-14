import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

export function Home() {
  const [auth] = useLocalStorage('auth', {})


  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    
    <div className="min-h-screen bg-emerald-600 text-white p-10 flex flex-col items-center space-y-3">

    <header className="container flex justify-center max-w-5xl p-4">
    <img src="./imgs/top.png" className="w-80"/>
    </header>

    <div className="container max-w-7xl  flex-1 p-9 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">


      <div className="md:flex-1 flex justify-center">
        <img  className="w-full max-w rounded-3xl" src="./imgs/taca.webp" alt="taça do mundo"/>
      </div>

      <div className="md:flex-1 flex flex-col space-y-6">
      <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
     
      <a href="/signup" className="text-center border border-white text-red-700 bg-yellow-300 hover:bg-transparent text-xl px-8 py-4 rounded-xl">Criar conta</a>

      <a href="/login" className="text-center text-white bg-blue-600 hover:bg-blue-500 text-xl px-8 py-4 rounded-xl">
        Fazer Login</a>
    </div>
    </div>
    </div>
  )
}
