import Image from 'next/image'
import { Input } from 'postcss'

import CategoryCard from './components/CategoryCard'

import Category from './pages/Category'

import CaliopeImage from '../../public/images/musas/caliope.png'
import ClioImage from '../../public/images/musas/clio.png'
import EuterpeImage from '../../public/images/musas/euterpe.png'
import TaliaImage from '../../public/images/musas/talia.png'

import CaliopeBackground from '../../public/images/musas/caliope-bg.jpg'
import ClioBackground from '../../public/images/musas/clio-bg.jpg'
import ProductSearchResults from './components/ProductSearchResults'


export default function Home() {

  const products = [
    { id: 1, title: "Harry Potter", category: "caliope", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 2, title: "Percy Jackson", category: "caliope", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 3, title: "Kevin", category: "caliope", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 4, title: "Taylor Swift", category: "clio", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 5, title: "Pink Floyd", category: "clio", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 6, title: "Capivara", category: "clio", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 7, title: "Cachorro quente", category: "euterpe", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" },
    { id: 8, title: "Taylor Swift", category: "caliope", image: "https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true" }
  ]
  

  return (
    <main>
      <div className="flex min-h-[120vh] flex-col items-center justify-between ">
        <div className="z-10 fixed w-full flex flex-col items-center backdrop-blur-sm p-3">
          <div className="container max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex justify-center backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:p-4 lg:dark:bg-zinc-800/30">
              Mnemosine Logo
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <Image
                  src="/images/instagram.svg"
                  alt="Vercel Logo"
                  className="light"
                  width={20}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
        </div>

        <ProductSearchResults productProps= {products}/> 
        
        <div className="flex flex-col text-center mb-[100px]" >
          <h2 className="text-4xl font-medium"> Explore categorias </h2>
          <div className="grid my-10 mb-32 lg:mb-0 lg:grid-cols-4 lg:text-left"> 
          
          <CategoryCard 
            title= 'Caliope'
            subtitle='A da bela voz'
            description='teste de descricao'
            backgroundUrl={CaliopeImage}
            name="caliope"
          />

          <CategoryCard 
            title= 'Clio'
            subtitle='A Proclamadora'
            description='Clio é a musa da história e da criatividade, aquela que divulga e celebra as realizações.'
            backgroundUrl={ClioImage}
            name="clio"
          />
          <CategoryCard 
            title= 'Talia'
            subtitle='A que faz brotar flores'
            description='Tália era a musa da comédia, representada vestindo uma máscara cômica e carregando ramos de hera. '
            backgroundUrl={TaliaImage}
            name="talia"
          />
          <CategoryCard 
            title= 'Euterpe'
            subtitle='A doadora de prazeres'
            description='Era a musa da música. No final do período clássico, foi nomeada a musa da poesia lírica e usava uma flauta. '
            backgroundUrl={EuterpeImage}
            name="euterpe"
          />
          </div>
        </div>
      </div>
      <Category 
        subtitle='A da bela voz'
        title='Caliope'
        description='Foi a musa da poesia épica, da ciência em geral e da eloquência e a mais velha e sábia das musas, e é considerada por vezes a rainha destas.'
        background = {CaliopeBackground}
        buttonLink='#teste'
        />

      <Category 
        subtitle='A Proclamadora'
        title='Clio'
        description='Clio é a musa da história e da criatividade, aquela que divulga e celebra as realizações.'
        background = {ClioBackground}
        buttonLink='#teste'/>
    </main>
  )
}
