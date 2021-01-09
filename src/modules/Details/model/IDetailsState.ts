export enum DETAILS_MODAL {
    TRAILER_MODAL = 0,
    MAP_MODAL = 1
}

export interface ISession {
    _id: string;
    movie_id: {
        _id: string;
        name: string;
    };
    cinema_id: {
        _id: string;
        cinema_Name: string;
        address: string;
    };
    theaters_id: {
        _id: string;
        theaters_Name: string;
    };
    price: number;
    time: string;
    date: string;
}
export interface IDetailsState {
    isShowTrailer: boolean;
    isProcessing: boolean;
    isLoading: boolean;
    codeTrailer: string;
    sessionRecords: ISession[];
    toggleMapModal: boolean;
    coordinate: {
        long: number;
        lat: number;
    };
    currentSession: ISession;
}
/**
 --- InitialState
 */
export const initialState: IDetailsState = {
    isShowTrailer: false,
    isLoading: false,
    isProcessing: false,
    codeTrailer: null,
    sessionRecords: [],
    toggleMapModal: false,
    coordinate: {
        long: 0,
        lat: 0
    },
    currentSession: null
};
