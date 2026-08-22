import React from 'react';
import UserContext from '../context/UserContext';
import useFetch from '../hooks/useFetch';

function UserProvider(props) {
    const {data ,isLoading} = useFetch();
    
    const {children} = props ;

    return (
        <div>

            <UserContext.Provider value={{data ,isLoading}}>
                {children}
            </UserContext.Provider>

        </div>
    )
}

export default UserProvider
