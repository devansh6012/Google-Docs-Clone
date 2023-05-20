import React from 'react'
import Calender from '../images/calender.png'
import Keep from '../images/Keep.png'
import Map from '../images/map.png'
import Contacts from '../images/contacts.png'

const SideBar = () => {
    return (
        <div>
            <div className='fixed top-16 right-0 w-20 ml-auto pl-2 flex flex-col mt-1' style={{ alignItems: 'center' }}>
                <div>
                    <a href="https://calendar.google.com/calendar" target="_blank" rel="noopener noreferrer">
                        <img className='w-7 mb-8' src="https://lh3.googleusercontent.com/DaaQa-Y-b3_IAhu6SBFb2vRl8PFR5iuCLwLszc16_OTlLrEFvFF9P4CS0ui-414nG9016ul3dQD1R3mHtmMx4P1bIA-zRXuPpFN4yw=h120" alt={Calender} />
                    </a>
                </div>
                <div>
                    <a href="https://keep.google.com/" target="_blank" rel="noopener noreferrer">

                        <img className='w-7 mb-8' src="https://lh3.googleusercontent.com/9TzWtxtT-9Vrlwa8SXTSKhfl91Ndy4hU-1uLE9-hFsVSHARAOlFEdFExVR4QCegJ-KUBTSlJm3DZY6g31sbVrUT_HfxQvX_7WgLp=h120" alt={Keep} />
                    </a>
                </div>
                <div>
                    <a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">

                        <img className='w-7 mb-8' src="https://lh3.googleusercontent.com/AGsg9hOAylBkWuFrfSgOt8psYWcr3b-vZcmIVk0ocwx7KAVSu--tg1ZIAUSL7nAbORTHI5eZaweHYVPMJu5ac8Xw7GP_WiCs1w60=h120" alt={Calender} />
                    </a>
                </div>
                <div>
                    <a href="https://contacts.google.com/" target="_blank" rel="noopener noreferrer">

                        <img className='w-7 mb-8' src="https://lh3.googleusercontent.com/uPpZapQO32gCKWztePKdTRzpg7rCr4_40vlgIAslU9JyF135ZdGvC33DbzA2mdmOTNK6qgbu7xWfKkR9rfJUwaK20saGLsFW9yw014GdOKBVEN9zow=h120" alt={Contacts} />
                    </a>
                </div>
                <div>
                    <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">

                        <img className='w-7 mb-8' src="https://lh3.googleusercontent.com/9NuRdiRepVI3n1txfg7Ky2wWzB3DvXkWABXeFMSn2tzDYYkv8T_RMA9R17fWi0ziUDIDTVJx0JruCzOev37c4dkK9Wrgkeyam3pM8lI=h120" alt={Map} />
                    </a>
                </div>
                <hr className="w-9 mb-10 border-blue-gray-50" style={{ borderWidth: '1px' }} />
                <i className="fa-solid fa-plus fa-lg cursor-pointer"></i>
            </div>
        </div>


    )
}

export default SideBar