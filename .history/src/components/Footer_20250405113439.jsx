import "./footer.css";
import ApeCode from "../assets/ApeCode.png";


function Footer() {
    return (
        <>
        <div className="footerContainer">
           <p>&copy; {new Date().getFullYear()} Ervin Clay Jr | Powered by APE CODE</p>
           <div>
          <img className="apeCodeImg2" src={ApeCode} alt="" />
        </div> 
        <p>&copy; {new Date().getFullYear()} Ape Code</p>
           <div></div>
        </div>
        </>
    );
}

export default Footer;