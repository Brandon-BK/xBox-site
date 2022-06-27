import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Link from 'next/link';





const SecondSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
            }}
        >
            <br />
            <br />
            <SectionHeader>SOME OF OUR RECENT WORK</SectionHeader>
            <br />
            <br />

            <Box
                sx={{
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <WideScreenSwiper />
            </Box>
        </Box>
    );
};






const Profile = () => {
    const maxWidth900px = useMediaQuery("(max-width:900px)");


    return (
        <Box style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundImage: 'url("./bg.webp")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <h1 style={{ marginBottom: '60px', color: 'white', fontSize: '50px' }}>Who is playing today?</h1>

            <Box style={{ width: '100%', height: '80vh', mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    centeredSlides={false}
                    slidesPerView={maxWidth900px ? 1 : 3}
                    autoplay={true}
                    loop={true}

                >



                    <SwiperSlide
                        style={{
                            height: 280,
                            width: 280,
                            // border: '1px solid red',
                            // borderRadius: '50%'
                        }}
                    >
                                
                        <Link href="/Homepage">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    height: 280,
                                    width: 280,
                                    borderRadius: '50%',
                                    borderRadius: '50%'
                                }}
                            >

                                <img
                                    src="./user1.jpeg"
                                    alt="profile"
                                    style={{
                                        height: 280,
                                        width: 280,
                                        borderRadius: '50%',
                                        objectFit: "contain",
                                        objectPosition: "center",
                                    }}
                                />
                            </a>
                        </Link>
                    </SwiperSlide>




                    <SwiperSlide
                        style={{
                            height: 280,
                            width: 280,
                            // border: '1px solid red',
                            borderRadius: '50%'
                        }}
                    >
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                height: 280,
                                width: 280,
                                borderRadius: '50%'
                            }}
                        >

                            <img
                                src="./user2.jpeg"
                                alt="profile"
                                style={{
                                    height: 280,
                                    width: 280,
                                    borderRadius: '50%',
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </a>
                    </SwiperSlide>









                    <SwiperSlide
                        style={{
                            height: 280,
                            width: 280,
                            // border: '1px solid red',
                            borderRadius: '50%'
                        }}
                    >
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                height: 280,
                                width: 280,
                                borderRadius: '50%'
                            }}
                        >

                            <img
                                src="./user3.jpeg"
                                alt="profile"
                                style={{
                                    height: 280,
                                    width: 280,
                                    borderRadius: '50%',
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </a>
                    </SwiperSlide>










                    <SwiperSlide
                        style={{
                            height: 280,
                            width: 280,
                            // border: '1px solid red',
                            borderRadius: '50%'
                        }}
                    >
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                height: 280,
                                width: 280,
                                borderRadius: '50%'
                            }}
                        >

                            <img
                                src="./user4.jpeg"
                                alt="profile"
                                style={{
                                    height: 280,
                                    width: 280,
                                    borderRadius: '50%',
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </a>
                    </SwiperSlide>


                </Swiper>
            </Box>
        </Box>
    )
}

export default Profile