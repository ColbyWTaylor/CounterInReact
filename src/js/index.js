//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="bigCounter row" style={{ backgroundColor: "black" }}>
			<div className="col digit col">
				<i className="far fa-clock" />
			</div>
			<div className="five digit col">0</div>
			<div className="four digit col">0</div>
			<div className="three digit col">0</div>
			<div className="two digit col">0</div>
			<div className="one digit col">2</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
