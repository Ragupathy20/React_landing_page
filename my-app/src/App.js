import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const person = [
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341972/primary/282/MA341972.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA343141/primary/282/MA343141.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341967/primary/282/MA341967.jpegg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA343141/primary/282/MA343141.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341972/primary/282/MA341972.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA343141/primary/282/MA343141.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341972/primary/282/MA341972.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA343141/primary/282/MA343141.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341972/primary/282/MA341972.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341967/primary/282/MA341967.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA341972/primary/282/MA341972.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Jacob Jones",
    description:
      " As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.  ",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Theresa Webb",
    description:
      "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
  },
  {
    image:
      "https://arts.mojarto.com/productImages/MA290235/primary/282/MA290235.jpeg",
    name: "Marvin Mckinney",
    description:
      " Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations Relliable banking solutions for your financial operations",
  },
];
function App() {
  SwiperCore.use([Autoplay])
  return (
    <div className="min-h-[100vh] font-[Montserrat] p-5 sm:p-0 sample">
      <div className="flex justify-center sm:pb-[129px] pb-10 sm:pt-[100px] pt-10">
        <div className="max-w-[930px]">
          <h1 className="md:text-[80px] text-5xl font-bold text-center pb-5">
            What User says
          </h1>
          <p className="md:text-[28px] text-xl text-center leading-7">
            Testimonials that speak louder than words! Customer stories that
            light up our day
          </p>
        </div>
      </div>
        <Swiper
          spaceBetween={35}
          slidesPerView={4}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          speed= {8000}
        >
          {person.map((list, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${(i %2 ===0)? 'bounces2' : 'bounces1' } bounces1 sm:w-[460px] w-full bg-[#2b2a2a] rounded-[20px] px-[22px] pb-10 pt-7 border border-[#FFFFFF26] swiper-slide`}
               
              >
                <div className="flex flex-col items-center bg-[#2b2a2a] rounded-[20px]">
                  <img
                    className="w-[60px] h-[60px] mb-3 rounded-full"
                    src={list.image}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-2 sm:text-[22px] text-[16px] font-medium text-[#FFFFFF99] bg-[#2b2a2a]">
                    {list.name}
                  </h5>
                  <p className="sm:text-[22px] text-[16px] text-center bg-[#2b2a2a] text-[#e7e7e7] font-[Poppins]">
                  {list.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      
    </div>
  );
}

export default App;
