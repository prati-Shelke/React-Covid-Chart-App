import React from 'react'
import img from "./img.png"
import { useNavigate } from 'react-router-dom'

function HomePage() {

    let navigate = useNavigate()
    return (
        <>
            <div className="container">
                <h1> COVID-19 STATISTICS </h1>
                <img src={img} alt="not found"></img>

                <div className='btn'>
                    <button type="button" className="btn btn-success" onClick={()=> navigate('/BarChart') }>Go To Chart</button>
                </div>
            </div>
        </>
    )
}

export default HomePage
