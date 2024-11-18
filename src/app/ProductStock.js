
export default function ProductStock({inStock}){
    return <p>{inStock? "En stock": "Stock Agotado"}</p>
}