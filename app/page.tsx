import Link from "next/link"

export default function Home() {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className='text-6xl mb-4'>The best journal to be...</h1>
        <p className="text-2xl text-white/50 mb-4">This is a mood tracker app not a nutcracker.. For the ballet lovers go to&nbsp;  
        <Link href='https://www.nutcracker.com' legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>nutcracker.com</a>
          </Link>
        
        </p>
        <div>
          <Link href='/journal'>
            <button className="bg-blue-600 p-4 rounded-lg text-xl">get started</button>
          </Link>
      </div>
      </div>
    </div>
  )
}
