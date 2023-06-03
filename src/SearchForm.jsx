import { useGlobalContext } from './context'

const SearchForm = () => {
   const { setSearch, search } = useGlobalContext()
   const handleSubmit = (event) => {
      event.preventDefault()
      setSearch(event.target.elements.search.value)
   }

   return (
      <>
         <h1 className="title">UNSPLASH IMAGES</h1>
         <form onSubmit={handleSubmit} className="search-form">
            <input
               type="text"
               name="search"
               className="form-input"
               placeholder="cat"
            />
            <button className="btn">search</button>
         </form>
      </>
   )
}
export default SearchForm
