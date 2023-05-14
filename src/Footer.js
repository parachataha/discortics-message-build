import {FaYoutube, FaDiscord, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div id="footer">
            <img src="https://discortics.com/img/90x90.webp" alt="logo" />
            <ul>
                <li> <a href="https://www.youtube.com/channel/UCkS4mpn7WsELSzXzlwaesCA"> <FaYoutube/> </a> </li>
                <li> <a href="https://www.discord.gg/discortics"> <FaDiscord/> </a> </li>
                <li> <a href="https://twitter.com/discortics"> <FaTwitter/> </a> </li>
            </ul>
        </div>
     );
}
 
export default Footer;