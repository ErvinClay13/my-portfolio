import ApeCode from "../assets/ApeCode.png";


function Footer() {
    return (
        <>
        <div></div>
           <p>&copy; {new Date().getFullYear()} Ape Code</p>
           <div>
          <img className="apeCodeImg2" src={ApeCode} alt="" />
        </div> 
        </>
    );
}

export default Footer;