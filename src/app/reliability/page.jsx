import Image from "next/image"
import reliabilityImg from '../../../public/reliability.jpg'

function page() {
  return (
    <div className=" absolute -z-10 inset-0">Reloability page!
      <Image src={reliabilityImg} 
      alt="reliabilty img" 
      fill 
      style={{objectFit:'cover'}}/>
    </div>
  )
}

export default page