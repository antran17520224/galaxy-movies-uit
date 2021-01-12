import React from "react";
import { LoadingResult } from "../../../../../components";
import { ITicketingProps } from "../../../model/ITicketingProps";
import "./Result.scss";

interface IProps extends ITicketingProps {}

export const ResultPayment: React.FC<IProps> = props => {
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
        let count = ticketsByUserId.length;
        let check = ticketsByUserId.length;
        if (ticketsByUserId) {
            ticketsByUserId.map((ticket, index) => {
                console.log("ticket.status", ticket.status === "success");
                if (ticket.status === "waiting") {
                    check = check - 1;
                }
                console.log("count", count);
                console.log("");
                if (count - 1 === index) {
                    console.log("count - 1 === ticket");
                    if (check === ticketsByUserId.length) {
                        console.log("not cal");
                        setGetTicket(2);
                        setLoading(false);
                    } else {
                        console.log("call");
                        setTimeout(() => {
                            props.actions.getTicketByIdUser();
                        }, 10000);
                    }
                }
            });
        }
    }, [ticketsByUserId, getTicket, linkPayment]);
    console.log("getTicket", getTicket);
    return (
        <React.Fragment>
            {getTicket === 1 ? (
                <LoadingResult spinning={loading} />
            ) : getTicket === 2 ? (
                <h1
                    style={{
                        textAlign: "center",
                        color: "#47c7c5"
                    }}
                >
                    Payment Successful !
                </h1>
            ) : (
                <h1
                    style={{
                        textAlign: "center",
                        color: "#b02529"
                    }}
                >
                    Payment Fail !!!
                </h1>
            )}
        </React.Fragment>
    );
};
