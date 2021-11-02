import { useContext } from 'react';
import AppContext from '../context/AppContext';

//Hook use as an alternative for Context.Consumer
const useAppData = () => useContext(AppContext);

export default useAppData;
