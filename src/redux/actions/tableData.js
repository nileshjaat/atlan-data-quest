import ShowToastMessage from '../../components/ShowToastMessage';
import DATA from '../../data/dummyData.json';

// query: SELECT * from users;
export const fetchQuery1Data = () => (dispatch) => {
  try {
    dispatch({ type: 'FETCH_Q1_DATA', payload: DATA });
  } catch (error) {
    ShowToastMessage('error', error.message);
  }
};

// query: SELECT * from users where gender="Male";
export const fetchQuery2Data = () => (dispatch) => {
  try {
    const maleOnlyData = DATA.filter((user) => user.gender === 'Male');
    dispatch({ type: 'FETCH_Q2_DATA', payload: maleOnlyData });
  } catch (error) {
    ShowToastMessage('error', error.message);
  }
};

// query: SELECT * from users where gender="Female";
export const fetchQuery3Data = () => (dispatch) => {
  try {
    const femaleOnlyData = DATA.filter((user) => user.gender === 'Female');
    dispatch({ type: 'FETCH_Q3_DATA', payload: femaleOnlyData });
  } catch (error) {
    ShowToastMessage('error', error.message);
  }
};

// query: SELECT * from users where id BETWEEN 250 AND 475;
export const fetchQuery4Data = () => (dispatch) => {
  try {
    const requiredData = DATA.filter(
      (user) => user.id >= 250 && user.id <= 475
    );
    dispatch({ type: 'FETCH_Q4_DATA', payload: requiredData });
  } catch (error) {
    ShowToastMessage('error', error.message);
  }
};
