import React, { useEffect, useState } from 'react'
import { Button, Avatar, Tooltip, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import Profile from '../ProfilePic.jpg'
import Share from './Share'
import { ReactComponent as LastEditIcon } from '../images/lastEditIcon.svg';
import { ReactComponent as CommentIcon } from '../images/commentIcon.svg';
import { ReactComponent as VideoIcon } from '../images/videoIcon.svg';

const Header = () => {

    const [docName, setDocName] = useState("Untitled document")
    const [isStarred, setIsStarred] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        if (docName === "") {
            setDocName("Untitled document")
        }
        document.title = docName;
    }, [docName])

    const handleCopyUrl = () => {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                console.log("copied", url);
            })
            .catch((error) => {
                console.error('Failed to copy URL:', error);
            });
    };

    return (
        <div className='fixed top-0 flex items-center px-4 w-full'>
            <div className='flex justify-between items-center pt-2 pb-1'>
                <span>
                    <Tooltip content="Docs home" placement="bottom">
                        <img src="https://lh3.googleusercontent.com/Ac9zapU8rN332VMysmJIaTk1Nk-3IGzqCwFS-6PwDFUFpEzEBKPTGWfIFN4BXL3eHP5s1DJP2tyh8NTS8_LjvXHzpkyZC2fu58Ov=h120" className='w-8 cursor-pointer' alt="" />
                    </Tooltip>
                </span>

                <div>
                    <div className='ml-2'>
                        <Tooltip content="Rename" placement="bottom">
                            <input type='text' className='text-gray-700 titleInput w-40' value={docName} onChange={(e) => setDocName(e.target.value)} />
                        </Tooltip>
                        <Tooltip content="Star" placement="bottom">
                            <i onClick={() => setIsStarred(!isStarred)} className={isStarred == false ? "cursor-pointer fa-regular fa-star fa-xs ml-6" : "cursor-pointer fa-solid fa-star fa-xs ml-6"} style={{ color: isStarred == false ? "#5b677b" : "#0B57D0" }}></i>
                        </Tooltip>
                    </div>

                    <div className='ml-1'>
                        <div className='flex items-center h-5'>
                            <p className='menu-btn text-xs'>File</p>
                            <p className='menu-btn text-xs'>Edit</p>
                            <p className='menu-btn text-xs'>View</p>
                            <p className='menu-btn text-xs'>Insert</p>
                            <p className='menu-btn text-xs'>Format</p>
                            <p className='menu-btn text-xs'>Tools</p>
                            <p className='menu-btn text-xs'>Extensions</p>
                            <p className='menu-btn text-xs'>Help</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-x-3 ml-auto flex items-center'>

                <Tooltip content="Last edit" placement="bottom">
                    <div className='message-icon cursor-pointer'>
                        <LastEditIcon />
                    </div>
                </Tooltip>

                <Tooltip content="Open comment history (Ctrl+Alt+Shift+A)" placement="bottom">
                    <div className='message-icon cursor-pointer'>
                        <CommentIcon />
                    </div>
                </Tooltip>

                <Tooltip content="Join a call or presesnt this tab to the call" placement="bottom">
                    <Menu>
                        <MenuHandler>
                            <div className='flex items-center gap-3 video-icon'>
                                <div>
                                    <VideoIcon />
                                </div>
                                <i class="fa-sharp fa-solid fa-caret-down fa-2xs"></i>
                            </div>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>
                                <div className='text-base cursor-context-menu'>
                                    Join or start a meeting
                                    <div className='text-xs w-45 h-10 flex items-center justify-center p-2 rounded-lg' style={{backgroundColor: '#F8F9FA'}}>
                                        There are no upcoming meetings in your calendar today
                                    </div>
                                </div> 
                            </MenuItem>
                            <MenuItem>
                                <div className='flex items-center gap-4'>
                                <i class="fa-solid fa-plus fa-sm"></i>Start a new meeting
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className='flex items-center gap-4'>
                                    <i class="fa-regular fa-keyboard fa-sm"></i>Use a meeting code
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Tooltip>

                <Tooltip content="private to only me" placement="bottom">
                    <button onClick={handleOpen} className="flex items-center gap-2 bg-blue-500 text-sm font-medium share-btn py-2 px-4 rounded-full">
                        <i className="fa-solid fa-lock fa-sm"></i>Share
                    </button>
                </Tooltip>

                <Share open={open} docName={docName} handleOpen={handleOpen} />

                <Avatar className='w-8 h-8 cursor-pointer' src={Profile} />

            </div>
        </div>
    )
}

export default Header