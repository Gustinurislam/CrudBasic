import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

const EditUser = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getUserById();
    }, [])

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                gender,
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const { name, gender } = response.data
        setName(name);
        setGender(gender);
    }

    return (
        <div className="mt-5">
            <h1 className="text-center text-5xl mb-5 font-semibold uppercase italic "><span className='underline decoration-green-500'>Form</span> <span className='underline decoration-yellow-500'>Update</span></h1>
            <form onSubmit={updateUser} className="space-y-5">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input className="border px-3 py-2 border-black rounded-md" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>

                <div className="flex flex-col">
                    <label>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="border px-3 py-2 border-black rounded-md">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="flex justify-between" >
                    <Link to={'/'} className="border p-2 rounded-md border-black bg-yellow-500" type="submit">Cancel</Link>
                    <button className="border p-2 rounded-md border-black bg-green-500" type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser
