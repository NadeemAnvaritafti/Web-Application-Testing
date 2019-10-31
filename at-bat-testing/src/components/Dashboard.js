import React from 'react';

const Dashboard = (props) => {

    return (
        <div className='dashboard'>
            <button className='hitbtn' onClick={()=> props.changeHit()}>Hit</button>
            <button className='strikebtn' onClick={()=> props.changeStrikes()}>Strike</button>
            <button className='ballbtn' onClick={()=> props.changeBalls()}>Ball</button>
            <button className='foulbtn' onClick={()=> props.changeFouls()}>Foul</button>
        </div>
    )

}

export default Dashboard;