import React from 'react'

import { Container, Number, Text } from './VoteAverage.styled'

type VoteAverageProps = {
  number: number
}

const VoteAverage: React.FC<VoteAverageProps> = ({ number }) => {
  return (
    <Container>
      <Number>
        {number} <Text>IMDB</Text>
      </Number>
    </Container>
  )
}

export default VoteAverage
