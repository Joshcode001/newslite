


import { useEffect,useContext } from 'react';
import * as Linking from "expo-linking";
import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { AuthContext } from './authContext';




const useDeepLink = () => {

const router = useRouter();
const { setcoldId } = useContext(AuthContext)


useEffect(() => {
// 1. Unified navigation logic
const handleNavigation = (url:any) => {
if (!url) return;

const { path } = Linking.parse(url);
if (!path) return;

if (path.startsWith("article/")) {
const id = path.split("/")[1];
router.push({
pathname: '/(protected)/(home)/[pagexi]',
params: { pagexi: id }
});
}
};


const handleCold = (url:any) => {
if (!url) return;

const { path } = Linking.parse(url);
if (!path) return;

if (path.startsWith("article/")) {
const id = path.split("/")[1];
setcoldId(id)
}
};

// 2. Handle standard Deep Links (myapp://...)
const linkingSub = Linking.addEventListener('url', (event) => handleNavigation(event.url));

// 3. Handle Push Notifications (while app is open)
const notificationSub = Notifications.addNotificationResponseReceivedListener(response => {
const url = response.notification.request.content.data?.url;
handleNavigation(url);
});

// 4. Handle Cold Starts (app was closed)
const checkInitialState = async () => {
// Check if opened via Deep Link
const initialUrl = await Linking.getInitialURL();
if (initialUrl) return handleCold(initialUrl);

// Check if opened via Push Notification
const response = await Notifications.getLastNotificationResponseAsync();
const notificationUrl = response?.notification.request.content.data?.url;
if (notificationUrl) handleCold(notificationUrl);
};

checkInitialState();

// 5. Cleanup all listeners
return () => {
linkingSub.remove();
notificationSub.remove();
};
}, []);
};

export default useDeepLink;