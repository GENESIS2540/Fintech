import React from 'react'
import ImageCarousel from '../Image-carousel/ImageCarousel'
import GlobalReach from '../Global-reach/GlobalReach'
import Services from '../Services/Services'
import FaqReferals from '../Faq-referals/FaqReferals'
import NewsLetter from '../News-letter/NewsLetter'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
      <ImageCarousel/>
      <GlobalReach/>
      <Services />
      <FaqReferals/>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Main
