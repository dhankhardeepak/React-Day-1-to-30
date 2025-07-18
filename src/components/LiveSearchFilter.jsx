import React, { useEffect, useState } from 'react'
import {user} from './Data/user';
import useDebounce from './hooks/useDebounce';

const LiveSearchFilter = () => {
  const [data, setData] = useState(null);
  const [inputVal, setInputVal] = useState('')

  const debouncedInput = useDebounce(inputVal, 1000);
  
  const handleInputChange = (e) => {
    setInputVal(e.target.value)
  }
  
  const filterList = (term) => {
    const copyUser = [...user];
    const filteredData = copyUser.filter((user) => user.name.toLowerCase().includes(term.toLowerCase()))
    setData(filteredData);
  }
  
  useEffect(() => {
    setData(user);
  },[])
  
  useEffect(() => {
    filterList(debouncedInput);
  }, [debouncedInput])

  return (
    <div>
        <div style={{textAlign:"center"}}>
            <input style={{width:"300px"}} type='text' value={inputVal} onChange={(e) => handleInputChange(e)} />
        </div>  
        {
            data && data.length ? <ul>
                {data.map((dataItem) => {
                    return (
                        <li key={dataItem.id}>
                            {dataItem.name}
                        </li>
                    )
                })}
            </ul> : <p>No Data to Show</p>        
        }  
    </div>
  )
}

export default LiveSearchFilter;
