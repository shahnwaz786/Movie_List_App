import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'

const Search = () => {
  const {input,setInput,error}=useContext(AppContext);
  return (
  <>
  <div className='mt-8 text-center'>
  <form  >
  <h1 className='text-lg'>Search your favourite movie</h1>
  <input className='border-black mt-2 mb-3 w-[200px] p-2 rounded-md' type="text"
  name="serch"
  value={input}
  onChange={(e) => setInput(e.target.value)}

  placeholder='Search...' /> <br /><br />
  <p className='bg-[red] text-[20px] w-[200px] ml-[650px]'>{error.show && error.msg}</p>
  </form>
  </div>
  </>
  )
}

export default Search