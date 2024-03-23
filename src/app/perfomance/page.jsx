import Image from "next/image"
import perfomanceImg from '../../../public/performance.jpg'

function page() {
  return (
    <div className=" absolute -z-10 inset-0 ">Perfomance page
      <Image src={perfomanceImg} 
      alt="perfomance image" 
      fill 
      style={{objectFit:'cover'}}/>
    </div>
  )
}

export default page