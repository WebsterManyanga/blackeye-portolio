import {AiOutlineInstagram} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'

const Socials = () => {
  let instaLink = 'https://www.instagram.com/blackeye_visuals_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==';
  let phoneLink = 'https://wa.me/48579295460';
  let emailLink = 'mailto: webster.zw@gmail.com';

  return (
    <div className='absolute flex right-4 flex-col gap-8 top-24 z-10 text-primary text-2xl before:block before:bg-primary before:h-24 before:w-[2px] before:mx-auto after:block after:bg-primary after:h-24 after:w-[2px] after:mx-auto  '>
      <a href={instaLink}><AiOutlineInstagram/></a>
      <a href={emailLink}><MdEmail/></a>
      <a href={phoneLink}><FaWhatsapp/></a>
    </div>
  );
}

export default Socials;