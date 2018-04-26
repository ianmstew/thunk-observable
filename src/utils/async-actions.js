export function StartAsyncAction(action) {
  return {
    type: `${action.type}_STARTED`,
    sourceType: action.type,
    meta: {
      promise: action.promise
    }
  };
}

export async function ResultAsyncAction(startAction) {
  try {
    const results = await startAction.meta.promise;
    return {
      type: `${startAction.sourceType}_SUCCEEDED`,
      payload: results
    };
  } catch (error) {
    return {
      type: `${startAction.sourceType}_FAILED`,
      meta: {
        error
      }
    };
  }
}
