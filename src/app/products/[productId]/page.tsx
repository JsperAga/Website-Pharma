import { notFound } from "next/navigation"; 

export default async function ProductDetails({ 
    params, 
}: {
    params: Promise<{productId: string }>;
}){
    const { productId } = await params;
    if (parseInt(productId) > 10){
        notFound();
    }
    //const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
}