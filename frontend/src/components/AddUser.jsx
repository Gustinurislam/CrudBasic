import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const AddUser = () => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('Male')
    const navigate = useNavigate()


    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                gender
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="mt-5">
            <h1 className="text-center text-5xl mb-5 font-semibold uppercase italic "><span className='underline decoration-green-500'>Form</span> <span className='underline decoration-yellow-500'>Add</span></h1>
            <form onSubmit={saveUser} className="space-y-5">

                <div className="flex flex-col">
                    <label className="text-xl">Name</label>
                    <input className="border px-3 py-2 border-black rounded-md" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>

                <div className="flex flex-col">
                    <label className="text-xl">Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="border px-3 py-2 border-black rounded-md">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="flex justify-between" >
                    <Link to={'/'} className="border p-2 rounded-md border-black bg-yellow-500">Cancel</Link>
                    <button className="border p-2 rounded-md border-black bg-green-500" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser
