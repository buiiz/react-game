import * as CounterActionCreators from './counter';
import * as OptionsActionCreators from './options';

const ActionCreators = {
  ...CounterActionCreators,
  ...OptionsActionCreators,
}

export default ActionCreators;
