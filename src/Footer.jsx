import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer(){

    return(<div className="footer"> 
      <div className="footer-left">
        <Link to="/about">
        About Deakin
        </Link>

      </div>
      <div >
        <Link to="connect">
         Connect with us
        </Link> 

      </div>
      <div className="footer-right">
       <Link to ='' >
       <FaFacebook />
       </Link>  
       <Link>
       <FaTwitter />
       </Link>     
       <Link >
       <FaInstagram />
       </Link>
      </div>
      </div>  
    )
}
export default Footer;