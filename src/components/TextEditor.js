import React, { useEffect, useRef, useState } from 'react'
import Quill from "quill"
import 'quill/dist/quill.snow.css';
import '../index.css';
import { Menu, MenuHandler, MenuItem, MenuList, Tooltip } from '@material-tailwind/react';

const TextEditor = () => {

    var toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        ['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }],        // toggled buttons

        [{ 'align': [] }],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

        ['clean']                                         // remove formatting button
    ];

    const quillRef = useRef(null);

    useEffect(() => {
        quillRef.current = new Quill('#container', {
            theme: "snow", modules: {
                toolbar: toolbarOptions, history: {
                    delay: 1000,
                    maxStack: 500,
                    userOnly: true
                }
            }
        })

    }, [])

    const handleUndo = () => {
        const editor = quillRef.current;
        editor.history.undo();
    };

    const handleRedo = () => {
        const editor = quillRef.current;
        editor.history.redo();
    };

    return (
        <div className='fixed top-16' style={{ width: '95vw' }}>
            <div className='px-4 h-4'>
                <div className='container' id='container'>
                </div>
            </div>
            <div className='h-10 flex items-center extra-icons'>

                <div className='space-x-4'>
                    <Tooltip content="Undo (Ctrl+z)" placement="bottom">
                        <button onClick={handleUndo}><i class="fa-solid fa-rotate-left fa-2xs" style={{ color: "#444746" }}></i></button>
                    </Tooltip>
                    <Tooltip content="Redo (Ctrl+y)" placement="bottom">
                        <button onClick={handleRedo}><i class="fa-solid fa-rotate-right fa-2xs" style={{ color: "#444746" }}></i></button>
                    </Tooltip>
                    <Tooltip content="Print (Ctrl+p)" placement="bottom">
                        <button><i class="fa-solid fa-print fa-xs" style={{ color: "#444746" }}></i></button>
                    </Tooltip>
                    <Tooltip content="Spelling and grammar check (Ctrl+Alt+X)" placement="bottom">
                        <button><i class="fa-solid fa-spell-check fa-xs" style={{ color: "#444746" }}></i></button>
                    </Tooltip>
                </div>

                <Tooltip content="Editing mode" placement="bottom">
                    <Menu>
                        <MenuHandler>
                            <div className='cursor-pointer flex items-center space-x-8 ml-auto mr-12 tool-edit-btn'>
                                <div className='flex items-center space-x-3'>
                                    <i class="fa-solid fa-pen fa-xs"></i>
                                    <div className='text-sm'>Editing</div>
                                </div>
                                <i class="fa-solid fa-caret-down fa-2xs"></i>
                            </div>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>
                                <div className='flex'>
                                    <div className='mr-2'>
                                        <i class="fa-solid fa-pen fa-xs"></i>
                                    </div>
                                    <div>
                                        <div className='text-sm font-medium'>Editing</div>
                                        <div className='text-xs'>Edit document directly</div>
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className='flex'>
                                    <div className='mr-2'>
                                    <i class="fa-solid fa-message fa-xs"></i>
                                    </div>
                                    <div>
                                        <div className='text-sm font-medium'>Suggesting</div>
                                        <div className='text-xs'>Edits become suggestions</div>
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className='flex'>
                                    <div className='mr-2'>
                                    <i class="fa-solid fa-eye fa-xs"></i>
                                    </div>
                                    <div>
                                        <div className='text-sm font-medium'>Viewing</div>
                                        <div className='text-xs'>Read or print final document</div>
                                    </div>
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Tooltip>


            </div>

        </div>
    )
}

export default TextEditor