export interface ITicketingState {
    isProcessing: boolean;
    isLoading: boolean;
}

export enum TICKETING_MODAL{
}

/**
 --- InitialState
 */
export const initialState: ITicketingState = {
    isLoading: false,
    isProcessing: false,
};
