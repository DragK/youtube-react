import {toggle} from './../actions';
import {connect} from 'react-redux';
import SearchItem from './../components/SearchItem';

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggle: id => dispatch(toggle(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);