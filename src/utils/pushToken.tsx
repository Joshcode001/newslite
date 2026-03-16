
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';



function handleRegistrationError(errorMessage: string) {
console.log(errorMessage)
}


Notifications.setNotificationHandler({
handleNotification: async () => ({
shouldPlaySound: true,
shouldSetBadge: true,
shouldShowBanner: true,
shouldShowList: true,
}),
});



export async function registerPushNotify() {

if (Platform.OS === 'android') {

await Notifications.setNotificationChannelAsync('newsbreak', {
name: 'newsbreak',
importance: Notifications.AndroidImportance.MAX,
vibrationPattern: [0, 250, 250, 250],
lightColor: '#FF231F7C',
});


if (Device.isDevice) {
const { status: existingStatus } = await Notifications.getPermissionsAsync();
let finalStatus = existingStatus;

if (existingStatus !== 'granted') {
const { status } = await Notifications.requestPermissionsAsync();
finalStatus = status;
}
if (finalStatus !== 'granted') {
handleRegistrationError('Permission not granted to get push token for push notification!');
return;
}

if (finalStatus === 'granted') {
const projectId =
Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
if (!projectId) {
handleRegistrationError('Project ID not found');
}
try {
const pushTokenString = (
await Notifications.getExpoPushTokenAsync({
projectId,
})
).data;


return pushTokenString;

} catch (e: unknown) {
handleRegistrationError(`${e}`);
}
}



} else {
handleRegistrationError('Must use physical device for push notifications');
}


}



if (Device.isDevice) {
const { status: existingStatus } = await Notifications.getPermissionsAsync();
let finalStatus = existingStatus;

if (existingStatus !== 'granted') {
const { status } = await Notifications.requestPermissionsAsync();
finalStatus = status;
}
if (finalStatus !== 'granted') {
handleRegistrationError('Permission not granted to get push token for push notification!');
return;
}
const projectId =
Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
if (!projectId) {
handleRegistrationError('Project ID not found');
}
try {
const pushTokenString = (
await Notifications.getExpoPushTokenAsync({
projectId,
})
).data;

return pushTokenString;

} catch (e: unknown) {
handleRegistrationError(`${e}`);
}
} else {
handleRegistrationError('Must use physical device for push notifications');
}
}
