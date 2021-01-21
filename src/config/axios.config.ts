import axios, { AxiosRequestConfig } from 'axios';

export const contentType = {
	json: 'application/json',
	formData: 'multipart/form-data',
};

const callAPI = (
	endpoint: string,
	method: AxiosRequestConfig['method'],
	data: any,
	formData = false,
	noneHeader = false,
	loadJson = false
) => {
	const accessToken = localStorage.getItem('accessToken');
	const baseUrl = loadJson ? endpoint : `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
	const headers = {
		Authorization: noneHeader ? '' : `Bearer ${accessToken ? accessToken : ''}`,
		'Content-Type': formData ? contentType.formData : contentType.json
		// 'Access-Control-Allow-Origin': '*',
	};

	const options: AxiosRequestConfig = {
		method,
		url: baseUrl,
		headers,
		data: method !== 'GET' ? data : null,
	};

	return axios(options).catch((error: any) => {
		return new Promise((resolve, eject) => {
			return resolve(error.response);
		});
	});
};

export const request = async (
	endpoint: string,
	method: AxiosRequestConfig['method'],
	data: any,
	formData = false,
	noneHeader = false,
	loadJson = false
) => {
	try {
		const res = (await callAPI(endpoint, method, data, formData, noneHeader, loadJson)) as any;
		const { status } = res;
		if (status === 401) {
			localStorage.clear();
			window.location.reload();
		} else {
			return {
				data: res.data,
				status,
			};
		}
	} catch (error) {
		// tslint:disable-next-line: no-shadowed-variable
		const { status, data } = error.response;
		return {
			status,
			data,
		};
	}
};
