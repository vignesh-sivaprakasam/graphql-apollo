import React from 'react';
import {graphql} from 'react-apollo';

import {getAuthorsQuery} from './../queries/queries'; 

function AddBook(props) {
        console.log("Add Books: ", props);
        const data = props.data;
        function displayAuthor(){
                if(data.loading){
                        return (<option disabled>Loading Authors...</option>)
                } else {
                        return data.authors.map(author => {
                                return (
                                        <option key={author.id} value={author.id}>{author.name}</option>
                                )
                        });
                }
        }

        return (
                <form id="add-book">
                        <div className="field">
                                <label>Book Name:</label>
                                <input type="text"></input>
                        </div>
                        <div className="field">
                                <label>Genre:</label>
                                <input type="text"></input>
                        </div>
                        <div className="field">
                                <label>Author:</label>
                                <select>
                                        <option>Select author</option>
                                        {displayAuthor()}
                                </select>
                        </div>
                        <button >+</button>
                </form>
        )
}

export default graphql(getAuthorsQuery)(AddBook);
