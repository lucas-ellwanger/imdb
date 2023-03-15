import Image from 'next/image'

export default function Loading() {
  return (
    <div className='flex relative justify-center h-96'>
      {/* <img className='h-96' src='spinner.svg' alt='loading...' /> */}
      <Image src='spinner.svg' alt='loading...' fill />
    </div>
  )
}
