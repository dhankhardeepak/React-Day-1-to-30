import React, { useEffect, useRef, useState } from 'react'
import { users } from './Data/dropdownData'
import useDebounce from './hooks/useDebounce';
import './css/dropdown.css'
import useOutsideClick from './hooks/useOutsideClick';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterVal, setFilterVal] = useState('');
  const [selectedItems, setSelectedItems] = useState(null);
  const [userList, setUserList] = useState(users);
  const dropdownRef = useRef();  
  const debouncedFilterVal = useDebounce(filterVal);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  })
  
  useEffect(() => {
    const listCopy = users;
    const updatedList = listCopy.filter((val) => val.name.toLowerCase().includes(debouncedFilterVal))
    setUserList(updatedList);
  },[debouncedFilterVal])
  
  const onSelectUserList = (user) => {
    setSelectedItems((prev) => {
        if(prev){
            if(prev.some((item) => item.id === user.id)) return prev;
            return [...prev, user]
        }
        else{
            return [user]
        }
    })
  }

  const selectAllItems = (e) => {
    if(e.target.checked == true){   
        setSelectedItems(users)
    }
    else{
        setSelectedItems(null)
    }
  }
  
  return (
    <div>
        <div className='dropDownDiv' ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} >Open DropDown</button>
            <div className={`dropDownMain ${isOpen ? 'open' : 'close'}`} >
                <div className='checkBoxDiv' style={{display:'flex'}}>
                    <input type='checkbox' onChange={(e) => selectAllItems(e)}/>
                    <span>Select All</span>
                </div>
                <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
                <ul>
                    {userList.map((user) => <li key={user.id} onClick={() => onSelectUserList(user)}>{user.name}</li>)}
                </ul>
            </div>
            {selectedItems ? <div>
                {selectedItems.map((item) => <div key={item.id}>{item.name}</div>)}
            </div> : null}
        </div>
    </div>
  )
}

export default DropDown
