import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Ui() {


    const [admin] = useState({ name: 'admin', email: 'admin@gmail.com' })
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/emailTask/entered').then(res => setUsers(res.data))
      
    }, [])

    const Nav = useNavigate()

    const Login = e => {
        let obj = { name: name, email: email }
        if (name === admin.name && email === admin.email) {
            Nav('admin')
        }
        else {
            let con = true
            Users.forEach((e )=> {
                if (e.name === obj.name && e.email === obj.email) {
                    Nav('users')
                    con = false
                }
            })

            if (con) alert('Register Now')
        }
    }


    const Register = e => {
        if (name && email) {

            let obj = { name: name, email: email }
            axios.post('http://localhost:5000/emailTask/new', { data: obj }).then(res => setUsers(res.data))
            setemail('')
            setname('')
            alert('Register Success')
        }
        else alert('Enter Your Details')
    }
    return (
        <div className=' container '>
            <div className="row mt-5 justify-content-center">
                <div className="col-4  border mt-5 ">
                    <label htmlFor="Name" className='mt-2'>Name</label>
                    <br />
                    <input onInput={e => setname(e.target.value)} className='form-control' type="text" name="" id="" placeholder='Enter Your Name' />
                    <br />
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input onInput={e => setemail(e.target.value)} className='form-control' type="Email" name="" id="" placeholder='Enter Your Email' />
                    <div className="justify-content-center d-flex mb-3">
                        <button onClick={Register} className="btn-primary btn mt-2">Register</button>
                        <button onClick={Login} className="btn-primary btn mt-2 mx-3">Login</button>
                    </div>
                </div>

            </div>


        </div>
    )
}
