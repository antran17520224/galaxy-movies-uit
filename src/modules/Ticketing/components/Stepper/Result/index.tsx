import React from 'react';
import { LoadingCustom } from '../../../../../components';
import { ITicketingProps } from '../../../model/ITicketingProps';
import './Result.scss';

export const ResultPayment: React.FC<ITicketingProps> = (props) => {
	const { ticketsByUserId, linkPayment } = props.store.TicketingPage;

	const [callOneTime, setCall] = React.useState(true);
	const [getTicket, setGetTicket] = React.useState(1);
	const [loading, setLoading] = React.useState(true);
	// default === 1, success === 2, fail === 3
	React.useEffect(() => {
		if (getTicket === 1 && callOneTime && linkPayment) {
			props.actions.getTicketByIdUser();
			window.open(`${linkPayment}`);
			setCall(false);
		}
		setTimeout(() => {
			setGetTicket(3);
		}, 120 * 1000);
		const count = ticketsByUserId.length;
		let check = ticketsByUserId.length;
		if (ticketsByUserId) {
			ticketsByUserId.map((ticket, index) => {
				if (ticket.status === 'waiting') {
					check = check - 1;
				}
				if (count - 1 === index) {
					if (check === ticketsByUserId.length) {
						setGetTicket(2);
						setLoading(false);
					} else {
						setTimeout(() => {
							props.actions.getTicketByIdUser();
						}, 10000);
					}
				}
			});
		}
	}, [ticketsByUserId, getTicket, linkPayment]);
	return (
		<React.Fragment>
			{getTicket === 1 ? (
				<h1
					style={{
						textAlign: 'center',
						color: '#47c7c5',
					}}
				>
					Đang xử lý thanh toán ...
				</h1>
			) : getTicket === 2 ? (
				<h1
					style={{
						textAlign: 'center',
						color: '#47c7c5',
					}}
				>
					Payment Successful !
				</h1>
			) : (
				<h1
					style={{
						textAlign: 'center',
						color: '#b02529',
					}}
				>
					Payment Fail !!!
				</h1>
			)}
		</React.Fragment>
	);
};
