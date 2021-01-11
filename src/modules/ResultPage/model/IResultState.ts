export interface IFood {
    _id: string;
   
}
/**
 --- InitialState
 */
export interface IResultState {
    isProcessing: boolean;
    isLoading: boolean;
  

}
export const initialState: IResultState = {
    isLoading: false,
    isProcessing: false,
   
};
