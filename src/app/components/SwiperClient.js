'use client';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperClient({ images }) {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 1,
                },
            }}
            pagination={{ clickable: true }}
            className="w-full m-0 !pb-10"
        >
            {images.map((image) => (
                <SwiperSlide key={image.id} className='h-[494px] py-[16px]'>
                    <img src={image} className="h-[494px] w-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}