import React from 'react'

import { Slider } from './Carousel.styled'

type CarouselProps = {
  items: any[] | undefined
  renderItem: (props: any, index: number) => React.ReactNode
}

/**
 * todo:  Add drag scrolling https://codepen.io/thenutz/pen/VwYeYEE
 */
const Carousel: React.FC<CarouselProps> = ({ items, renderItem }) => {
  return <Slider>{items?.map((item, index) => renderItem(item, index))}</Slider>
}

export default Carousel
