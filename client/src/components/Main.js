import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

const Main = () => {
  const [item, setItem] = useState([{}])

  useEffect(() => {
    // Get data
    const getData = async () => {
      const res = await axios.get(`http://127.0.0.1:5000/get-data`)
      setItem(res.data)
    }
    getData()
  }, [])

  return (
    <>
      <div className='title'>
        <h1>Ingredients of Sandwich</h1>
      </div>
      <div>
        {item.map((data) => (
          <div className='list' key={data.id}>
            <div className='id'>{data.id}</div>
            <div className='name'>{data.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Main
