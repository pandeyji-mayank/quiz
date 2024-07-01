import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const { user } = useContext(AuthContext);
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 user ? (
//                     <Component {...props} />
//                 ) : (
//                     // <Redirect to="/login" />
//                     <Navigate to="/login" />
//                 )
//             }
//         />
//     );
// };

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={user ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
