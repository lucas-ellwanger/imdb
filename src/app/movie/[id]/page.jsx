import Image from 'next/image'

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  )
  return await res.json()
}

export default async function MoviePage({ params }) {
  const movieId = params.id
  const movie = await getMovie(movieId)

  return (
    <div className='w-full'>
      <div className='flex flex-col items-center content-center max-w-6xl mx-auto p-4 md:space-x-6 md:pt8 md:flex-row'>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
          placeholder='blur'
          blurDataURL='/spinner.svg'
        ></Image>
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>
            <span className='font-semibold mr-2'>Overview:</span>
            {movie.overview}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-2'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-2'>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}
