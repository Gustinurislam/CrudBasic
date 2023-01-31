import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const navigate = useNavigate()


    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                gender
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="">
            <h2 className="text-center">Form Add</h2>
            <form onSubmit={saveUser} className="space-y-5">

                <div className="flex flex-col">
                    <label>Name</label>
                    <input className="border px-3 py-2 border-black rounded-md" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>

                <div className="flex flex-col">
                    <label>Email</label>
                    <input className="border px-3 py-2 border-black rounded-md" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>

                <div className="flex flex-col">
                    <label>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="border px-3 py-2 border-black rounded-md">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="flex justify-between" >
                    <button className="border p-2 rounded-md border-black" type="submit">Cancel</button>
                    <button className="border p-2 rounded-md border-black" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser
