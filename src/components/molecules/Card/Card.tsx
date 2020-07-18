import React from 'react'

import Image from 'components/atoms/Image'

import { Wrapper, Container, Info, Title } from './Card.styled'

type CardProps = {
  title: string
  image: string
  onPress?: () => void
}

const Card: React.FC<CardProps> = ({ title, image, onPress }) => {
  return (
    <Wrapper onClick={onPress}>
      <Container>
        <Image url={image} title={title} />
        <Info>
          <Title>{title}</Title>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Card
