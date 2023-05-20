# Google-Docs-Clone

React JS and tailwind CSS was used to build this project

Deployment: https://ozk9kn-3000.csb.app/

In components folder we have all the components
Header.js
Share.js
SideBar.js
TextEditor.js

Header.js, SideBar.js, TextEditor.js are rendered from App.js and Share.js is called from Header.js

## Header.js Contents

It contains:

docs logo
Title of page: which can be changes
logos for star, comment, video
Share button: copy url
Profile picture
Menu buttons: File, Edit, View, Format, Tools, Extensions, Help

useState was used

```sh
const [docName, setDocName] = useState("Untitled document")
    const [isStarred, setIsStarred] = useState(false);
    const [open, setOpen] = useState(false);
```

"docName" is used to change title of page
"isState" is used to change star logo
"open" is used to open share tab
"handleOpen" is a function to open and close Share tab

"open", "docName" and "handleOpen" are passed as props to Share.js

useEffect was used

```sh
useEffect(() => {
        if (docName === "") {
            setDocName("Untitled document")
        }
        document.title = docName;
    }, [docName])
```     

It was used to change the title of page

If user clicks on video logo a menu opens to showcase that user has option to either "Start a new meeting" or "Use a meeting code"
Menu from @material-tailwind/react was used for this purpose

Svg were used for last edit, comment and video icon and ther icons were implemented using font aweasome
Profile picture was implemented by Avatar from @material-tailwind/react

A tooltip is used to indicate what that particular button does.


## Share.js Contents

It contains:
Title of the page
Profile picture
Copy link button to copy url

```sh
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
  ```
  
  This function was used to copy url
  
## SideBar.js Contents

It contains link to following apps:
Google Calender
Google Keep
Google Drive
Google Contacts
Google Maps

and an add (+) button to showcase that more apps can be added (There is a thin line implemented with <hr/> to separate "add" button from other apps)


## TextEditor.js Contents

It contains:
Tools
Rich text editor

Both tools and rich text editor were implemented using quill js
Normal ```sh <textarea> ``` is unable to format the content so we use rich text editor which is not provided directly so we use quill js
Quill is a free, open source WYSIWYG editor built for the modern web.

Importing Dependencies:
  
```sh
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useRef } from 'react';
```

Here, we import the necessary dependencies: Quill for the rich text editor functionality, the Quill CSS file for styling, and React related modules (useEffect, useRef) for managing the component's lifecycle.

```sh
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
  ```

Here, the toolbarOptions variable is initialized as an array. It defines the toolbar configuration for the Quill editor. It includes an array with header options and an array with formatting options such as bold, italic, underline, color, and background.

State and Ref Declaration:

```sh
  const quillRef = useRef(null);
 ```

The quillRef is created using the useRef hook. It will be used to reference the Quill editor instance and access its methods and properties.

Undo and Redo Handlers:

```sh
const handleUndo = () => {
  const editor = quillRef.current;
  editor.history.undo();
};

const handleRedo = () => {
  const editor = quillRef.current;
  editor.history.redo();
};
```

We cannot add undo and redo directly in toolbar like other tools. The handleUndo and handleRedo functions are defined to perform the undo and redo operations, respectively. They retrieve the current Quill editor instance using the quillRef and call the undo() and redo() methods provided by the Quill's history module.

Used font aweasome to bring logos of undo, redo, print and spell check

 ```sh
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
```
  
When we click on Editing, it provides options with Editing, Suggesting and Viewing.
Here we used menu which comes from ``` @material-tailwind/react ```

In images folder we have all the svgs and other images
