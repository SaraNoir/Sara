import "./about.css";
import '../../style/reset.css';
import '../../style/style.css';
import { useState, useEffect } from "react";
import { Experience } from "../experience/Experience";
import { BackToTop } from "../back.to.top/BackToTop";
import device from "../../img/laptop.png"
import data from "../../locales/about/info.js";
import data2 from "../../locales/about/likes.js";
import data3 from "../../locales/about/about.js";
import TitleUser from "../page.title/TitleUser";
import pic from "../../img/comic.png";

export function About() {

    const [hiddenInfo, setHiddenInfo] = useState(true);
    const [language, setLanguage] = useState("en");


    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'it' : 'en'));
    };

    const hiddenInfoHandler = () => {
        setHiddenInfo(!hiddenInfo);
    };
    return (
        <>
            <TitleUser title="About me" /> 
            <div className="about-card column border width-max-c">
                <div className="justify-end btn-lang">
                    <button X onClick={toggleLanguage}>
                        {language === 'en' ? 'IT' : 'EN'}
                    </button>
                </div>


                <div className="info-card flex">
                    <img src={pic} alt="pic"/>
                    <div className="info-card-txt border align-c">
                    <div>
                        {data[language].map((item) => (
                            <div key={item.id}>
                                <div><strong>{item.key}</strong> {item.value}</div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <button onClick={hiddenInfoHandler} className="width-max-c">{data3[language].btn} 
                <i className="fa fa-angle-down"></i></button>
                <div className={`hidden-info ${hiddenInfo ? 'hidden' : ''}`}>
                    
                    <section className='likes column border'>
                    <h4 className="likes-title">{data3[language].likes}:</h4>
                        {data2[language].map((item) => (
                            <div key={item.id} className="flex align-c">
                                <img alt='' src={item.img} />
                                {item.text}
                            </div>
                        ))}
                    </section>
                    <div className="column weakness width-max-c border">
                        <strong>{data3[language].key}</strong>
                        <div className="align-c">{data3[language].value}<img src={data3[language].img} alt="" /> </div>
                    </div>
                </div>

            </div>

            <section className="devices flex align-c justify-end">
                <div>
                    <img src={device} alt="" />
                </div>
                <div>
                    <h3>I dispositivi che uso:</h3>
                    <ul>
                        <li><a href="https://www.amazon.it/dp/B0BCKHBLK5?ref=ppx_yo2ov_dt_b_product_details&th=1" target="_blank">Lenovo IdeaPad Gaming 3</a></li>
                        <li>Hp Pavillon Gaming Desktop 690-00xx</li>
                        <li>MacBook Air (M1 2020)</li>
                        <li>iPhone 12</li>
                    </ul>
                </div>

            </section>


            <Experience />
            {/* <section className="flex align-c juatify-c">
                <img src={aurora} alt="aurora boreale" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus quas enim sunt cum in nam officia iste nulla neque temporibus optio nostrum fugit quo eligendi repellendus animi, soluta sapiente molestias veritatis consequuntur! Quod quae dignissimos blanditiis rem optio aperiam ullam molestiae sunt cum omnis debitis sint libero iusto assumenda, nostrum, quo suscipit? Eveniet vero facere placeat odit quas veritatis sunt maiores quos velit, sapiente consequatur deserunt cum magni cupiditate reiciendis cumque veniam, molestias ex provident eum mollitia id et praesentium. Voluptas odio sunt iste praesentium porro officiis, nulla aliquam atque impedit dolores tempora perspiciatis suscipit dolore, ipsa veritatis neque.</p>

            </section> */}
            <BackToTop />

        </>
    );
}