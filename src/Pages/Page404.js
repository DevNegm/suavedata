import React, { useEffect } from 'react'

export default function Page404() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='container text-center d-flex align-items-center text-white fs-5 fw-bold' style={{minHeight:"80vh"}}>Error 404 Not Found</div>
  )
}
