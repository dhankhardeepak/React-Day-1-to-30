import React, { useEffect, useState } from 'react'
import './css/accordion.css'

const Accordion = ({ data, type }) => {

    const [active, setActive] = useState(type === 'single' ? 0 : new Set());

    useEffect(() => {
        setActive(type === 'single' ? 0 : new Set())
        
    }, [type])

    const setOnQuestionClick = (id) => {
        setActive((prev) => {
            if (typeof prev === 'number') {
                if (prev === id) return 0;
                return id;
            }
            else {
                const newSet = new Set(prev);
                if (newSet.has(id)) newSet.delete(id);
                else newSet.add(id);
                return newSet;
            }
        })
    }

    

    return (
        <div>
            {
                data.map((val, index) => {
                    const isActive = type === 'single' ? active === val.id : active instanceof Set && active.has(val.id);
                    return (
                        <div key={val.id} className={`accordionContainer ${isActive ? 'active' : ""}`}>
                            <div className='Question' role='button' aria-expanded={isActive}  onClick={() => setOnQuestionClick(val.id)}>
                                <span>{val.id}</span>
                                {val.title}
                            </div>
                            <div className={`answer ${isActive ? 'open' : 'closed'}`} role='region'>
                                {
                                    isActive && <p>{val.content}</p>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion
