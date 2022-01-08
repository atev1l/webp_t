import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import axios from "axios";
const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const [appState, setAppState] = useState();

    useEffect(() => {
        const apiUrl = 'https://api.github.com/search/repositories?q=start:%3E1&sort=start';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
        console.log(
            'dsdsdsdsd'
        )
    }, [setAppState]);
    useEffect(() => {
        dispatch(getRepos)
        console.log('ебынй рот')
    },[])
    return (
        <div>
            123
            {repos.map(repo =>
                <Repo repo={repo}/>
            )}
        </div>
    );
};

export default Main;
