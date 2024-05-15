import { Carousel } from "flowbite-react";



function CorouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/images/prod1.jpg" className="w-fit h-fit" alt=".image1" />
        <img src="/images/prod2.jpg" alt="image2" />
        <img src="/images/prod3.jpg" alt="image3" />
        <img src="/images/prod4.jpg" alt="..." />
        <img src="/images/prod5.jpg" alt="..." />
        <img src="/images/prod6.jpg" alt="..." />
        <img src="/images/prod7.jpg" alt="..." />
      </Carousel>
    </div>
  );
}


export default CorouselComponent