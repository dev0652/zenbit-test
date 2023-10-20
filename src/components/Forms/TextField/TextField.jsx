import PropTypes from 'prop-types';
import { Field, Label } from './TextField.styled';

export const TextField = props => {
  const { name, type = 'text', label = null } = props;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <Label>
        {label || capitalizedName}
        <Field
          type={type}
          name={name}
          id={name}
          placeholder={capitalizedName}
          required
          {...props}
        />
      </Label>
    </div>
  );
};

// ****** PropTypes *******************************

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
};
