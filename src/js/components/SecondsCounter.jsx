import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prev => prev + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const secondsString = seconds.toString().padStart(6, "0");

	return (
		<div className="container-contador">
			<div className="contador">
				<div className="icon">
					<span className="material-symbols-outlined">schedule</span>
				</div>

				{secondsString.split("").map((digit, index) => (
					<div className="num" key={index}>
						<p>{digit}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SecondsCounter;
