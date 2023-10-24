import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import './contacts.css';
import '../../style/style.css';
import '../../style/reset.css';
import FontAwesome from 'react-fontawesome';
import TitleUser from "../page.title/TitleUser";

export function Contacts() {

    return (
        <>
            <Header />
            <section className="contacts-section">
                <TitleUser title="Contacts"/>
                <div className="flex contacts">
                    <div className="contacts-column justify-c align-c">
                        <div className="column contacts-txt">
                            <p>Per qualsiasi domanda o commento, non esitate a contattarmi. </p>
                           {/*  <p> Se sei un'azienda e ti interessa avere informazioni aggiuntive, sarò felice di condividere il mio CV via email.</p> */}
                        {/* <p>Nome utente Discord: rosenoir</p> */}
                        </div>
                    </div>
                    <div className="contacts-column justify-end">
                        <div className="contacts-container column align-c  width-max-c">
                            <div className="social-box"> <h5 className="txt-c">Dove puoi trovarmi:</h5>

                                <div className="flex contact" >
                                    <a href="https://www.instagram.com/sara_yoshikage/" target="_blank">
                                        <i class="fa fa-instagram"></i>
                                    </a>

                                    <a href="https://www.linkedin.com/in/sara-esu-3360b4236/" target="_blank">
                                        <i class="fa fa-linkedin"></i>
                                    </a>

                                    <a href="https://github.com/SaraNoir" target="_blank">
                                        <i class="fa fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="contacts-box column align-c">
                                <h5>Come contattarmi:</h5>
                                <div className="column contact">

                                    <a href="tel:+393405043996">
                                        <i class="fa fa-phone"></i>
                                    </a>


                                    <a href="mailto:saraesu@gmail.com">
                                        <i class="fa fa-envelope"></i>
                                    </a>

                                    <a href="https://t.me/YoshikageSara" target="_blank">
                                        <i class="fa fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <div className="ds">
                <p className="txt-c">Ho anche un account Discord <br /> nome utente: rosenoir</p>
                </div> */}
                    <div id="wa">
                        <a href="https://wa.me/393405043996" target="_blank">
                            <i class="fa fa-whatsapp" title="Whatsapp me"></i>
                        </a>
                    </div>
                </div>
            </section>


            <Footer />


        </>
    );
}