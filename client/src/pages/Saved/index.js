import React from "react";
import API from "../../utils/API";
import SavedBooks from "../../components/SavedBooks";
class Saved extends React.Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        link: "",
        image:""

    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks().then(res => { console.log(res.data)});
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "", link: "", image: "" }))
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <h1>Saved Books</h1>
                    {this.state.books.map(book => (
                        <div className="row" key={book._id}>
                            <div className="col-md-12 mx-auto">
                                <br />
                                <SavedBooks
                                    title={book.title}
                                    author={book.author}
                                    synopsis={book.synopsis}
                                    id={book._id}
                                    link={book.link}
                                    image={book.image}
                                    deleteBook={this.deleteBook}
                                />

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default Saved;