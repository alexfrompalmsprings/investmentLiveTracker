import React from 'react';
import styled from 'styled-components';

const ClassAddCart = styled.div`
  display:block;
  justify-content: space-between;
  width:700px;
`

const Pic_body = styled.div`
  width: 16px;
  opacity :0.2;
`
const Priced_usd = styled.span`
  display:block;
  color:blue;
  font-size:.6em;
`


const InfoCard = (props) => {
  // console.log('props getting passed', props)

  const value = typeof parseInt(props.value) === 'number' && !isNaN(parseInt(props.value))  ? Math.round(parseInt(props.value)) : props.value;

  // console.log('should have only numbers here', value)

  return (
    // <ClassAddCart>


      <div className="custom-card">
          <div className="card-body">
            <img src={props.src} alt={props.src} className = "img-responsive float-right"  />
            <h5 className="card-title"> {props.header} </h5>
          </div>
          <div>
              <h2 className="text-primary">${value}</h2>

              <Priced_usd>
              {props.label}
              </Priced_usd>
              {/* <h6 className="time"> {timeStamp.time} </h6> */}

          </div>
      </div>
    // </ClassAddCart>
  )
};



export default InfoCard;