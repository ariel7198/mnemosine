import { StaticImageData } from "next/image"
import style from "../components/style/categoryPage.module.css"
import ProductItem from "../components/ProductItem"

interface Category {
    title: string,
    subtitle: string,
    background: StaticImageData,
    description: string,
    buttonLink: string
}

export default function Category ( props: Category ){

    const localStyles = {
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${props.background.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }

    return(
        <div style={localStyles} className="min-h-[100vh] flex flex-col justify-center text-white p-10"> 
            <div className="container mx-auto min-w-lg max-w-7xl flex flex-row">
                <div className="description flex flex-col justify-center w-[40%]">
                    <p> {props.subtitle} </p>
                    <h1 className={style.title}> {props.title} </h1>  
                    <p> {props.description} </p>
                </div>
                
                <div className="products flex px-5 m-5">
                    <ProductItem 
                        name="Mitologia Grega"
                        imageUrl="https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true"
                    />
                    <ProductItem 
                        name="Mitologia Grega de novo"
                        imageUrl="https://lojasaraivanew.vtexassets.com/arquivos/ids/166765-1200-auto?v=638010250339230000&width=1200&height=auto&aspect=true"
                    />
                </div>
                
            </div>  
        </div>
    )
}