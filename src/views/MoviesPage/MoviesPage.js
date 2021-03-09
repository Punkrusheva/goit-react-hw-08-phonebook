import React, { Component } from 'react';
import SearchBox from "../../components/SearchBox/SearchBox";
import getQueryParams from "../../utils/getQueryParams";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import API from "../../services/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Load from "../../components/Loader/Loader";

export default class MoviesPage extends Component {
    state = {
        searchResult: [],
        error: null,

    };
    
    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const { query } = getQueryParams(this.props.location.search);
            if (query) {
            const response = await API.showWithQuery(query);
                this.setState({ searchResult: response.data.results })
            }
        }
        catch (error) {
            this.setState({ error: error })
        }
        finally { this.setState({ loading: false }); }
    };

    async componentDidUpdate(prevProps, pervState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);
        
        if (prevQuery !== nextQuery) {
           const response = await API.showWithQuery(nextQuery);
            this.setState({ searchResult: response.data.results });
            if (this.state.searchResult.length === 0) {
                toast.error('Nothing found');
      return
            }
        } 
     }
    
    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        });
    };

    render() {
        const { searchResult, error } = this.state;
        return (
            <>
                <SearchBox onSubmit={this.handleChangeQuery} />
                
                {error && <h1>Error, try again later</h1>}
                {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}
                {searchResult.length > 0 ?
                     <MovieList movies={searchResult} state={{ from: this.props.location }}></MovieList>
                    : null}
                
        <ToastContainer autoClose={2000}/>
            </>    
        )
    }
}