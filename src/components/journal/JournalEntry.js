import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://cdna.artstation.com/p/assets/images/images/046/210/968/large/soda-abo-1.jpg?1644549064)"
                }}
            >

            </div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>Lorem, ipsum dolor.</p>
                <p className='journal__entry-content'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
