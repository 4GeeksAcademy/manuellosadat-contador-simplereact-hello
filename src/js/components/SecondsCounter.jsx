import React from "react";

class SecondsCounter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			seconds: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(prevState => ({
				seconds: prevState.seconds + 1
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const secondsString = this.state.seconds
			.toString()
			.padStart(6, "0");

		return (
			<div className="container-contador">
				<div className="contador">
					<div className="icon">
						<span className="material-symbols-outlined">
							schedule
						</span>
					</div>

					{secondsString.split("").map((digit, index) => (
						<div className="num" key={index}>
							<p>{digit}</p>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default SecondsCounter;
