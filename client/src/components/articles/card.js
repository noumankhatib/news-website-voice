import React from "react";
import "./cards.css";
const Card = (props) => {
	return (
		<div className="card text-center shadow">
			<div className="overflow">
				<img
					src={props.imgsrc}
					alt="image 1"
					className="card-img-top"
				></img>
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text text-secondary">
					Peer Electronic Cash System”. \n\nWe see why halving and the
					rise of bitcoin prices will raise transaction fees. This
					takes bitcoin further away from being a peer to peer
					electronic cash system. Marooned bitcoin contributes to this
					movement
				</p>
				<a href="#" className="btn btn-outline">
					GO Anywhere
				</a>
			</div>
		</div>
	);
};

export default Card;
