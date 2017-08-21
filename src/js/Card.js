import React from 'react';

const Card = ({style, img, children}) => {
	const imgJSX = (img ? (
		<div className="card-img">
			<img className="img-fluid" src={img} alt="" />
		</div>
	) : null);
	return (
		<div className='card' style={style} >
			{imgJSX}
			{children}
		</div>
	);
};

export default Card;