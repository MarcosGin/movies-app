import React from 'react'
import { Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { ITheme } from 'theme'

const GlobalStyle: React.FC = () => {
  const theme = useTheme<ITheme>()

  return (
    <Global
      styles={`
        * {
          font-family: ${theme.fonts.primary};
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration:none;
          color:inherit;
        }
        body{
          background-color: #0F1114;
          color: #ccc;
        }
      `}
    />
  )
}

export default GlobalStyle
