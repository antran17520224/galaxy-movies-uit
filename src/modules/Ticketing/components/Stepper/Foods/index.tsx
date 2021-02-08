import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Food.scss';
import { ITicketingProps } from '../../../model/ITicketingProps';
import { Grid } from '@material-ui/core';

export const Foods: React.FC<ITicketingProps> = (props) => {
	const { foodRecords } = props.store.TicketingPage;
	const [arrayQuantityFood, setArrayQuantityFood] = React.useState<number[]>([]);
	const [currentPriceFood, setCurrentPriceFood] = React.useState<number>(0);
	const [changeArrayQuantity, setChangeArrayQuantity] = React.useState(false);

	React.useEffect(() => {
		if (foodRecords.length === 0) {
			props.actions.getAllFoods();
			window.scroll(0, 0);
		}
		arrayQuantityFood.length === 0 &&
			foodRecords.forEach((item) => {
				arrayQuantityFood.push(0);
				setArrayQuantityFood(arrayQuantityFood);
				setChangeArrayQuantity(true);
			});
	}, [arrayQuantityFood.length, foodRecords.length, changeArrayQuantity]);

	const handleIncreaseAmount = (index: number) => {
		if (arrayQuantityFood[index] < foodRecords[index].quantity) {
			arrayQuantityFood[index]++;
			let tempPrice = currentPriceFood;
			tempPrice += foodRecords[index].price;
			setCurrentPriceFood(tempPrice);
			props.actions.handleChooseFoods({
				priceFood: tempPrice,
				arrayQuantity: arrayQuantityFood,
			});
			setArrayQuantityFood(arrayQuantityFood);
			setChangeArrayQuantity(!changeArrayQuantity);
		}
	};
	const handleDecreaseAmount = (index: number) => {
		if (
			arrayQuantityFood[index] <= foodRecords[index].quantity &&
			arrayQuantityFood[index] > 0
		) {
			arrayQuantityFood[index]--;
			let tempPrice = currentPriceFood;
			tempPrice -= foodRecords[index].price;
			setCurrentPriceFood(tempPrice);
			props.actions.handleChooseFoods({
				priceFood: tempPrice,
				arrayQuantity: arrayQuantityFood,
			});
			setArrayQuantityFood(arrayQuantityFood);
			setChangeArrayQuantity(!changeArrayQuantity);
		}
	};
	return (
		<React.Fragment>
			<div className="wrapper-foods-page">
				<Grid
					container
					style={{
						alignItems: 'flex-end',
					}}
				>
					{foodRecords &&
						foodRecords.map((food, index) => {
							return (
								<Grid item xs={3} key={index}>
									<div className="wrapper-foods">
										<div className="foods">
											<div className="img-food">
												<img src={food.food_Image} alt="foods" />
											</div>
											<div className="wrapper-foods-name">
												<h2 className="name">{food.food_Name}</h2>
												<div className="description">{food.desc}</div>
												<div className="note">
													***Nhận trong ngày xem phim***
												</div>
												<div className="price">
													Giá :{' '}
													<span>
														{' '}
														{new Intl.NumberFormat().format(
															food.price
														)}{' '}
														đ
													</span>
												</div>
											</div>
											<div className="wrapper-button">
												<span className="sub">
													<RemoveIcon
														onClick={() => handleDecreaseAmount(index)}
													/>
												</span>
												<span className="amount">
													{arrayQuantityFood[index]}
												</span>
												<span className="add">
													<AddIcon
														onClick={() => handleIncreaseAmount(index)}
													/>
												</span>
											</div>
										</div>
									</div>
								</Grid>
							);
						})}
				</Grid>
			</div>
		</React.Fragment>
	);
};
