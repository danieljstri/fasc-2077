import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const GifsCarousel: React.FC = () => {
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
      className="w-full max-w-lg mx-auto flex justify-center items-center gap-4 align-middle max-h-7/10"
      plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
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
                <a href="https://www.google.com.br/?hl=pt-BR"
                className="text-black hover:text-black">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-max h-full object-cover rounded-lg"
                  />
                
                </a>
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
};

export default GifsCarousel;