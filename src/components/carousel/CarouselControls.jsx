import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const CarouselControls = ({ prev, next }) => {
    return (
        <div>
            <AiOutlineLeft className="carousel-control left" onClick={next}/>
            <AiOutlineRight className="carousel-control right" onClick={next}/>
        </div>
    )
}

export default CarouselControls
