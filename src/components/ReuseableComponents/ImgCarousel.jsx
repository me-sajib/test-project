import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ImgCarousel({ img }) {
  const showImg = img && Object.values(img);
  return (
    <Carousel showArrows={true} showThumbs={false} showStatus={false}>
      {showImg &&
        showImg.map((i) => (
          <img
            src={i}
            alt="img"
            key={i}
            className="group-hover:rotate-group  h-[150px] object-cover object-center"
          />
        ))}
    </Carousel>
  );
}
