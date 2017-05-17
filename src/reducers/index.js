//这个文件包含所有的 reducers

import React from 'react';
import BookReducer from './reducer_books';

const rootReducer = combineReducers({
	books: BookReducer
});

export default rootReducer;