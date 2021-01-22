export enum TICKETING_MODAL {}

export interface IBill {
    id: string;
    name: string;
    totalPrice: string;
    nameTheater: string;
}

export interface IFood {
    _id: string;
    food_Name: string;
    price: number;
    quantity: number;
    desc: string;
    food_Image: string;
}
/**
 --- InitialState
 */
export interface ITicketingState {
    isProcessing: boolean;
    isLoading: boolean;
    isShowNextButton: boolean;
    seats: string[];
    foodRecords: IFood[];
    priceFood: number;
    linkPayment: string;
    quantityFood: number[];
    isCreateTicketSuccess: boolean;
    idTicket: string;
    activeStep : number;
    ticketsByUserId : any[];
}
export const initialState: ITicketingState = {
    isLoading: false,
    isProcessing: false,
    isShowNextButton: false,
    seats: [],
    foodRecords: [],
    priceFood: 0,
    linkPayment: '',
    quantityFood: [],
    isCreateTicketSuccess: false,
    idTicket: '',
    activeStep: 0,
    ticketsByUserId : []
};
