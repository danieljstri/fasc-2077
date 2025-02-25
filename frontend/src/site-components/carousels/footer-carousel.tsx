import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FooterCarousel: React.FC = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch dos dados
  useEffect(() => {
    fetch("http://localhost:3000/shows")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  console.log('acontenceu isso')
    }, []);


  return (
    <Carousel
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
      className="w-full max-w-lg mx-auto flex justify-between px-4 items-center align-middle bg-gray-200 rounded-lg"
    >
      <CarouselContent>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 flex justify-center items-center"
              >
                <div className="w-64 h-40 bg-gray-300 rounded-lg"></div>
              </CarouselItem>
            ))
          : items.map((item: any, i) => (
              <CarouselItem
                key={i}
              >
                <h2 className=" italic font-bold">{item.name}</h2>
                <h2 className=" font-semibold">{item.description}</h2>
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
};

export default FooterCarousel;