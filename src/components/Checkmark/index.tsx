import * as React from "react";
interface IProps {
	message: string;
}

export const CheckMark: React.FC<IProps> = ({ message }: IProps) => (
	<React.Fragment>
		<div className="success-checkmark">
			<div className="check-icon">
				<span className="icon-line line-tip"></span>
				<span className="icon-line line-long"></span>
				<div className="icon-circle"></div>
				<div className="icon-fix"></div>
			</div>
		</div>
		<p>{message}</p>
	</React.Fragment>
);