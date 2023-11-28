import { RootState } from '@/state/store'
import { Avatar, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdLogout, MdCreateNewFolder , MdSettings} from 'react-icons/md'


import { logOut } from '@/state/features/AuthSlice'
import toast from 'react-hot-toast'

const LoginBtn = () => {

  const user = useSelector((state: RootState) => state.auth.user)
  
  
  return (<>
      {user ? (
        <AvatarUi user={user} />
      ): <Link href={'/get-started'}><Button variant='solid' className='bg-blue-600 bg-opacity-80 backdrop-blur-2xl h-[5vh] laptop:h-[5vh] font-pop font-semibold h1' > 'get started'</Button>
      </Link>}
     </>
  )
}

export default LoginBtn
export const AvatarUi = ({ user }: any) => {
  console.log(user);
  const dispatch = useDispatch()
  const logOutHandler=()=>{
    dispatch(logOut())
    toast.success("Logged out successfully")
  }
  return (

          <Dropdown placement="bottom-start" backdrop='blur' showArrow  shadow='md'>
           <Badge size='sm'   color='danger' content={"2"}>
      <DropdownTrigger className='cursor-pointer'>
   
         
       <Avatar src={user?.profileURL ? user?.profileURL : "https://i.pravatar.cc/150"} className='w-[30px]' isBordered  size='sm' name={user?.fullName} />
       </DropdownTrigger>   </Badge>  
        <DropdownMenu aria-label="User Actions" variant="flat" className='text-black ' >
          <DropdownItem color='primary' key="profile" className="h-14 gap-2 text-black ">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@{user?.fullName}</p>
          </DropdownItem>
        {dropdownItems.map((item: any, index: number) => (
      
          <DropdownItem className='px-8'  key={index} endContent={item.icon!==null ?  <Badge className={`${item.key!=="noti" && 'hidden'}`} size='sm' color="danger" content={"2"} key={index}> {item.icon}</Badge>  : null} classNames={{
            title: 'font-bold',

          }} color={item.color}>
            {item.key==="logout" ? (
        <h1 onClick={() => dispatch(logOut())}>{item.label}</h1>
            ) :  
              <Link href={{pathname:item.url}} prefetch={false}  >{item.label}</Link>}
            </DropdownItem>))}
        </DropdownMenu>
      </Dropdown>
  )
}
const dropdownItems: any = [
  { key: "create_yearbook_card", url: "/yearbook/create", label: "Add Your Yearbook Card", icon: <MdCreateNewFolder className='text-xl' /> ,color:'primary' },
 /*   {
    key: "noti",
    url: "/notifications",
    label: "Notifications",
     icon: <IoNotifications className='text-xl' />
    ,color:'warning'
  }, */
  {
    key: "change_profile",
    url: "/profile-settings",
    label: "Change Profile Settings",

    icon: <MdSettings className='text-xl' />
    ,color:'success'
  }
 ,
  {
    key: "logout",
    label: "Log Out",
    color: "danger",
    icon: <MdLogout className='text-xl'/>
  },
];