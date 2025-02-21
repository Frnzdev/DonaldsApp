interface ProductPageProps {
 params: Promise<{ slug: string; productid: string }>;
}

const ProductPage = async({params}: ProductPageProps) => {
    const { slug, productid } = await params;
    return <>
    <h1>Product Page</h1>
    {slug}
    {productid}   
    </>;
}
 
export default ProductPage;