import { StaticImageData } from 'next/image'
import style from './style/categoryCard.module.css'

interface CategoryCard{
    subtitle: string,
    title: string,
    description: string,
    backgroundUrl: StaticImageData,
    name: string
}

export default function CategoryCard(props: CategoryCard){

  const localStyles = {
    background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${props.backgroundUrl.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
    return(
        <div style={localStyles} className={`${style.categoryItem} flex flex-col justify-between align-center content-stretch  group rounded-xl border border-transparent px-5 py-4 text-white`}>
            
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <p className={style.subtitle}> {props.subtitle} </p>
              {props.title}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {props.description}
            </p>
            <div className= {`${style.tags} my-2 self-start`}>
              <button className="rounded-full text-xs p-1 mx-1"> ciências </button>
              <button className="rounded-full text-xs p-1 mx-1"> poesia </button>
              <button className="rounded-full text-xs p-1 mx-1"> musica </button>
            </div>
            <button className={`p-3 my-3 self-start ${style.btnCta}`} > ver mais </button>
          
        </div>
    )
}