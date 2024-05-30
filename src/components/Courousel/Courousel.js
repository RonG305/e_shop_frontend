import { Carousel } from "flowbite-react";



function CorouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/images/prod8.jpeg" className="w-fit h-fit" alt=".image1" />
        <img src="/images/prod9.jpg" alt="image2" />
        <img src="/images/prod10.jpg" alt="image3" />
        <img src="/images/prod11.jpg" alt=".product 11" />
        <img src="/images/prod12.jpg" alt="product 12" />
        <img src="/images/prod10.jpg" alt="product 13" />
        <img src="/images/prod14.jpg" alt="product 14" />
      </Carousel>
    </div>
  );
}


export default CorouselComponent