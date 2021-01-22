export enum DETAILS_MODAL {
	TRAILER_MODAL = 0,
	MAP_MODAL = 1,
}

interface ISeat {
	isBooked: number;
	isVIP: false;
	_id: string;
	code: string;
}
export interface ISession {
	_id: string;
	movie_id: {
		_id: string;
		name: string;
		smallImage: string;
	};
	cinema_id: {
		_id: string;
		cinema_Name: string;
		address: string;
		lng: number;
		lat: number;
	};
	theaters_id: {
		_id: string;
		theaters_Name: string;
		seats: ISeat[];
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
		lng: number;
		lat: number;
	};
	currentSession: ISession | null;
}
/**
 --- InitialState
 */
export const initialState: IDetailsState = {
	isShowTrailer: false,
	isLoading: false,
	isProcessing: false,
	codeTrailer: '',
	sessionRecords: [],
	toggleMapModal: false,
	coordinate: {
		lng: 0,
		lat: 0,
	},
	currentSession: null
};
