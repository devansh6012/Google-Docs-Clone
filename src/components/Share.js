import { Avatar, Button, Dialog, DialogBody } from '@material-tailwind/react'
import React from 'react'
import Profile from '../ProfilePic.jpg'

const Share = ({ open, docName, handleOpen }) => {

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
    <div>
      <Dialog size='sm' open={open} handler={handleOpen}>
        <DialogBody>
          <div className='flex mb-5'>
            <div>
              <p className='text-2xl'>Share "{docName}"</p>
            </div>
            <div className='flex ml-auto gap-4'>
              <div>
                <i class="fa-solid fa-circle-question fa-xs cursor-pointer"></i>
              </div>
              <div>
                <i class="fa-solid fa-gear fa-xs cursor-pointer"></i>
              </div>
            </div>
          </div>

          <input type='text' className='text-gray-700 w-full mb-4' placeholder='Add people and groups' />
          <p className='mb-4 text-base share-subheading font-medium'>People with access</p>

          <div className='flex mb-4'>
            <div>
              <Avatar className='w-8 h-8' src={Profile} />
            </div>
            <div className='ml-2'>
              <p className='text-sm'>Devansh Gupta (You)</p>
              <p className='text-xs'>devansh5901@gmail.com</p>
            </div>
            <div className='ml-auto mr-4'>
              <p>Owner</p>
            </div>
          </div>

          <p className='mb-2 text-base share-subheading font-medium'>General access</p>
          <div className='flex mb-8'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center' style={{ backgroundColor: '#E3E3E3' }}>
              <i className="fa-solid fa-lock fa-sm"></i>
            </div>
            <div className='ml-2'>
              <div>
                <p className='text-sm'>Restricted</p>
              </div>
              <p className='text-xs'>Only people with access can open with the link</p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <Button className='rounded-full flex items-center gap-2 normal-case' variant="outlined" onClick={handleCopyUrl}><i class="fa-solid fa-link fa-md"></i>Copy link</Button>
            </div>
            <div className='ml-auto'>
              <Button onClick={handleOpen} className='rounded-full flex items-center gap-2 normal-case' style={{ color: "white", backgroundColor: '#1151B7' }}>Done</Button>
            </div>
          </div>

        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Share