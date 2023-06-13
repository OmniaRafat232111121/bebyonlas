import Image from "next/image"

const CarouselItem = ({ slide, stopSlide, startSlide }) => {
    return (
        <div className="carousel-item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
            <Image src={slide} width={2000} style={{height : "100%"}} alt="dd" objectFit="cover" />
        </div>
    )
}

export default CarouselItem
