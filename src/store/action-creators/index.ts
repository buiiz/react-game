import * as OptionsActionCreators from './options';
import * as GameActionCreators from './game';

const ActionCreators = {
  ...OptionsActionCreators,
  ...GameActionCreators,
}

export default ActionCreators;
