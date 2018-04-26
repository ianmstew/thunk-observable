import loading from 'constants/loading';

export default function AsyncReducer(actionType, property) {
  const startedType = `${actionType}_STARTED`;
  const succeededType = `${actionType}_SUCCEEDED`;
  const failedType = `${actionType}_FAILED`;

  return (state, action) => {
    if (action.type === startedType) {
      return {
        ...state,
        [property]: {
          ...state[property],
          loading: loading.STARTED
        }
      };
    } else if (action.type === succeededType) {
      return {
        ...state,
        [property]: {
          ...state[property],
          loading: loading.SUCCEEDED,
          data: action.payload
        }
      };
    } else if (action.type === failedType) {
      return {
        ...state,
        [property]: {
          ...state[property],
          loading: loading.FAILED
        }
      };
    }

    return state;
  };
}
