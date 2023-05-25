import Image from 'next/image'

import Navbar from './components/NavBar'
import ProgressBar from './components/ProgressBar'

export default function Home() {
  
  return (
    <main>
      <Navbar/>
      <h1>PRÊMIO</h1>
      <Image 
      src='' 
      alt={''}
      width={344}
      height={300}/>
      <ProgressBar/>
    </main>
  )
}
