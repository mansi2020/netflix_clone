import axios from 'axios';
import { options3 } from '../utils/constant';
import {setTopRatedMovies} from "./../redux/movieSlice";
import { useDispatch} from 'react-redux';

const useTopRatedMovies = async() => {
    const dispatch = useDispatch();
    try {
      const response = await axios.request(options3);
      dispatch(setTopRatedMovies(response.data.d));
      // console.log(response.data.d);
    } catch (error) {
      console.error(error);
    }
}

export default useTopRatedMovies;
