import axios from 'axios';
import { options1 } from '../utils/constant';
import {setNowPlayingMovies} from "./../redux/movieSlice";
import { useDispatch, useSelector } from 'react-redux';

const useNowPlayingMovies = async()=>{
    const dispatch = useDispatch();
    try {
      const response = await axios.request(options1);
      dispatch(setNowPlayingMovies(response.data.d));
      // console.log(response.data.d);
    } catch (error) {
      console.error(error);
    }
  }

  export default useNowPlayingMovies;