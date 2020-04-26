import React from "react";
import API from "../../utils/API";
import SearchResult from "../../components/SearchResult";


class Search extends React.Component {

    state = {
        search: "",
        books: [],
        title: "",
        author: "",
        synopsis: "",
        link: "",
        image:"",
        error: ""

    };

    componentDidMount() {
        this.searchBooks();
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    saveBook = data => {
        API.save({
            title: data.title,
            author: data.author,
            synopsis: data.synopsis,
            link: data.link,
            image: data.image
        })
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
            })
            .catch(err => console.log(err.response));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ books: res.data.items });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    addImageLinkToBooks(){
        this.state.books.map(book => {
            if (book.volumeInfo.imageLinks !== undefined) {
                book.image = book.volumeInfo.imageLinks.thumbnail 
            }
            return book
        })
        return this.state.books
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <h1>Search Books by Title</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="titleSearch" placeholder="Title" onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                {this.addImageLinkToBooks().map(books => (
                    <div className="row" key={books.id}>
                        <div className="col-md-6 mx-auto">
                            <br />
                            <SearchResult
                                title={books.volumeInfo.title}
                                author={books.volumeInfo.authors}
                                key={books.id}
                                id={books.id}
                                synopsis={books.volumeInfo.description}
                                link={books.volumeInfo.previewLink}
                                image={books.image}
                                saveBook={this.saveBook}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Search;