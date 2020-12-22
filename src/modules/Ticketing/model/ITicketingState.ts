export enum TICKETING_MODAL{
}

export interface IBill {
    id: string,
    name : string,
    totalPrice : string,
    nameTheater : string,

}
export interface ITicketingState {
    isProcessing: boolean;
    isLoading: boolean;
    isShowNextButton: boolean;
    currentPriceOfMovieBeingBooked : number;
}

/**
 --- InitialState
 */
export const initialState: ITicketingState = {
    isLoading: false,
    isProcessing: false,
    isShowNextButton : false,
    currentPriceOfMovieBeingBooked : 0,
};
