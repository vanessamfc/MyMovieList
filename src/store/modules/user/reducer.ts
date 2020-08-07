import produce from 'immer';
import { Movie } from '../../../Interfaces';

const INITIAL_STATE = {
  token: '',
};

interface UserState {
  token: string;
}

interface Action {
  type: string;
  payload: {
    token: string;
  };
}

export default function user(state: UserState = INITIAL_STATE, action: Action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        break;
      }
      case '@user/LOGOUT_SUCCESS':
        {
          draft.token = '';
        }
        break;

      default:
    }
  });
}
