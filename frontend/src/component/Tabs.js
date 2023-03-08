import React from 'react'


function Tabs({ filterTabs, tabs }) {
    return (
        <div className='container'>
            {
                tabs.map((ele) => {
                    return (
                        <button key={ele} className="mx-2 my-2 btn btn-primary" onClick={() => filterTabs(ele)}>{ele}</button>
                    )
                })
            }
        </div>
    )
}

export default Tabs