//Contains the footer container for the home page. 

import './homeFooter.css';
import Plans from './Plans/Plans';
import FooterBotton from './footerBotton/FooterBottom';
const HomeFooter = () =>{
    return(
        <footer>
           <Plans/>
           <FooterBotton/>
        </footer>
    )
}

export default HomeFooter;