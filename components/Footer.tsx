import { logoutAccount } from '@/lib/ACTIONS/user.actions';
import { useRouter } from 'next/navigation';
import React from 'react'
import { TbLogout } from "react-icons/tb";

const Footer = ({user, type = 'desktop'}:FooterProps) => {

     const router = useRouter()
    const handleLogOut =async()=>{
        const loggedOut:any = await logoutAccount();
       
        if (loggedOut) router.push('/sign-in');
    }
  return (
    <footer className='footer'>
        <div className={type === 'mobile'?'footer_name-mobile':'footer-name'}>
           <p className='text-xl font-bold text-gray-700'>{user?.name[0]}</p>
        </div>

        <div className={type === 'mobile'?'footer_email-mobile':'footer-email'}>
            <p className='text-14 truncate font-bold text-gray-600'>{user?.name}</p>
            <p className='text-14 truncate font-normal text-gray-600'>{user?.email}</p>
        </div>
        <button
        onClick={handleLogOut}
        >
            <TbLogout className='text-gray-700 font-extrabold' size={20} />
        </button>
      
    </footer>
  )
}

export default Footer
