import ShowToastMessage from '../../components/ShowToastMessage';

export const setEnteredQuery = (query) => (dispatch) => {
  try {
    dispatch({ type: 'QUERY', payload: query });
  } catch (error) {
    ShowToastMessage('error', error.message);
  }
};
