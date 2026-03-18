import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='absolute top-0 left-0 w-full z-50 '>
    <nav className='max-w-7xl mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent lg:p-0'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-[#2B59FF] rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;