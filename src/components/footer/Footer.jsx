import "./footer.css";
import logo from "../../img/blackrose.png"
export function Footer() {

    return (
        <>
            <footer>
                <div className="prefooter align-c">
                    <div class="prefooter-column">
                        <a href="tel:+393405043996">
                            <i class="fa fa-phone"></i>
                            3405043996
                        </a>
                    </div>
                    <div class="prefooter-column">
                        <a href="mailto:saraesu@gmail.com">
                            <i class="fa fa-envelope"></i>
                            saraesu@gmail.com
                        </a>
                    </div>
                </div>
                <div className="column align-c">
                <p>Potete visionare il codice di questo sito su GitHub: <a href="https://github.com/SaraNoir/Sara" target="_blank">repository </a><a href="https://github.com/SaraNoir/Sara" target="_blank"><i class="fa fa-github"></i></a></p>
                   <p className="align-c">Copyright © 2023 Sara Esu <img src={logo} alt="" /></p> 
                </div>
            </footer>
        </>
    );
}