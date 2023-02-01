import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-center mb-5">Crud Basic</h1>
      <div className="font-bold grid grid-cols-5 space-x-10">
        <div>No</div>
        <div>Name</div>
        <div>Email</div>
        <div>Gender</div>
        <div>Actions</div>
      </div>
      {users.map((user, index) => (
        <div key={user.id} className="grid grid-cols-5 space-x-10">
          <div>{index + 1}</div>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.gender}</div>
          <div className="space-x-1">
            <Link
              to={`/edit/${user.id}`}
              className="border px-2 py-1 bg-yellow-500 text-white cursor-pointer active:scale-105 duration-150 transform"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteUser(user.id)}
              className="border px-2 py-1 bg-red-500 text-white cursor-pointer active:scale-105 duration-150"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <Link
        to={'/add'}
        className="border px-2 py-1 bg-green-500 text-white cursor-pointer active:scale-105 duration-150">
        Add
      </Link>
    </div>
  );
};

export default UserList;
