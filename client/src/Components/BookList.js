import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
{
        books{
                id
                name
        }
}
`

function BookList(props) {
        const data = props.data;
        function displayBooks() {
                if(data.loading) {
                        return (<div>Loading</div>);
                } else{
                        return data.books.map(book => {
                                return (
                                        <li key={book.id}>{book.name}</li>
                                )
                        });
                }
        }
        return (
                <div>
                        <ul>
                                {displayBooks()}
                        </ul>
                </div>
        )
}

export default graphql(getBooksQuery)(BookList);
