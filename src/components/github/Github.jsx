import React from 'react'
import { useEffect } from 'react'

function Github() {

    const [data, setData] = React.useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/pranmandele')
        .then((response) =>response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-5 text-3xl'>
      Github followers: {data.followers}
    </div>
  )
}

export default Github

