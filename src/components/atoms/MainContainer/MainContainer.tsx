import React from 'react'

import { Wrapper } from './MainContainer.styled'

/**
 * Main container for the pages
 *
 */
const MainContainer: React.FC = ({ children }) => {
  return <Wrapper role="main">{children}</Wrapper>
}

export default MainContainer
