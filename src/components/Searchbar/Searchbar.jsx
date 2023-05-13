import {SearchbarComponent, SearchForm, SearchFormButton, SearchFormLabel, SearchFormInput} from './Searchbar.styled.jsx'

export const Searchbar = ({onSubmit}) => {
  return (
    <SearchbarComponent>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarComponent>
  );
}
