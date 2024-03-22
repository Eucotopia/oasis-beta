import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {EffectCoverflow} from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="h-screen py-14"
            >
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide> <SwiperSlide style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '300px',
                height: '300px',
            }}>
                <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
            </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide> <SwiperSlide style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '300px',
                height: '300px',
            }}>
                <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
            </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide> <SwiperSlide style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '300px',
                height: '300px',
            }}>
                <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
            </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px',
                }}>
                    <img src="/image/T1/T1_3.jpg" className={'w-full block rounded-xl '}/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
