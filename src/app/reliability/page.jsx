import Hero from '@/components/hero'
import reliabilityImg from '../../../public/reliability.jpg'

function page() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="car factory"
      title="Super high reliability Hosting"
    />
  )
}

export default page