import React from 'react';

const InfoCard = (props) => {
  // console.log('props getting passed', props)

  const value = typeof parseInt(props.value) === 'number' && !isNaN(parseInt(props.value))  ? Math.round(parseInt(props.value)) : props.value;

  // console.log('should have only numbers here', value)

  return (
    <div className="custom-card">
        <div className="card-body">
        <img src={props.src} alt={props.src} className = "img-responsive float-right"  />
            <h6 className="card-title"> {props.header} </h6>

            <h2 className="text-primary">${value}</h2>
            <p className="card-text"><small>{props.label}</small></p>

        </div>
    </div>
  )
};



export default InfoCard;