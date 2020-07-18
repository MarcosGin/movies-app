import React, { useState, useEffect } from 'react'

import api from 'api'

import MainContainer from '../../atoms/MainContainer'
import Card from 'components/molecules/Card'
import Carousel from 'components/organisms/Carousel'
import { Link } from 'react-router-dom'

interface IMovies {
  id: number
  title: string
  poster_path: string
}
interface IMoviesPagination {
  results?: IMovies[]
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMoviesPagination | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/movie/top_rated')

      setMovies(data)
    }

    fetchData()
  }, [])

  return (
    <MainContainer>
      <Carousel
        items={movies?.results}
        renderItem={({ id, title, poster_path }) => (
          <Link to={`movie/${id}`} key={id}>
            <Card title={title} image={poster_path} />
          </Link>
        )}
      />
    </MainContainer>
  )
}

export default Home
