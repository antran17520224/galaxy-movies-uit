import React from 'react';


interface IProps { }

const TicketIcon: React.FC<IProps> = (props) => {
    return (

        <i className="fas fa-ticket-alt" style={{
            transform: 'rotateZ(-45deg)'
        }}></i>
    )
}
export default TicketIcon;