import React, { useRef, useState } from 'react'
import { tabs } from './Data/tabData'
import './css/tab.css'

const Tab = () => {
  const [activeTab , setActiveTab] = useState(1);

  const handlingKeyDown = (e) => {
    if(e.key === 'ArrowRight' && activeTab < 3){
        setActiveTab((prevActive) => prevActive + 1)
    }
    else if(e.key === 'ArrowLeft' && activeTab > 1){
        setActiveTab((prevActive) => prevActive - 1)
    }
  }

  return (
    <div>
        <div className='TabMain'>
            <div className='tabButtons'>
            {
                tabs.map((tab) => {
                    return (<button key={tab.id} onClick={() => setActiveTab(tab.id)} onKeyDown={(e) => handlingKeyDown(e)} style={{outline : activeTab === tab.id ? '1px solid #000' : 'none'}}>{tab.name}</button> ) 
                })
            }
            </div>
            <div className='tabContent'>
                {tabs.map((tab) => {
                    return tab.id === activeTab ? <div key={tab.id}>{tab.content}</div> : null                
                })}
            </div>
        </div>
    </div>
  )
}

export default Tab
