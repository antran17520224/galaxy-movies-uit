

export enum DETAILS_MODAL{
    TRAILER_MODAL = 0,
}
export interface IDetailsState {
    isShowTrailer : boolean;
    isProcessing: boolean;
    isLoading: boolean;
    codeTrailer : string;
}
/**
 --- InitialState
 */
export const initialState: IDetailsState = {
    isShowTrailer : false,
    isLoading: false,
    isProcessing: false,
    codeTrailer : null,
};
