import axios from 'axios';
import { options4 } from '../utils/constant';
import {setUpcomingMovies} from "./../redux/movieSlice";
import { useDispatch} from 'react-redux';

const useUpcomingMovies = async()=>{
    const dispatch = useDispatch();
    try {
      const response = await axios.request(options4);
      dispatch(setUpcomingMovies(response.data.d));
      // console.log(response.data.d);
    } catch (error) {
      console.error(error);
    }
  }

  export default useUpcomingMovies;