import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    
    renderList() {
        return this.props.books.map(book => {
            return (
                <li className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

//the "GLUE" between React & Redux
//whenever 'application STATE' changes, container will re-render with new list of books (state.books)
function mapStateToProps(state) {
    //what is returned will show up as "props" inside of book-list;
    return {
        books: state.books
    };
}

//takes in a function & component --> container (a component that is aware of state contained in Redux) 
export default connect(mapStateToProps)(BookList)