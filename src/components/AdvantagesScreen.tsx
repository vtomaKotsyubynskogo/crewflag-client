import "./styles/AdvantagesScreen.scss";
import {useEffect, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";

export default function AdvantagesScreen() {
	return (
		<div className="advantages-screen">
			<div className="advantages-screen__title-section">
				<h1 className="advantages-screen__title">
					Преимущества работы с нашей платформой
				</h1>
			</div>
			<div className="advantages-screen__phone">
				<img
					src="/images/phone.svg"
					alt="Телефон"
					className="advantages-screen__phone-image"
				/>
				<CardsBlock />
			</div>
			<div className="advantages-screen__ellipse-container">
				<div className="advantages-screen__ellipse"></div>
			</div>
		</div>
	);
};

const CardsBlock = () => {
	const [isMobile, setIsMobile] = useState(false);
	console.log('isMobile', isMobile)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
	  console.log(window.innerWidth)
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
	   <div className="advantages-screen__cards">
          {isMobile ? (
            <Swiper
              modules={[EffectCoverflow]}
              effect="coverflow"
              centeredSlides={true}
              slidesPerView="auto"
			  spaceBetween={20}
			  initialSlide={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              className="advantages-screen__swiper"
            >
              <SwiperSlide className="advantages-screen__card advantages-screen__card--control">
                <img
                  src="/images/diagram-icon.svg"
                  alt="Диаграмма"
                  className="advantages-screen__card-icon"
                />
                <p className="advantages-screen__card-text">
                  Полный контроль над своими данными
                </p>
              </SwiperSlide>
              <SwiperSlide className="advantages-screen__card advantages-screen__card--vacancies">
                <div className="advantages-screen__feature">
                  <img
                    src="/images/second-advantage-icon-one.svg"
                    alt="Second Engineer"
                    className="advantages-screen__feature-icon"
                  />
                  <p className="advantages-screen__feature-text">
                    Second Engineer
                  </p>
                </div>
                <div className="advantages-screen__feature">
                  <img
                    src="/images/second-advantage-icon-two.svg"
                    alt="Third Engineer"
                    className="advantages-screen__feature-icon"
                  />
                  <p className="advantages-screen__feature-text">
                    Third Engineer
                  </p>
                </div>
                <div className="advantages-screen__feature">
                  <img
                    src="/images/second-advantage-icon-three.svg"
                    alt="Catering"
                    className="advantages-screen__feature-icon"
                  />
                  <p className="advantages-screen__feature-text">
                    Catering
                  </p>
                </div>
                <p className="advantages-screen__card-text">
                  Только свежие и актуальные вакансии
                </p>
              </SwiperSlide>
              <SwiperSlide className="advantages-screen__card advantages-screen__card--companies">
                <div className="advantages-screen__icons">
                  <img
                    src="/images/third-advantages-icon-one.svg"
                    alt="Компания 1"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-two.svg"
                    alt="Компания 2"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-three.svg"
                    alt="Компания 3"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-four.svg"
                    alt="Компания 4"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-five.svg"
                    alt="Компания 5"
                    className="advantages-screen__company-icon"
                  />
                </div>
                <div className="advantages-screen__rating">
                  <p className="advantages-screen__rating-number">5.0</p>
                  <div className="advantages-screen__stars">
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                  </div>
                </div>
                <p className="advantages-screen__card-text">
                  Работаем с лучшими компаниями
                </p>
              </SwiperSlide>
            </Swiper>
          ) : (
            <>
              <div className="advantages-screen__card advantages-screen__card--control">
                <img
                  src="/images/diagram-icon.svg"
                  alt="Диаграмма"
                  className="advantages-screen__card-icon"
                />
                <p className="advantages-screen__card-text">
                  Полный контроль над своими данными
                </p>
              </div>
              <div className="advantages-screen__card advantages-screen__card--vacancies">
                <div className="advantages-screen__feature">
                  <img
                    src="/images/second-advantage-icon-one.svg"
                    alt="Second Engineer"
                    className="advantages-screen__feature-icon"
                  />
                  <p className="advantages-screen__feature-text">
                    Second Engineer
                  </p>
                </div>
                <div className="advantages-screen__feature">
                  <img
                    src="/images/second-advantage-icon-two.svg"
                    alt="Third Engineer"
                    className="advantages-screen__feature-icon"
                  />
                  <p className="advantages-screen__feature-text">
                    Third Engineer
                  </p>
                </div>
                <div className="advantages-screen__feature">
                  <img
                    src="/images/second-advantage-icon-three.svg"
                    alt="Catering"
                    className="advantages-screen__feature-icon"
                  />
                  <p className="advantages-screen__feature-text">
                    Catering
                  </p>
                </div>
                <p className="advantages-screen__card-text">
                  Только свежие и актуальные вакансии
                </p>
              </div>
              <div className="advantages-screen__card advantages-screen__card--companies">
                <div className="advantages-screen__icons">
                  <img
                    src="/images/third-advantages-icon-one.svg"
                    alt="Компания 1"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-two.svg"
                    alt="Компания 2"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-three.svg"
                    alt="Компания 3"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-four.svg"
                    alt="Компания 4"
                    className="advantages-screen__company-icon"
                  />
                  <img
                    src="/images/third-advantages-icon-five.svg"
                    alt="Компания 5"
                    className="advantages-screen__company-icon"
                  />
                </div>
                <div className="advantages-screen__rating">
                  <p className="advantages-screen__rating-number">5.0</p>
                  <div className="advantages-screen__stars">
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                    <img
                      src="/images/gold-star-icon.svg"
                      alt="Звезда"
                      className="advantages-screen__star-icon"
                    />
                  </div>
                </div>
                <p className="advantages-screen__card-text">
                  Работаем с лучшими компаниями
                </p>
              </div>
            </>
          )}
	   </div>
  )
}