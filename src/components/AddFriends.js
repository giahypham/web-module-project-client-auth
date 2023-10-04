import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriends = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name:'',
        age:'',
        email:"",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                navigate('/friends')
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <div>
            <h2>AddFriends</h2>
            <form onSubmit={handleSubmit}> 
                <div>
                     <label htmlFor="name">Name:</label>
                     <input onChange={handleChange} id="name" value={form.name} />
                </div>
                <div>
                     <label htmlFor="age">Age:</label>
                     <input onChange={handleChange} id="age" value={form.age} />
                </div>
                <div>
                     <label htmlFor="email">Email:</label>
                     <input onChange={handleChange} id="email" value={form.email} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriends;