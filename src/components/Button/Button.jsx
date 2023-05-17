import { ButtonComponent } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({onClick}) => {
  return <ButtonComponent type="button" onClick={onClick}>Load more</ButtonComponent>;
};


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};