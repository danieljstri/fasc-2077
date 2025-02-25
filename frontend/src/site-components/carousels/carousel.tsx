import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const DynamicCarousel: React.FC = () => {
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
      className="w-full max-w-lg mx-auto flex justify-center items-center gap-4 align-middle rounded-lg max-h-2/5"
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
          : items.map((item: any) => (
              <CarouselItem
                key={item._id}
                className="basis-1/1 flex justify-center items-center"
              >
                <a href="https://www.google.com.br/?hl=pt-BR"
                className="text-black hover:text-black">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-64 h-40 object-cover rounded-lg"
                  />
                  <p className="mt-2 text-sm text-center">{item.name}</p>
                </a>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DynamicCarousel;