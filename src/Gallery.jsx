import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'
import { useState } from 'react'

const Gallery = () => {
   const [isLiked, setIsLiked] = useState(false)
   const { setSearch, search } = useGlobalContext()
   const response = useQuery({
      queryKey: ['images', search],
      queryFn: () =>
         axios.get(
            `https://api.unsplash.com/search/photos/?client_id=LFrWh2Ma4_nVlC2zMEm6BQcq9yWvidhqJZP8Ig21ysc&query=${search}`
         ),
   })

   const { isLoading, isError, error } = response
   const images = response?.data?.data?.results

   if (isLoading) {
      return <h5>Loading...</h5>
   }

   if (isError) {
      return <h5>There is an error...</h5>
   }

   if (images.length < 1) {
      return <h5>No results found.</h5>
   }

   return (
      <section className="image-container">
         {images.map((image) => {
            const { id, alt_description} = image
            const imageUrl = image?.urls?.small
            return (
               <section key={id}>
                  <img src={imageUrl} alt={alt_description} className="img" />
               </section>
            )
         })}
      </section>
   )
}
export default Gallery