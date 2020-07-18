import React from 'react'

import { IMovie } from 'interfaces/movie'

import Image from 'components/atoms/Image'
import {
  Container,
  ImageContainer,
  Information,
  Header,
  Title,
  Overview
} from './Hero.styled'
import VoteAverage from 'components/atoms/VoteAverage'

type HeroProps = {
  movie: IMovie
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <Container>
      <ImageContainer>
        <Image url={movie.poster_path} title={movie.title} />
      </ImageContainer>

      <Information>
        <Header>
          <VoteAverage number={movie.vote_average} />
          <Title>{movie.title}</Title>
        </Header>
        <Overview>{movie.overview}</Overview>
      </Information>
    </Container>
  )
}

export default Hero
