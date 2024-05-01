/* eslint-disable no-unused-vars */
import React from 'react';
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello,User</span></p>
                    <p>How may i assist you today?</p>
                </div>
                <div className='cards'>
                    <div className="card block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                        <p className="font-normal text-gray-700 dark:text-gray-400">Suggest beautiful plaes to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} className='pulse' />
                    </div>
                    <div className="card block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                        <p className="font-normal text-gray-700 dark:text-gray-400">Briefly Summarize this conept: Urban Planning.</p>
                        <img src={assets.bulb_icon} />
                    </div>
                    <div className="card block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                        <p className="font-normal text-gray-700 dark:text-gray-400">Brainstorm team bonding activities for our work retreat.</p>
                        <img src={assets.message_icon} />
                    </div>
                    <div className="card block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                        <p className="font-normal text-gray-700 dark:text-gray-400">Improve readability of the following code.</p>
                        <img src={assets.code_icon} />
                    </div>
                </div>
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type="text" placeholder='Enter a prompt here' />
                        <div className='try'>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            <img src={assets.send_icon} />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
