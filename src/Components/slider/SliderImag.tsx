import React from "react";
interface ISliderImag {
  img: string;
  service: string;
}

// export const SliderImag = ({ img, service }: ISliderImag) => {
//   return (
//     <div className="flex flex-col rounded-lg h-full items-center justify-center w-40 md:w-52 lg:w-96  gap-y-3">
//       <div className="flex items-center w-full rounded-lg">
//         <img src={img} alt={img} className=" object-cover  w-96 rounded-t-lg" />
//       </div>

//       <h1 className="text-white text-xl font-bold text-center">{service}</h1>
//     </div>
//   );
// };

export const SliderImag = ({ img, service }: ISliderImag) => {
  return (
    <div className="flex flex-col rounded-lg h-full items-center justify-center w-[95%]  gap-y-3">
      <div className="flex items-center w-[95%] rounded-lg">
        <img
          src={img}
          alt={img}
          className=" object-cover  w-full rounded-t-lg"
        />
      </div>

      <h1 className="text-white text-xl font-bold text-center">{service}</h1>
    </div>
  );
};
