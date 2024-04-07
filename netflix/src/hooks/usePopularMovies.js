import axios from 'axios';
import { options2 } from '../utils/constant';
import {setPopularMovies} from "./../redux/movieSlice";
import { useDispatch} from 'react-redux';

const usePopularMovies = async() => {
    const dispatch = useDispatch();
    try {
      const response = await axios.request(options2);
      dispatch(setPopularMovies(response.data.d));
      // console.log(response.data.d);
    } catch (error) {
      console.error(error);
    }
}

export default usePopularMovies;
