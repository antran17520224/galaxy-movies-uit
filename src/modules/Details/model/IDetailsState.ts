export interface IDetailsState {
    isShowTrailer : boolean;
    isProcessing: boolean;
    isLoading: boolean;
}

export enum DETAILS_MODAL{
    TRAILER_MODAL = 0,
}

/**
 --- InitialState
 */
export const initialState: IDetailsState = {
    isShowTrailer : false,
    isLoading: false,
    isProcessing: false,
};
