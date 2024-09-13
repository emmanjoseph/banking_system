'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}:SiderbarProps) => {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
        <div className="flex flex-col gap-4">
            <Link href='/'
            className='mb-12 cursor-pointer flex items-center gap-2'
            >
                <Image src='/icons/logo.svg' alt='logo'
                width={34}
                height={34}
                className='size-[24px] max-xl:size-14'
                />

<h1 className="sidebar-logo">Horizon</h1>
            </Link>
           <nav className='flex flex-col gap-4'>    
            {sidebarLinks.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
                return <Link key={item.label} href={item.route}
                className={cn('sidebar-link',{'bg-bankGradient':isActive})}
                >
                   <div className='relative size-6'>
                    <Image src={item.imgURL} alt={item.label}
                    fill
                    className={cn({'brightness-[3] invert-0':isActive})}
                    />
                  
                   </div>
                   <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
                </Link>
            })}
             </nav>
             user 
        </div>
        user
    </section>
  )
}

export default Sidebar