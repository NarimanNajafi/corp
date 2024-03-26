import Hero from '@/components/hero'
import scaleImg from '../../../public/scale.jpg'

function page() {
  return (
    <Hero
    imgData={scaleImg}
    imgAlt="Steel factory"
    title="Scale your app to Infinity"
  />
  )
}

export default page