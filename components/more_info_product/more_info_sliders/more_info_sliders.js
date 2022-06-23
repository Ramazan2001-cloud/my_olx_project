import styles from "./more_info_sliders.module.scss";
import classnames from "classnames/bind";
let cn = classnames.bind(styles);
const MoreInfoSliders = ({ moreinfo }) => {
  // console.log(moreinfo[0].id);
  return (
    <div
      id="carouselExampleCaptions"
      className={cn("carousel", "slide", "carousel__wrapper")}
      data-bs-ride="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={moreinfo[0].product_images[0]}
            // className="d-block w-100"
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
        <div className="carousel-item">
          <img
            src={moreinfo[0].product_images[1]}
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
        <div className="carousel-item">
          <img
            src={moreinfo[0].product_images[2]}
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
        <div className="carousel-item">
          <img
            src={moreinfo[0].product_images[3]}
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
        <div className="carousel-item">
          <img
            src={moreinfo[0].product_images[4]}
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
        <div className="carousel-item">
          <img
            src={moreinfo[0].product_images[5]}
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
        <div className="carousel-item">
          <img
            src={moreinfo[0].product_images[6]}
            alt="..."
            width="750px"
            height="580px"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <span className={"span__arrow"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/860/860790.png"
            alt="arrow"
            width="24px"
            height="24px"
          />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <span className={"span__arrow"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/860/860828.png"
            alt="arrow"
            width="24px"
            height="24px"
          />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className={cn("carousel-indicators")}>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={cn("active", "carousel__button")}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className={cn("carousel__button")}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className={cn("carousel__button")}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className={cn("carousel__button")}
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className={cn("carousel__button")}
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className={cn("carousel__button")}
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className={cn("carousel__button")}
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
    </div>
  );
};
export default MoreInfoSliders;
