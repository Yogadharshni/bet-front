import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function Admin() {

    const [subject, setsubject] = useState('')
    const [body, setbody] = useState('')
    
    const sentMail = async () => {
        let mailContent = { subject, body }
        if (!!subject && !!body) {
            await axios.post('http://localhost:5000/emailTask/sentMail', mailContent)
            setsubject('')
            setbody('')
        }
        else alert('please Enter Details')
    }
    return (
        <div className="container" >
            <div className="row mt-5 justify-content-center">
                <div className="col-5 border mt-3  ">
                    <h3 className=' d-flex justify-content-center'> Sent Email Here</h3>
                    <label htmlFor="">   Subject :</label>
                    <br />
                    <input className='form-control' type="text" value={subject} onInput={(e) => setsubject(e.target.value)} />
                    <br />
                    <label htmlFor="">   Body content :</label>
                    <br />
                    <textarea className='form-control' value={body} onInput={(e) => setbody(e.target.value)}></textarea>
                    <br />
                    <div className="justify-content-center d-flex">

                        <button className="btn-primary btn mt-2 mb-3 " onClick={sentMail}>Sent Email to all persons</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
