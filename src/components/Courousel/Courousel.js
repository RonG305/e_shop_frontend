import { Carousel } from "flowbite-react";
import { API_BASE_URL } from "../../apiConfig";
import { useEffect, useState } from "react";



function CorouselComponent() {

  const [recentProducts, setRecentProducts] = useState([])

  const getRecentProducts = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/products-list`
      );
      const data = await response.json();
      console.log(data.slice(10, 18));
      setRecentProducts(data.slice(3, 11));
    } catch (error) {
      console.log("Error while fetching recent  prodcuts");
    }
  };

  useEffect(() => {
    getRecentProducts();
  }, []);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5 bg-slate-300">
      <Carousel>
        {recentProducts?.map((product) => (
          <img src={`${API_BASE_URL}/${product.image}`}  className="w-full h-full object-cover" alt={product.name} />
        ))}
        
       
      </Carousel>
    </div>
  );
}


export default CorouselComponent