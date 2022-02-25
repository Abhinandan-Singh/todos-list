import React from 'react'

export const Footer = () => {
  const footerstyle = {
    position: "absolute",
    width: "100%"
  }
  return (
    <footer className='text-center bg-dark text-light py-3' style={footerstyle}>
      <p>Copyright &copy; TodosList | AAVerse</p>
    </footer>
  )
}
