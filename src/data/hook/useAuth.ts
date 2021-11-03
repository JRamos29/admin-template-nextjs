import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

//Hook use as an alternative for Context.Consumer
const useAuth = () => useContext(AuthContext);

export default useAuth;
