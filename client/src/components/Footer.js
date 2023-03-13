import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Footer.css'

const footer = () => {
  return (
    <>
      <div className='footer'>
        <footer>
          <FaFacebook className='icons'/>
          <FaYoutube className='icons'/>
          <FaInstagram className='icons'/>
          <FaLinkedin className='icons'/>
          <FaGithub className='icons'/>
          Designed and developped By Mohammed ROUAMCHI <span> &copy; </span> 2023
          {/* <span>🧡</span> */}
        </footer>
      </div>
    </>
  )
}

export default footer