import React from 'react'

import { Wrapper } from './MainContainer.styled'

type MainContainerProps = {
  children: JSX.Element | string
}

/**
 * Main container for the pages
 *
 */
function MainContainer({ children }: MainContainerProps): JSX.Element {
  return <Wrapper role="main">{children}</Wrapper>
}

export default MainContainer
