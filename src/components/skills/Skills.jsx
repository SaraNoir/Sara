import icon from '../../locales/skills';
import './skills.css'
export function Skills() {

    return (
        <section>

            <h2 className='txt-c skills-title'>Skills</h2>
            <div className='skills'>
            <div className="stack-container">
            <h3 className='txt-c stack'>Front End <i class="fa fa-code"></i></h3>
            <div className='flex skills-container'>
                <div className="skills-column column align-c">
                    <div className='box-icon'><img src={icon[0].html} alt="" /></div>
                    <div className='skills-txt'><h4>{icon[0].text}</h4></div>
                </div>
                <div className="skills-column column align-c">
                    <div className=' box-icon'>
                        <img src={icon[1].css} alt="" />
                        <img src={icon[1].sass} alt="" />
                        <img src={icon[1].bootstrap} alt="" />
                    </div>
                    <div className='skills-txt'>
                        <h4>{icon[1].text}</h4></div>
                </div>
                <div className="skills-column column align-c">
                    <div className='box-icon'>
                        <img src={icon[2].js} alt="" />
                        <img src={icon[2].ts} alt="" />
                        <img src={icon[2].react} alt="" />
                    </div>
                    <div className='skills-txt'>
                        <h4>{icon[2].text}</h4> </div>
                </div>
            </div>



            <h3 className='txt-c stack'>Back End <i class="fa fa-code"></i></h3>

            <div className='flex skills-container'>
                <div className="skills-column column align-c">
                    <div className='box-icon'>
                        <img src={icon[3].node} alt="" />
                    </div>
                    <div className='skills-txt'><h4>{icon[3].text}</h4></div>
                </div>
                <div className="skills-column column align-c">
                    <div className='box-icon'>
                        <img src={icon[4].java} alt="" />
                    </div>
                    <div className='skills-txt'><h4>{icon[4].text}</h4></div>
                </div>
                <div className="skills-column column align-c">
                    <div className='box-icon'>
                        <img src={icon[5].mysql} alt="" />
                        <img src={icon[5].postgresql} alt="" />
                    </div>
                    <div className='skills-txt'><h4>{icon[5].text}</h4></div>
                </div>
            </div>
</div>
            <div>
                <div className='box-skills justify-c'>
                    <div >
                    <h3>Organizzazione e metodo <i class="fa fa-laptop"></i></h3>
                    <ul>
                        <li>Uso di Git e GitHub</li>
                        <li>Utilizzo di alcuni IDE (VSC, Atom, STS, Eclipse)</li>
                        <li>Lavoro in team</li>
                        <li>Metodo Agile</li>
                        <li>Organizzazione del lavoro in stile Kanban(<a id='trello' href="https://trello.com/" target='_blank'>Trello</a>, Github Kanban)</li>
                        <li>Uso di programmi per lavoro di gruppo o per videocomunicazioni (Skype, Microsoft Teams, Discord, TeamSpeak, TeamViewer)</li>
                        <li>Creazione e gestione di un server Discord</li>

                    </ul>
                    </div>
                </div>

                <div className=' column box-skills wp'>
                    <div  className='width-max-c'>
                    <h3>WordPress <i class="fa fa-wordpress"></i></h3>


                    <p>Wordpress, Elementor, WooCommerce</p>
                    </div>
                </div>
                <div className="align-end column box-skills content">
                    <div>
                        <h3><i class="fa fa-comment"></i> Social</h3>
                        <p>Creazione di contenuti per i social(Instagram, Facebook, Twitter)
                        </p>
                        <p>Uso di Canva</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

    );
}