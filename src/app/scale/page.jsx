import Image from "next/image"
import scaleImg from '../../../public/scale.jpg'

function page() {
  return (
    <div className=" absolute -z-10 inset-0">Scale page!
      <Image src={scaleImg} alt="scale img" fill style={{objectFit:'cover'}}/> 
    </div>
  )
}

export default page