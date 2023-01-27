import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeWord } from '../redux/slices/ItemSlice';
import { fetchWord } from '../redux/slices/ItemSlice';

function Form() {
	const item = useSelector(state => state.ItemSlice.item);
	const word = useSelector(state => state.ItemSlice.word);
	console.log(item)
	async function fetch() {
		dispatch(fetchWord(word));
	}
	const dispatch = useDispatch();
	const valueWord = useSelector(state => state.ItemSlice.word);
	const searching = (e) => {
		e.preventDefault();
		fetch();
	}
	return (
		<div className="app">
			<main className="main">
				<h1>Your best <span>Dictionary</span></h1>
				<form className="form">
					<div className="form-group">
						<input
							type="text"
							placeholder="Type a word..."
							name="word"
							id="word-input"
							value={valueWord}
							onChange={(e) => dispatch(changeWord((e.target.value)))}
						/>
					</div>
					<button onClick={(e) => searching(e)}>Search</button>
				</form>

				<div className="error"></div>
				<div className="results">
					<div className="results-info">
						<div className="results-word">

						</div>

						<div className="results-sound">
							<img src="./assets/images/sound.png" alt="" />
						</div>
					</div>

					<div className="results-list"></div>
				</div>
			</main>
		</div>
	);
}

export default Form;