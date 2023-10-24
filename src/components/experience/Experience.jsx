import React, { useState } from 'react';
import './experience.css';
import '../../style/style.css';
import '../../style/reset.css';
import data from '../../locales/experience';

export function Experience() {
  const [expInfoVisible, setExpInfoVisible] = useState(Array(data.length).fill(false));

  const toggleExpInfo = (index) => {
    const newExpInfoVisible = [...expInfoVisible];
    newExpInfoVisible[index] = !newExpInfoVisible[index];
    setExpInfoVisible(newExpInfoVisible);
  };

  return (
    <div className='exp-container'>
      <h3 className='width-max-c'>La mia formazione</h3>
      <div className='flex exp-txt'>
        <div>
        <div className='column align-c studies width-max-c'>
          <p>Mi sono diplomata al liceo Ginnasio Statale
            <a href="https://liceosiotto.edu.it/" target='_blank'> Siotto Pintor </a>
            <a href="https://maps.app.goo.gl/R734GDxydFPXpJTUA" target='_blank'> <i class="fa fa-map"></i> </a>
            <br /> e ho studiato Comunicazione presso l'
            <a href="https://web.unica.it/unica/" target='_blank'>Università degli studi di Cagliari. <br /> </a>
            Per quanto riguarda il mondo IT, ho seguito diversi corsi di formazione.
          </p>
          <div className='share'><i class="fa fa-share"></i></div>
        </div>
        </div>
        <div>
          <div className='column justify-c courses'>
            {data.map((item, index) => (
              <div className='exp flex' key={index}>
                <button onClick={() => toggleExpInfo(index)}>
                  {item.btn} <i className="fa fa-angle-right"></i>
                </button>
                {expInfoVisible[index] && (
                  <div className='exp-info flex'>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.date}</p>
                      <a href={item.link} target='_blank' rel='noopener noreferrer'>
                        {item.agency}
                      </a> 
                      </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
