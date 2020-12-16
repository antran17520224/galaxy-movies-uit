export enum HOME_PAGE_MODAL {
    TRAILER_MODAL = 0,
}

export interface IHomePageState {
    
    isProcessing: boolean;
    isLoading: boolean;
    isShowTrailerModal : boolean;
}

/**
 --- InitialState
 */
export const initialState: IHomePageState = {
    
    isLoading: false,
    isProcessing: false,
    isShowTrailerModal: false,
};
