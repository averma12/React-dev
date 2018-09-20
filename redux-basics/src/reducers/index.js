import { combineReducers } from 'redux';
import Booksreducer from './reducer_books';
import ActiveBooks from './reducer_active_book';

const rootReducer = combineReducers({
    books: Booksreducer,
    activeBook : ActiveBooks
});

export default rootReducer;