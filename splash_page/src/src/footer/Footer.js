import './Footer.css';

function Footer() {
    return (
        <div className="mainFooterDiv">
            <br></br>
            <br></br>
            <div className="flexouter">
                <div className="gridsocial">
                    <div>
                        <h3 className="footerHeader">Stay Connected</h3>
                    </div>
                    <div className="logo">
                    </div>
                    <div>
                        <p className="socLinks">LinkedIn</p>
                    </div>
                    <div className="logo">
                    </div>
                    <div>
                        <p className="socLinks">Facebook</p>
                    </div>
                    <div className="logo">
                    </div>
                    <div>
                        <p className="socLinks">Instagram</p>
                    </div>
                </div>
                <div className="navsocial">
                    <div>
                        <h3 className="footerHeader">Navigation</h3>
                    </div>
                    <div>
                        <div>
                            <p className="navLinks">Blogs</p>
                        </div>
                        <div>
                            <p className="navLinks">Portfolio</p>
                        </div>
                        <div>
                            <p className="navLinks">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <br></br>
                <h3 className="footerHeader">Crunchy Solutions</h3>
                <br></br>
                <p className="finisher">Thank you for visiting my page. If you have any comments or questions, feel free to <a href="#">contact</a> me.</p>
                <p className="finisher">S.Bish</p>
                <p id="disclaimer">Logos and imagery are registered trademarks of the respective organizations that they represent and are not my own.</p>
            </div>
        </div>
    );
}

export default Footer;
