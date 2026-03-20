


import { useEffect,useContext } from 'react';
import * as Linking from "expo-linking";
import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { AuthContext } from './authContext';




const useDeepLink = () => {

const router = useRouter();
const { setcoldId } = useContext(AuthContext)


useEffect(() => {

const handleNavigation = (url: any) => {
if (!url) return;

const parsed = Linking.parse(url);

const segments = parsed.path ? parsed.path.split('/').filter(Boolean) : [];

if (segments[0] === "article") {
const valA = segments[1];
const valB = segments[2] || "null";

setcoldId({ a:valA,b:valB })
router.replace({pathname:'/(protected)/(home)'});
}
};


const handleCold = (url:any) => {
if (!url) return;

const parsed = Linking.parse(url);

const segments = parsed.path ? parsed.path.split('/').filter(Boolean) : [];


if (segments[0] === "article") {
const valA = segments[1];
const valB = segments[2] || "null";

setcoldId({ a:valA,b:valB })

};

}



const linkingSub = Linking.addEventListener('url', (event) => handleNavigation(event.url));


const notificationSub = Notifications.addNotificationResponseReceivedListener(response => {
const url = response.notification.request.content.data?.url;
handleNavigation(url);
});


const checkInitialState = async () => {
const response = await Notifications.getLastNotificationResponseAsync();
const notificationUrl = response?.notification.request.content.data?.url;
if (notificationUrl) handleCold(notificationUrl);

};

checkInitialState();


return () => {
linkingSub.remove();
notificationSub.remove();
};
}, []);
};

export default useDeepLink;