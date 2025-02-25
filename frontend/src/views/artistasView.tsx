import DynamicCarousel from "../site-components/carousels/carousel.tsx";
import React from "react";
import FooterCarousel from "../site-components/carousels/footer-carousel.tsx";
import GifsCarousel from "../site-components/carousels/gifs-carousel.tsx";

const ArtistsView: React.FC = () => {    
    return (
        <div className="m-4 p-4 min-height-full rounded-lg flex flex-col items-center justify-between ">
            <DynamicCarousel />
            <GifsCarousel />
            <FooterCarousel />
        </div>
    );
    };
export default ArtistsView;