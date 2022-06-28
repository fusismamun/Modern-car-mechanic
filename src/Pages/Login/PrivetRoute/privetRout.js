import { Spinner } from 'react-bootstrap';
import {Outlet,Navigate} from 'react-router-dom'; 
import UseAuth from '../../../hooks/UseAuth';

const privetRout = () => {
    const {user, isLoading} = UseAuth();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        user.email ? <Outlet /> : <Navigate to ="/login" />
    )
};

export default privetRout;