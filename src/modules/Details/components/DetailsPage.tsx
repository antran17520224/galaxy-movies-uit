import { Button, Grid } from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import moment from 'moment';
import React, { useRef } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { LoadingCustom } from '../../../components';
import TicketIcon from '../../../components/Icons/TicketIcon';
import { IDetailsProps } from '../model/IDetailsProps';
import { DETAILS_MODAL } from '../model/IDetailsState';
import './Details.scss';
import { ModalMapCinema } from './ModalMapCinema';
import { ShowTimes } from './ShowTimes';
import { TrailerModal } from './Trailer';
import LocationOnIcon from '@material-ui/icons/LocationOn';

interface IProps extends RouteComponentProps, IDetailsProps {}

const DetailsPage: React.FC<IProps> = (props) => {
	const scrollToRef = (ref: any) =>
		window.scrollTo({
			behavior: 'smooth',
			top: ref.current.offsetTop,
			left: 0,
		});

	const myRef: any = useRef();
	const executeScroll = () => scrollToRef(myRef);
	const history = useHistory();
	const { currentMovie } = props.store.HomePage;
	const { isProcessing } = props.store.DetailPage;
	React.useEffect(() => {
		window.scrollTo(0, 0);
		if (currentMovie === null) {
			history.push('/');
		}
		return () => {
			props.actions.handleClearSessionRecords();
		};
	}, []);

	return (
		<React.Fragment>
			<LoadingCustom spinning={isProcessing} opacity={1} text={'Loading'} />
			{currentMovie && (
				<>
					<div className="wrapper-details-page">
						<div className="wrapper-details">
							<Grid container className="wrapper-grid">
								<Grid item lg={3} className="grid-image">
									<div className="wrapper-details-image">
										<img src={currentMovie.smallImage} alt="phim" />
									</div>
								</Grid>
								<Grid item lg={6} className="grid-description">
									<div className="wrapper-details-description">
										<div id="#name-movies"></div>
										<h2>{currentMovie.name}</h2>
										<p>{currentMovie.description}</p>
										<div className="film-info">
											<ul>
												<li className="classify">
													<div>Phân loại</div>
													<div className="classify-details">
														C{currentMovie.maturity} - Phim dành cho
														khán giả từ {currentMovie.maturity} tuổi trở
														lên
													</div>
												</li>
												<li className="director">
													<div>Đạo diễn</div>
													<div>{currentMovie.directors}</div>
												</li>
												<li>
													<div>Diễn viên</div>
													<div className="cast">
														{currentMovie.cast},...
													</div>
												</li>
												<li className="kind">
													<div>Thể loại</div>
													<div>{currentMovie.genre}</div>
												</li>

												<li className="launch">
													<div>Khởi chiếu</div>
													<div>
														{moment(currentMovie.launchDate).format(
															'L'
														)}
													</div>
												</li>
												<li className="time">
													<div>Thời lượng</div>
													<div>{currentMovie.time} phút</div>
												</li>
												<li className="language">
													<div>Ngôn ngữ</div>
													<div>Phụ đề tiếng Việt</div>
												</li>
											</ul>
										</div>
										<div className="wrapper-button">
											<Button
												variant="contained"
												className="button-booking"
												onClick={executeScroll}
											>
												Mua vé ngay
												<span
													style={{
														marginLeft: '10px',
													}}
												>
													<TicketIcon />
												</span>
											</Button>
											<Button
												variant="contained"
												className="button-trailer"
												onClick={() =>
													props.actions.toggleModal({
														type: DETAILS_MODAL.TRAILER_MODAL,
														codeTrailer: currentMovie.trailer,
													})
												}
											>
												Trailer
												<TheatersIcon
													style={{
														marginLeft: '5px',
														fontSize: '18px',
													}}
												/>
											</Button>
										</div>
									</div>
								</Grid>
							</Grid>
						</div>
					</div>
					<TrailerModal {...props} />
					<div ref={myRef}></div>
					<ShowTimes {...props} />
					<Button
						variant="contained"
						className="button-location"
						onClick={() => {
							props.actions.toggleModal({
								type: DETAILS_MODAL.MAP_MODAL,
								coordinate: {
									lat: 10.884559,
									lng: 107.174659,
								},
							});
						}}
					>
						<LocationOnIcon /> Xem vị trí
					</Button>
					<ModalMapCinema {...props} />
				</>
			)}
		</React.Fragment>
	);
};

export default DetailsPage;
