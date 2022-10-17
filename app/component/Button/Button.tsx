import React, { useState } from "react";

const Button = () => {
	const [active, setActive] = useState(false);
	return (
		<div className="body">
			<button className="button">
				BUTTON
				<div
					onClick={() => setActive(!active)}
					className={`circle ${active ? `circle-active` : null}`}
				>
					<div className={`circle2 ${active ? `circle2-active` : null}`}>
						<div className={`dot ${active ? `dot-active` : null}`}></div>
					</div>
				</div>
			</button>
		</div>
	);
};

export default Button;
