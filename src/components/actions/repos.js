import axios from "axios";
import {setRepos} from "../../reducers/reposReducer";
import {useDispatch} from "react-redux";

setRepos(34)
export const getRepos = (searchQuery = "start:%3E1") => {
    const dispatch = useDispatch()
    dispatch(setRepos(3434343))
    return async (dispatch) => {
        console.log('ХУЯЛИ')

        dispatch(setRepos(3434343))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=start`)
        dispatch(setRepos(2323232))
    }
}
