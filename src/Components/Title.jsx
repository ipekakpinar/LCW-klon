import PropTypes from 'prop-types';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-blue-500">
        {text1} <span className="text-blue-700 font-medium">{text2}</span>
      </p>
      
    </div>
  );
};

Title.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
};
export default Title;
