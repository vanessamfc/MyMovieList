import produce from 'immer';
import mmlApi from '../../../service/api';

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
    user: {
      token: string;
    };
  };
}

export default function user(state: UserState = INITIAL_STATE, action: Action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SIGN_IN_SUCCESS': {
        mmlApi.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
        draft.token = action.payload.token;
        break;
      }
      case '@user/LOGOUT_SUCCESS':
        {
          mmlApi.defaults.headers.Authorization = ``;
          draft.token = '';
        }
        break;
      case 'persist/REHYDRATE':
        {
          if (action.payload) {
            mmlApi.defaults.headers.Authorization = `Bearer ${action.payload.user.token}`;
          }
        }
        break;

      default:
    }
  });
}
