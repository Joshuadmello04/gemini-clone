import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt} = useContext(Context)
    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt) 
        await onSent(prompt)
    }
    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt=" " />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended 
                    ? <div className='recent'>
                        <p className='recent-title'>Recent</p> 
                        <div className='recent-entry'>
                                    <img src={assets.message_icon} alt="" />
                                    <p>...</p>
                                </div>

                    </div>
                    : null
                }

            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} />
                    {extended ? <p>Activities</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
