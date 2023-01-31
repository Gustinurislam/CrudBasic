import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
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
                email,
                gender,
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const { name, email, gender } = response.data
        setName(name);
        setEmail(email);
        setGender(gender);
    }

    return (
        <div>
            <h2 className="text-center">Form Update</h2>
            <form onSubmit={updateUser} className="space-y-5">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input className="border px-3 py-2 border-black rounded-md" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>

                <div className="flex flex-col">
                    <label>Email</label>
                    <input className="border px-3 py-2 border-black rounded-md" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>

                <div className="flex flex-col">
                    <label>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="border px-3 py-2 border-black rounded-md">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="flex justify-between" >
                    {/* <button className="border p-2 rounded-md border-black" type="submit">Cancel</button> */}
                    <button className="border p-2 rounded-md border-black" type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser
