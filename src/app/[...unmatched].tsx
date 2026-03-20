
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import { AuthContext } from '../utils/authContext';
import React, { useContext, useEffect } from 'react';




const Unmatch = () => {

const router = useRouter();
const { isLoggedIn, setcoldId } = useContext(AuthContext);
const obj = useLocalSearchParams();




const page = obj.unmatched[1]

useEffect(() => {

if (isLoggedIn === true) {

setcoldId({ a:page, b:"null" });

router.replace({pathname:'/(protected)/(home)'});

}else if (isLoggedIn === false){

setcoldId({ a:page, b:"null" });

}

}, [isLoggedIn, page]); 


if (isLoggedIn === false) {

return <Redirect href='../prelog' />;
}


return null;
};

export default Unmatch;