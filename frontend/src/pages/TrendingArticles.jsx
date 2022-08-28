import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import style from "../styling/Blog.module.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
Swipercore.use([Navigation, Pagination, Scrollbar, A11y]);

const TRENDINGARTICLESDATA = [
  {
    id: 1,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/49723-featured-700x400.jpg",
    des: "3 Metabolism-Boosting Micronutrients For Weight Loss",
  },
  {
    id: 2,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/41628-featured-700x400.jpg",
    des: "10 Walking Mistakes to Avoid if You Want to Lose Weight",
  },
  {
    id: 3,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12131-featured-700x400.jpg",
    des: "Apple Pie Breakfast Bowl",
  },
  {
    id: 4,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/19653-featured-700x400.jpg",
    des: "How to Establish a Healthy Morning Routine",
  },
  {
    id: 5,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg",
    des: "Essential Guide to MyFitnessPall Premium",
  },
  {
    id: 6,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/30083-featured-700x400.jpg",
    des: "Your 6-Week Belly Fat Blasting Walking Plan",
  },
  {
    id: 7,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/28920-featured-700x400.jpg",
    des: "Your 10-minute, No-Equipment, Total-Body Workout",
  },
  {
    id: 8,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg",
    des: "15 Make-Ahead Breakfasts Under 300 Calories",
  },
  {
    id: 9,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52179-featured-700x400.jpg",
    des: "Your Home Screen is Getting a Makeover",
  },
  {
    id: 10,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/46597-featured-700x400.jpg",
    des: "Nutrition Extras to Boost Mental and Physical Performance",
  },
];

const TrendingArticles = () => {
  return (
    <div>
      <div className={style.TRENDINGDiv}>
        <div>
          <h4>TRENDING ARTICLES</h4>
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.slide}>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {TRENDINGARTICLESDATA.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content">
                <div className={style.sliderImageDiv}>
                  <img src={item.img} alt="" className={style.sliderImage} />
                </div>
                <div className={style.sliderText}>{item.des}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingArticles;