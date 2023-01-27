import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWord } from '../redux/slices/ItemSlice';
import Form from './Form';

function FetchData() {
	const word = useSelector(state => state.ItemSlice.word);
	const dispatch = useDispatch();

	async function fetch() {
		dispatch(fetchWord(word));
	}
	useEffect(() => {
		fetch();
		console.log(word)
	}, [word]);
	return (
		<div>
			<Form />
		</div>
	);
}

export default FetchData;