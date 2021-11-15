import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Showgit = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/zain1uppal/repos`)
                setUserData(data)
            } catch(err) {
                console.log(err)
            }
        }
        getUserDetails()
    }, [])

    return (
        <>
        <div id="repodiv">
            <h1>My github Repos</h1>
            <ul>
                {
                    userData.map(dt => (
                        <li key={dt.id}>
                            <strong role='repoName' aria-label='repoNam' >{dt.name}</strong>    
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}