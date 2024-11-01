import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { API_URL } from './context';

const SingleMovie = () => {
    const {id } = useParams();

    const [movie,setMovie]= useState([]);
    const [loading,setLoading] = useState(true);
    
   let getMovies = async(url) => {
    try{
         const res= await fetch(url);
         const data= await res.json();
         console.log(data);
     if(data.Response === "True"){
        setLoading(false);
        setMovie(data);
     
     }

    } catch(e) {
        console.log(e);
    }
   }


    useEffect(() => {
        let timer=setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        },1)

        return () => clearTimeout(timer);
    },[id]);
  return (
    <div className='h-screen bg-slate-500'>
      <div className='flex justify-center items-center h-[400px] w-[550px] bg-red-800 border-black rounded-lg absolute m-[200px]'>
      <div>
      <img className='w-[250px] ml-[10px]' src={movie.Poster} alt="" />
      </div>
      <div className='ml-[50px] color-[white]  text-2xl  text-white '>
        <h2 className='mb-2 ' > Name :{movie.Title}</h2>
        <h2 className='mb-2 '> Type :{movie.Type}</h2>
        <h2> Year:{movie.Year}</h2>
      </div>
    </div>

    </div>
  )
}

export default SingleMovie