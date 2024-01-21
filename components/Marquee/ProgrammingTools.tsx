import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';


import {Autoplay, EffectCards} from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'cards'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className={"w-[240px] h-[320px]"}
            >
                <SwiperSlide
                    className="flex flex-col items-center justify-between rounded-2xl text-white text-2xl font-bold bg-emerald-600"
                >
                    <div className="flex flex-col items-center justify-start h-full">
                        <div className="mb-8 mt-6">
                            IntelliJ IDEA
                        </div>
                        <svg width="7em" height="7em" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"
                             preserveAspectRatio="xMidYMid">
                            <defs>
                                <linearGradient x1="0%" y1="50%" x2="99.799%" y2="50%" id="a">
                                    <stop stop-color="#F97A12" offset="26%"/>
                                    <stop stop-color="#B07B58" offset="46%"/>
                                    <stop stop-color="#577BAE" offset="72%"/>
                                    <stop stop-color="#1E7CE5" offset="91%"/>
                                    <stop stop-color="#087CFA" offset="100%"/>
                                </linearGradient>
                                <linearGradient x1=".345%" y1="34.54%" x2="121.182%" y2="77.619%" id="b">
                                    <stop stop-color="#F97A12" offset="0%"/>
                                    <stop stop-color="#CB7A3E" offset="7%"/>
                                    <stop stop-color="#9E7B6A" offset="15%"/>
                                    <stop stop-color="#757B91" offset="24%"/>
                                    <stop stop-color="#537BB1" offset="33%"/>
                                    <stop stop-color="#387CCC" offset="43%"/>
                                    <stop stop-color="#237CE0" offset="54%"/>
                                    <stop stop-color="#147CEF" offset="66%"/>
                                    <stop stop-color="#0B7CF7" offset="79%"/>
                                    <stop stop-color="#087CFA" offset="100%"/>
                                </linearGradient>
                                <linearGradient x1="78.169%" y1="97.749%" x2="30.106%" y2="-6.624%" id="c">
                                    <stop stop-color="#FE315D" offset="0%"/>
                                    <stop stop-color="#CB417E" offset="8%"/>
                                    <stop stop-color="#9E4E9B" offset="16%"/>
                                    <stop stop-color="#755BB4" offset="25%"/>
                                    <stop stop-color="#5365CA" offset="34%"/>
                                    <stop stop-color="#386DDB" offset="44%"/>
                                    <stop stop-color="#2374E9" offset="54%"/>
                                    <stop stop-color="#1478F3" offset="66%"/>
                                    <stop stop-color="#0B7BF8" offset="79%"/>
                                    <stop stop-color="#087CFA" offset="100%"/>
                                </linearGradient>
                                <linearGradient x1="20%" y1="24.087%" x2="103.422%" y2="132.676%" id="d">
                                    <stop stop-color="#FE315D" offset="0%"/>
                                    <stop stop-color="#F63462" offset="4%"/>
                                    <stop stop-color="#DF3A71" offset="10%"/>
                                    <stop stop-color="#C24383" offset="17%"/>
                                    <stop stop-color="#AD4A91" offset="29%"/>
                                    <stop stop-color="#755BB4" offset="55%"/>
                                    <stop stop-color="#1D76ED" offset="92%"/>
                                    <stop stop-color="#087CFA" offset="100%"/>
                                </linearGradient>
                            </defs>
                            <path fill="url(#a)" d="M64.8 199.6l-62-48.8 30.8-57.2L122 128z"/>
                            <path fill="url(#b)"
                                  d="M256 68.4l-4.8 148-98.4 39.6-59.2-38.4L180 128l-37.6-83.2 34-40.8z"/>
                            <path fill="url(#c)" d="M256 68.4l-78 92-35.6-115.6 34-40.8z"/>
                            <path fill="url(#d)"
                                  d="M123.2 212.4L20.8 249.6 37.2 192l21.2-71.2L0 101.2 37.2 0l80 9.6 79.2 90.4z"/>
                            <path d="M48 48h160v160H48z"/>
                            <path
                                d="M63.2 178h60v10h-60v-10zM106 80.8v-12H73.2v12h9.2v42h-9.2v12.4H106v-12.4h-9.2v-42h9.2zm32 55.2a26.84 26.84 0 0 1-13.2-2.8 31.48 31.48 0 0 1-8.8-7.2l9.2-10.4a29.88 29.88 0 0 0 5.6 4.8 11.72 11.72 0 0 0 6.4 1.6 7.44 7.44 0 0 0 6.4-2.8 11.72 11.72 0 0 0 2.4-8.4V68h14.8v43.2a27.08 27.08 0 0 1-1.6 10.4 20 20 0 0 1-5.6 8.8A28.6 28.6 0 0 1 138 136z"
                                fill="#FFF"/>
                        </svg>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="flex flex-col items-center justify-between rounded-2xl text-white text-2xl font-bold bg-emerald-600"
                >
                    <div className="flex flex-col items-center justify-start h-full">
                        <div className="mb-8 mt-6">
                            Visual Studio Code
                        </div>
                        <svg height="7em" viewBox="-11.9 -2 1003.9 995.6" width="7em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
                                fill="#2489ca"/>
                            <path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
                                  fill="#1070b3"/>
                            <path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
                                  fill="#0877b9"/>
                            <path
                                d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
                                fill="#3c99d4"/>
                        </svg>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="flex flex-col items-center justify-between rounded-2xl text-white text-2xl font-bold bg-emerald-600"
                >
                    <div className="flex flex-col items-center justify-start h-full">
                        <div className="mb-8 mt-6">
                            WebStorm
                        </div>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 128 128" width="7em"
                             height="7em">
                            <defs>
                                <linearGradient id="a" x1="45.79" y1="-651.52" x2="78.92" y2="-770.77"
                                                gradientTransform="matrix(1 0 0 -1 0 -648.86)"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset=".28" stop-color="#00cdd7"/>
                                    <stop offset=".94" stop-color="#2086d7"/>
                                </linearGradient>
                                <linearGradient id="b" x1="56.07" y1="-666.71" x2="112.11" y2="-748.88"
                                                gradientTransform="matrix(1 0 0 -1 0 -648.86)"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset=".14" stop-color="#fff045"/>
                                    <stop offset=".37" stop-color="#00cdd7"/>
                                </linearGradient>
                                <linearGradient id="c" x1="111.71" y1="-676.79" x2="119.07" y2="-702.86"
                                                xlinkHref="#a"/>
                            </defs>
                            <title>icon_WebStorm</title>
                            <path fill="url(#a)"
                                  d="M17.2 115.6L0 13.4 32 .2l20.2 12L71 2.2l38.8 15L88 128l-70.8-12.4z"/>
                            <path fill="url(#b)"
                                  d="M128 43.4L111.4 2.6 81.6 0 35.2 44.4l12.4 57.4L71 118l57-33.8L114 58l14-14.6z"/>
                            <path fill="url(#c)" d="M102.4 37.2L114 58l14-14.6L117.8 18l-15.4 19.2z"/>
                            <g>
                                <path d="M24 24h80v80H24z"/>
                                <path fill="#fff"
                                      d="M31.6 89h30v5h-30zM70.8 62.8l4.2-5.2c3 2.4 6 4 9.8 4 3 0 4.8-1.2 4.8-3.2 0-1.8-1.2-2.8-6.6-4.2-6.6-1.8-10.8-3.6-10.8-10.2v-.2c0-6 4.8-10 11.4-10A19.58 19.58 0 0 1 95.8 38L92 43.6a15.24 15.24 0 0 0-8.4-3.2c-2.6 0-4.2 1.2-4.2 3 0 2.2 1.4 3 7 4.4 6.6 1.8 10.4 4.2 10.4 10 0 6.6-5 10.4-12 10.4a23.06 23.06 0 0 1-14-5.4M64.4 34.4l-5 19.2-5.6-19.2h-5.6l-5.6 19.2-5-19.2h-7.8l9.6 33.2h6.2L51 48.4l5.4 19.2h6.2l9.6-33.2h-7.8z"/>
                            </g>
                        </svg>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
