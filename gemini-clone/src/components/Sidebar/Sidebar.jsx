import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=" " />
                <div className='new-chat'>
                    <img onClick={()=>setExtended(prev=>!prev)} src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        <div onClick={()=>setExtended(prev=>!prev)}  className='recent-entry'>
                            <img src={assets.message_icon} alt="" />
                            <p>What is react...</p>
                        </div>
                    </div>
                    : null
                }

            </div>
            <div className='bottom'>
                <div onClick={()=>setExtended(prev=>!prev)}  className='bottom-item recent-entry'>
                <img src={assets.question_icon} />
                    {extended?<p>Help</p>:null}
                </div>
                <div onClick={()=>setExtended(prev=>!prev)}  className='bottom-item recent-entry'>
                    <img src={assets.history_icon} />
                    {extended?<p>Activities</p>:null}
                </div>
                <div onClick={()=>setExtended(prev=>!prev)}  className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
