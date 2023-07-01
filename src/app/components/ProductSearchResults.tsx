'use client'

import { useState } from "react"
import ProductItem from "./ProductItem"

interface Product{
    id: number,
    title: string,
    image: string,
    category: string
}

interface Props {
    productProps: Product[]
}

const ProductSearchResult = ({ productProps }: Props ) => {

    let [productsFiltered, setProductsFiltered] = useState(productProps)

    const [searching, setSearching] = useState (false)

    let filteredList
    
    const [searchTerm, setSearchTerm] = useState ('')

    const handleSubmit = (event: any) => {
        event.preventDefault();
        filterProducts(searchTerm)
        setSearching(true)
        console.log(searchTerm);
        // Faça algo com o valor capturado
      };

    const handleSearch = (event: any) =>{
        setSearchTerm(event.target.value)
    }

    const handleBlur = () => {
        if (searchTerm === ''){
            setProductsFiltered([])
        }
    }

    function filterProducts (term: string) {
        let re = new RegExp(term, "i")
        console.log ("buscando por:" +re)
        filteredList = productProps.filter(function(e) { return e.title.match(re)})
        console.log("lista original: "+ productProps) 
        console.log("lista filtrada: "+ filteredList)
        setProductsFiltered (filteredList)
        return
    }

    return (
        <div>
            <div className="place-items-center min-h-[40vh] flex justify-center content-center">
                <form className="flex text-center" onSubmit={handleSubmit}>
                    <input type="text" id="first" placeholder='Pesquise em nosso acervo' value={searchTerm} name="first" className="px-10 py-5 rounded-md" onChange={handleSearch} onBlur={handleBlur}/>
                    <button type="submit" className='rounded-md px-5 mx-3 bg-black'> Pesquisar </button>
                </form>
            </div>

            <div className="grid my-10 mb-32 lg:mb-0 lg:text-left"> 
            { productsFiltered.length > 0 && searching ? 
                <div>
                    <h2 className="text-4xl font-medium"> Resultados: </h2> 
                        <div className="grid grid-cols-4"> 
                            {productsFiltered.map((product) => (
                                
                                <div key={product.id} className="teste">
                                    
                                    <ProductItem 
                                        name = {product.title}
                                        imageUrl= {product.image}
                                    />
                                </div>
                            ))}
                        </div>
                </div>
            : null }
            { productsFiltered.length < 1 && searchTerm ? <h2 className="text-4xl font-medium"> Nenhum resultado encontrado </h2> : null }
            </div>
        </div>
    )
}

export default ProductSearchResult