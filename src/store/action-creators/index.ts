import * as CounterActionCreators from './counter';
import * as OptionsActionCreators from './options';
import * as GameActionCreators from './game';

const ActionCreators = {
  ...CounterActionCreators,
  ...OptionsActionCreators,
  ...GameActionCreators,
}

export default ActionCreators;
