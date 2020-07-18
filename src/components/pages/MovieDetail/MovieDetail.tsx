import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IMovie } from 'interfaces/movie'
import api from 'api'

import MainContainer from 'components/atoms/MainContainer'
import Hero from 'components/organisms/Hero'

const MovieDetail: React.FC = () => {
  const [movie, setMovie] = useState<IMovie | undefined>()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get(`/movie/${id}`)

      setMovie(data)
    }

    fetchData()
  }, [id])

  console.log(movie)

  if (!movie) return null
  return (
    <MainContainer>
      <Hero movie={movie} />
    </MainContainer>
  )
}

export default MovieDetail
