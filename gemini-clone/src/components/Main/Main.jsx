import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';


const Main = () => {

    const { onSent, recentPrompt, showResult, loadng, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>
                {!showResult ?
                    <>
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
                    </>
                    : <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} />
                            {loadng
                                ? <div className='loader'>

                                    <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
                                        <div class="flex items-center w-full">
                                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                        </div>
                                        <div class="flex items-center w-full max-w-[480px]">
                                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                        </div>
                                        <div class="flex items-center w-full max-w-[400px]">
                                            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                        </div>
                                        <div class="flex items-center w-full max-w-[480px]">
                                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                        </div>
                                        <div class="flex items-center w-full max-w-[440px]">
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                        </div>
                                        <div class="flex items-center w-full max-w-[360px]">
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                        </div>
                                        <span class="sr-only">Loading...</span>
                                    </div>

                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>
                }

                <div className='main-bottom max-w-xl mx-auto'>
                    <div className='search-box'>
                        <input className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500' onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div className='try flex items-center'>
                            <img className='mr-2' src={assets.gallery_icon} alt="gallery icon" />
                            <img className='mr-2' src={assets.mic_icon} alt="mic icon" />
                            <img onClick={() => onSent()} className='cursor-pointer' src={assets.send_icon} alt="send icon" />
                        </div>
                    </div>
                    <p className='text-center bottom-info'>
                        Gemini may display inaccurate info, so double-check its responses. Made by <a href='https://www.linkedin.com/in/joshua-dmello-a48aa0264' className='text-blue-500 hover:underline'>Joshua</a>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Main;