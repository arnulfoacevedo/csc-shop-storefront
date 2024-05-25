"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation } from "swiper/modules"
import { Zoom } from "reactjs-image-zoom"

import "./index.css"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import { useState } from "react"
type ImageGalleryProps = {
  thumbnail: string | null | undefined
  images: MedusaImage[]
}

const ImageGallery = ({ thumbnail, images }: ImageGalleryProps) => {
  const [swiper, setSwiper] = useState(0)

  const setActiveImage = (index: number) => {
    setSwiper(index)
  }

  return (
    <>
      <section className="slider md:row-span-1 xl:row-span-1 xl:col-span-1">
        <div className="slider__prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
          </svg>
        </div>
        <div className="slider__thumbs relative">
          <Swiper
            direction="vertical"
            slidesPerView={4}
            spaceBetween={10}
            navigation={{
              nextEl: ".slider__next",
              prevEl: ".slider__prev",
            }}
            modules={[FreeMode, Navigation]}
            breakpoints={{
              0: {
                direction: "horizontal",
              },
              768: {
                direction: "vertical",
              },
            }}
          >
            {images.length > 0 && (
              <SwiperSlide
                className={0 == swiper ? "active__image" : ""}
                key={0}
                onClick={() => setActiveImage(0)}
              >
                <div className="slider__image">
                  {thumbnail && (
                    <Image src={thumbnail} width={50} height={50} alt="" />
                  )}
                </div>
              </SwiperSlide>
            )}
            {images.map((image, index) => {
              let num = index + 1
              return (
                <SwiperSlide
                  className={num == swiper ? "active__image" : ""}
                  key={num}
                  onClick={() => setActiveImage(num)}
                >
                  <div className="slider__image">
                    <Image src={image.url} width={50} height={50} alt="" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="slider__next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </div>
      </section>
      <div
        id="image-container"
        className="md:row-span-1 xl:row-span-1 xl:col-span-4 max-w-100 overflow-hidden"
      >
        <Zoom
          width={100} // width in percent default is 100%
          height={400} // height of the box
          maxwidth={400} // width of the box
          position="center" // cover
          imagesrc={swiper == 0 ? thumbnail || "" : images[swiper - 1].url} // Image component | URL
          size={200} // it is in percent
          bgsize="contain" // background-size
          cursor="zoom-in" // pointer
          borderpixel={0}
          className="img-box" // classname for box
        />
      </div>
    </>
  )
}

export default ImageGallery
