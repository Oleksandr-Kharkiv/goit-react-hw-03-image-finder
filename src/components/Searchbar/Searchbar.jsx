import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from "react-icons/fa";
import {
  SearchbarComponent,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled.jsx';

export class Searchbar extends Component {
  state = {
    inputValue: null,
  };

  handleSearchParamChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.inputValue.trim() === '') {
      return toast('Enter your search query')
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <SearchbarComponent>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
          <FaSearch size='20px' color='orange'/>
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchParamChange}
          />
        </SearchForm>
      </SearchbarComponent>
    );
  }
}
