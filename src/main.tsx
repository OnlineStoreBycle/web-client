import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'


const darkTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
