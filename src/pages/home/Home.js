import React, { useEffect, useState } from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from 'axios';
function Home({ type }) {
    const [lists, setList] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkxOGVlMGVkNTU4MDYxZWZmMzc4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTk4NDgzNCwiZXhwIjoxNjgyMDcxMjM0fQ.fgAjsbqSBA__DpOAM9COrc1GtLtxS0jezD1Mow36AAU"
                    }
                });
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            <List />
            <List />
        </div>
    );
}

export default Home;