const stickyTitle = () => (
    <div className="row">
        <div className="col-md-4 col-xs-3">
            <hr></hr>
        </div>
        <div className="col-md-4 col-xs-6 text-center">
            <h1 className="written">Weston Vincze.</h1>
            <h2>web developer</h2>
        </div>
        <div className="col-md-4 col-xs-3">
            <hr className="right-hr"></hr>
        </div>

        <style jsx>{`
            .row {     
                height: 210px;
                background-image: linear-gradient(rgba(243,220,163,1), rgba(243,220,163,1),rgba(243,220,163,1), rgba(243,220,163,1), rgba(255,25,229,0));
                border-radius: 5px 0px 0px 0px;
                margin: 0;
            }

            h1 {
                font-family: 'Great Vibes', cursive;
                font-family: 'Zeyada', cursive;
                font-size: 5.8em;
                margin-bottom: -15px;
            }

            hr {
                margin-top: 50px;
                border: 0;
                height: 1px;
                background-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
            }

            hr.right-hr {
                background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
            }

            @media screen and (max-width: 1280px) {
                h1 {
                    font-size: 4em;
                }
            }

            @media screen and (max-width: 768px) {
                h1 {
                    font-size: 3.3em;
                }
        `}</style>
    </div>
);

export default stickyTitle;