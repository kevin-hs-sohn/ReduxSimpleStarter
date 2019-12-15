import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch);
    // The purpose of bindActionCreators and Dispatch is specifically to take  what gets
    // returned from selectBook and make sure that it flows through all the reducers.
}

/*
// connect -> "Take this component, take this 'mapStateToProps' function, and return a 'Container'.
// 1. Whenever the application state changes, the container will be instantly rerendered.
// 2. Whenever the application state changes, the object returned in the state function will be assigned as the props of the component.
*/
/*
Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
Make it available as a prop.
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);