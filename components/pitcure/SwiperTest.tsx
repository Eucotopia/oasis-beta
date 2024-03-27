import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Computer from "@/components/pitcure/Computer";

// import required modules
import {EffectCoverflow,Autoplay} from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow,Autoplay]}
                className="h-screen  max-w-4xl justify-center"
            >
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_1.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_1.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_2.jpg" className={'w-full block rounded-xl'}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_2.jpg" className={'w-full block rounded-xl'}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_1.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_1.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_2.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_2.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
