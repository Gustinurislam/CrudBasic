import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="space-y-5">
            <h1 className="text-center">Crud Basic</h1>
            <Link to={'/add'}>Add</Link>
            <div className="flex items-center justify-around border-b pb-1 font-bold">
                <div>No</div>
                <div>Name</div>
                <div>Email</div>
                <div>Gender</div>
                <div>Actions</div>
            </div>
            {users.map((user, index) => (
                <div key={user.id} className="flex items-center justify-evenly">
                    <div>{index + 1}</div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.gender}</div>
                    <div className="space-x-1">

                        <Link to={`/edit/${user.id}`} className="border px-2 bg-yellow-500 text-white cursor-pointer active:scale-105 duration-150 transform">Edit</Link>

                        <button onClick={() => deleteUser(user.id)} className="border px-2 bg-red-500 text-white cursor-pointer active:scale-105 duration-150">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserList
