import * as React from "react"

import { Card as CardItem, CardContent } from "@/components/ui/card"
import {
  CarouselItem,
} from "@/components/ui/carousel"

export default function Card(props) {
  return (
        <CarouselItem className="lg:basis-1/2 xl:basis-1/3">
      <CardItem className="border-[#189BA5] md:w-auto border-[0.125rem] h-[100%]">
      
         
      <p className="font-heading text-[14px] font-bold text-center sm:font-semibold sm:text-[1.5rem] text-[#189BA5]">
        {props.name}
      </p>
      <p className="sm:mt-[0.625rem] font-custom font-normal text-xs sm:text-[1.125rem] text-[#189BA5] text-center">
        {props.designation}
      </p>
      <p className="my-4 pb-2 pt-2 sm:px-0 sm:mt-[2.125rem] text-center font-semibold font-custom text-[10px] sm:text-lg overflow-auto sm:overflow-hidden sm:leading-6 md:px-[1vw]">
        {props.review}
      </p>
   
      </CardItem>
      </CarouselItem>
  );
}
