import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
{
        authors{
                id
                name
        }
}
`
const getBooksQuery = gql`
{
        books{
                id
                name
        }
}
`

export {getAuthorsQuery, getBooksQuery};