import React from 'react'
import { Img } from './Image.styled'

type ImageProps = {
  url: string
  title?: string
}
/**
 * Todo: add loading placeholder and lazy load condition prop
 * https://levelup.gitconnected.com/lazy-loading-images-in-react-for-better-performance-5df73654ea05
 */
const Image: React.FC<ImageProps> = ({ url, title }) => {
  const src = `https://image.tmdb.org/t/p/w780${url}`

  return <Img src={src} alt={title} />
}

export default Image
