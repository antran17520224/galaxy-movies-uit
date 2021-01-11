export interface IFood {
    _id: string;
   
}
/**
 --- InitialState
 */
export interface IUserState {
    isProcessing: boolean;
    isLoading: boolean;
  

}
export const initialState: IUserState = {
    isLoading: false,
    isProcessing: false,
   
};
