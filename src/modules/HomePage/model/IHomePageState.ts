import { IPermission } from "../../../common";


export interface IHomePageState {
    
    isProcessing: boolean;
    isLoading: boolean;
}

/**
 --- InitialState
 */
export const initialState: IHomePageState = {
    
    isLoading: false,
    isProcessing: false,
};
