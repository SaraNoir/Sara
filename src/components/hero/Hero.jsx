import './hero.css';
import img from '../../img/disegno3.png';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <>
            <div className="title">
                <h1>Sara Esu</h1>
                <h2>Full Stack Developer</h2>
            </div>
       {/*      <hr className="home-hr" /> */}
            <div className="hero flex">
                <div className='hero-column justify-c'>
                    <img src={img} alt="" />
                </div>
                <div className="hero-column hero-txt align-c">
                    <p className='column'>Mi chiamo Sara e sono una sviluppatrice Full Stack Cagliaritana. <br />
                    Mi piace scrivere codice, guardare film e cucinare.
                    <div className='align-c hero-txt-link'>
                    <Link to ='/about'>about me</Link>
                    <div className='hero-txt-icon'><Link to ='/about'><i class="fa fa-caret-right"></i></Link></div>
                    </div>
                    </p>
                
                </div>
            </div>

        </>
    )
}