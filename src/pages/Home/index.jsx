import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

export function Home() {
  const [auth] = useLocalStorage('auth', {})


  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    
    <div className="min-h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6">

    <header className="container flex justify-center max-w-5xl p-4">
    <img src="./imgs/logo-white.svg" className="w-40"/>
    </header>

    <div className="container max-w-5xl  flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">


      <div className="md:flex-1 flex justify-center">
        <img  className="w-full max-w-md" src="./imgs/photo.png" alt="Foto de uma mulher com a camiseta do Brasil e de um homem também com a camiseta do Brasil"/>
      </div>

      <div className="md:flex-1 flex flex-col space-y-6">
      <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
     
      <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">Criar minha conta</a>

      <a href="/login" className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl">
        Fazer Login</a>
    </div>
    </div>
    </div>
  )
}
