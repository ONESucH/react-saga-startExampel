import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import * as actions from '../../models/main/actions';
import index from './index';

const mapStateToProps = (state) => ({
  ...state.main
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(index);