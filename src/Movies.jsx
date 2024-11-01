import React from 'react'
import { AppContext } from './context'
import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
const Movies = () => {
  const {movie} = useContext(AppContext);
  return (
    <>
 <div>
    <div className='flex flex-wrap'>
        { movie.map((data) => {
            const { Title, Poster, imdbID} = data;
            return <NavLink to={`movie/${imdbID}`} >
                <div  >
                    <div className='  w-[300px] border-black ml-[100px] mt-[50px] bg-white shadow-md hover:scale-105 ' >
                       <h3 className='text-center text-lg m-[20px]'> {Title}</h3>
                        <img className='p-4 h-[300px] w-[300px]' src={Poster} alt={imdbID} />
                    </div>
                </div>

            </NavLink>
        })}
    
    </div>
 </div>
    </>
  )
}

export default Movies