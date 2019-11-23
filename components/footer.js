const Footer = () => (
    <div className="footer">
        <div className="row ">
            <div className="col-12 text-center">
                <h2 className="subtitle">let's get in touch.</h2>
            </div>
        </div>

        <div class="row">
            <div class="offset-lg-2 col-lg-8 col-12">
                <div className="row align-items-center">
                    <div className="text-lg-center text-right col-lg-4 col-6 order-lg-1 order-1">
                        <a href="tel:226-218-2481" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-phone fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-right col-lg-4 col-6 order-lg-2 order-3">
                        <a href="mailto:westonvincze@gmail.com" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-envelope fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-right col-lg-4 col-6 order-lg-3 order-5">
                        <a href="https://www.linkedin.com/in/weston-vincze/" target="_blank" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-linkedin fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-left col-lg-4 col-6 order-lg-4 order-2">
                        <a href="tel:226-218-2481" className="text-link">call me.</a>
                    </div>
                    <div className="text-lg-center text-left col-lg-4 col-6 order-lg-5 order-4">
                        <a href="mailto:westonvincze@gmail.com" className="text-link">email me.</a>
                    </div>
                    <div className="text-lg-center text-left col-lg-4 col-6 order-lg-6 order-6">
                        <a href="https://www.linkedin.com/in/weston-vincze/" className="text-link" target="_blank">linkedIn.</a>
                    </div>
                </div>
            </div>
        </div>
        
        <style jsx>{`
            .footer {
                padding-bottom: 30px;
            }
            .fa-stack-1x {
                transition: color 0.5s ease;
                color: #fff;
            }
            .fa-circle {
                transition: color 0.5s ease;
                color: #fd8469;
            }
            .fa-stack:hover .fa-stack-1x {
                transition: color 0.5s ease;
                color: #fd8469;
            }
            .fa-stack:hover .fa-circle{
                transition: color 0.5s ease;
                color: #fff;
            }
            .text-link {
                transition: color 0.5s ease;
                text-decoration: none;
                color: inherit;
            }
            .text-link:hover {
                transition: color 0.5s ease;
                border-bottom: 2px solid white;
            }
        `}</style>
    </div>
);

export default Footer;