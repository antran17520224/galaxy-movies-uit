export enum HOME_PAGE_MODAL {
    TRAILER_MODAL = 0
}
export interface IMovie {
    key?: number;
    name: string;
    cast: string;
    genre: string[];
    launchDate: string;
    status: string;
    _id?: string;
    directors: string;
    description: string;
    time: string;
    category_id?: string;
    maturity: string;
    trailer: string;
    smallImage: string;
    bigImage: string;
}
export interface IHomePageState {
    codeTrailer: string;
    isProcessing: boolean;
    isLoading: boolean;
    isShowTrailerModal: boolean;
    movieRecords: IMovie[];
    movieBanner: IMovie | null;
    movieShowing: IMovie[];
    movieComingSoon: IMovie[];
    currentMovie: IMovie | null;
}

/**
 --- InitialState
 */
export const initialState: IHomePageState = {
    codeTrailer: '',
    currentMovie: null,
    movieRecords: [],
    isLoading: false,
    isProcessing: false,
    isShowTrailerModal: false,
    movieShowing : [],
    movieComingSoon : [],
    movieBanner: null
};
