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
    <div className="mt-5">
      <h1 className="text-center text-5xl mb-5 font-semibold uppercase italic "><span className='underline decoration-green-500'>Crud</span> <span className='underline decoration-yellow-500'>Basic</span> 🙏🏻</h1>
      <div className="font-semibold text-xl grid grid-cols-5 space-x-10">
        <div>No</div>
        <div>Name</div>
        <div>Gender</div>
        <div>Actions</div>
      </div>
      {users.map((user, index) => (
        <div key={user.id} className="grid grid-cols-5 space-x-10 space-y-1 text-lg">
          <div>{index + 1}</div>
          <div>{user.name}</div>
          <div>{user.gender}</div>
          <div className="space-x-1 flex">
            <Link
              to={`/edit/${user.id}`}
              className="border rounded px-2 py-1 border-black bg-yellow-500 text-white cursor-pointer active:scale-105 duration-150 transform"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteUser(user.id)}
              className="border rounded px-2 py-1 border-black bg-red-500 text-white cursor-pointer active:scale-105 duration-150"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <Link
        to={'/add'}
        className="border rounded px-2 py-1 border-black bg-green-500 text-white cursor-pointer active:scale-105 duration-150">
        Add
      </Link>
    </div>
  );
};

export default UserList;
