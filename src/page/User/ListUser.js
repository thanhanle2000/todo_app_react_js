import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../core/styles/scss/User.scss';
import { useNavigate } from 'react-router-dom';

function ListUser() {
    // USE NAVIGATE
    const navigate = useNavigate();

    // STATE
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://reqres.in/api/users?page=1');
                setListUsers(res?.data?.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, []);

    // NEXT PAGE DETAIL USER
    const handleViewDetailUser = (user) => navigate(`/user/${user?.id}`);

    return (
        <div className="list-user-container">
            <div className="title">
                List user:
            </div>
            <div className="list-user-content flex flex-col items-start justify-start">
                {listUsers.map((item, index) => (
                    <div className="p-[5px] cursor-pointer" key={item.id} onClick={() => handleViewDetailUser(item)}>
                        {index + 1} - {item?.first_name} {item?.last_name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListUser;
