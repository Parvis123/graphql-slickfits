import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h1>I am a page component</h1>
      {children}
      {cool}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
  cool: PropTypes.string,
};
