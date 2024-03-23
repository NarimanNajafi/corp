import Link from "next/link"

function header() {
  return (
    <div> <Link className=" m-3" href='/'>Home</Link>
    <Link className=" m-3" href='/perfomance'>Perfomance</Link>
    <Link className=' m-3' href='/reliability'>Reliability</Link>
    <Link className=' m-3' href='/scale'>Scale</Link></div>
  )
}

export default header