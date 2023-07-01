import style from '../components/style/productItem.module.css'

interface Product{
    name: string,
    imageUrl: string,
}

export default function ProductItem( props: Product ){
    return(
        <div className={`${style.productItem} m-5` }>
            
            <img src={`${props.imageUrl}`} className={`${style.productImage} max-h-[250px]`}/>
            <p className='py-3 font-medium'> {props.name} </p>
            <button className='p-2 my-2 bg-transparent border'> ver na loja </button>
        </div>
    )
}