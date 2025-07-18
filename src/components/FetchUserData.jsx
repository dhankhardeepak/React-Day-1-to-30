import React, { useEffect, useState } from 'react'

const FetchUserData = () => {
  
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [reFetch, setReFetch] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    try {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        if(data && data.users.length){
            setLoading(false);
            setReFetch(true);
            setData(data.users);
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  }  

  useEffect(() => {
    
    setTimeout(() => {
        getAllUsers();
    }, 1000);
  },[])

  

  const refetchData = () => {
    setReFetch(false);
    getAllUsers();
  }


  if(loading === true) return <div>Loading Data, please wait!!!</div>
  return (
    <div>
      {data && data.length ? <>
        {data.map((user) => {
            return (
                <div key={user.id}>
                    <span>{user.id}</span> - &nbsp;
                    <span>{user.firstName}</span>
                </div>
            )
        }) }
      </> : null}
      {fetch ? <button onClick={() => refetchData()}>Refetch Data</button> : null}
    </div>
  )
}

export default FetchUserData;
