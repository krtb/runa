import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({children}) {
  return (
    <div>
    <Header/>
      <h2>I am the PAGE component</h2>
      <h3>{children}</h3> 
    </div>
  );
}

Page.propTypes = {
  chidlren: PropTypes.any,
}