import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "./MobileCrousel.css";

const MobileCrousel = () => {
    return (

        <div className='mobile-crousel-wrapper' style={{ paddingBottom: '16px' }}>
            <div>
                <h2 className="mobile-crousel-title">What We Offer</h2>
            </div>
            <Swiper
                className="mobile-crousel-swiper"
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                style={{ width: '100%' }}
            >
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dxwszplz7/image/upload/1_v6tkvl" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: '0 16px' }} alt="What we offer" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dxwszplz7/image/upload/2_qoi4ey" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: '0 16px' }} alt="What we offer" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dxwszplz7/image/upload/3_fcpu8e" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: '0 16px' }} alt="What we offer" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dxwszplz7/image/upload/4_okdsjr" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: '0 16px' }} alt="What we offer" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dxwszplz7/image/upload/5_hxulux" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: '0 16px' }} alt="What we offer" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default MobileCrousel