import Hero from '@/components/hero'
import perfomanceImg from '../../../public/performance.jpg'

function page() {
  return (
    <Hero
    imgData={perfomanceImg}
    imgAlt="Welding"
    title="We server high perfomance Applications"
  />
  )
}

export default page