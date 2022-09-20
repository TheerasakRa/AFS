import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='centers'>
		<div className='mt-5 mb-2'>
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em ' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
			</div>
		</div>
		</div>
	);
};

export default Search;
