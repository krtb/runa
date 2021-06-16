import PropTypes from 'prop-types';

export default function Page({children}) {
  return (
    <div>
      <h2>I am the page component</h2>
      <h3>{children}</h3> 
    </div>
  );
}

Page.propTypes = {
  chidlren: PropTypes.any,
}