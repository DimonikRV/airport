import React from 'react';
import './advertisment.scss';

const Advertisment = () => {
  return (
    <div className="main__advertisment advertisment">
      <div className="advertisment__content">
        <a href="covid-test" className="how-to-get-btn">
          <div className="how-to-get-btn__content">
            <div className="how-to-get-btn__text"> Тестування на COVID-19 у аеропорту «Київ» </div>
            <div className="how-to-get-btn__aditional-text">Для всіх охочих 24/7</div>
          </div>
          <p></p>
        </a>
      </div>
    </div>
  );
};
export default Advertisment;
