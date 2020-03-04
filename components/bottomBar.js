const BottomBar = () => (
    <div>
        <p className="text-center">&copy; Weston Vincze</p>
    <style jsx>{`
       div {
           height: 48px;
           width: 50%;
           background-color: #f3dca3;
           margin-bottom: 4px;
           margin-left: 2px;
           position: relative;
           border-radius: 0 0 15px 5px;
       }

       p {
           margin: 0;
       }

       div::after {
        content: url(assets/images/footer-folder-img.png);
        position: absolute;
        right: -27px;
        top: 0;
       }
            
        @media screen and (max-width: 380px) {
            div {
                width: 70%;
            }
        }
    `}
    </style>
    </div>
);

export default BottomBar;
