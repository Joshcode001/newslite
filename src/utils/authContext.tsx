


import React,{createContext,useState, PropsWithChildren, useEffect,useRef} from "react";
import {  useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, Alert, Platform,AppState} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios'
import { data, category, multilingual } from "./dataset";
import * as location from 'expo-location'
import io from 'socket.io-client'
import useDeepLink from "./useDeepLink";
import Share, {Social} from 'react-native-share'
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';







type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




type c = {
name: string,
icon: string
}



type abot = {
lnamei:string,
lcodex:string,
codex:string,
codei:string,
name: string
}




type geo = {
isEnable:boolean | null,
isocode:string | null,
city:string | null,
region:string | null,
country:string | null
}


type myClient = {
fname:string,
lname: string,
uname: string,
dob: string,
email:string,
image: string,
}


type user = {
email:string,
password: string,
uname:string
fname:string,
lname:string,
dob:string,
gender:string,
image:string
location:geo
}



type obj ={
currtheme:string,
system:boolean
}


type props  = {
_id: string,
fname: string,
category: string,
image: string,
total: string
}


type item = {
item:langobj,
color: string
}



type dat = {
name: string,
icon: string,
lcodex:string,
female: string,
male: string
}


type lang = {
lang:string,
lcode:string,
lcodex:string,
name:{
male:string,
female:string
}
}



type langobj = {
en:string,
fr:string,
de:string,
ar:string,
es:string,
tr:string,
nl:string,
it:string,
ja:string,
zh:string,
ko:string,
hi:string,
pt:string,
ru:string,
sw:string,
pl:string,
id:string

}




type toast = {
type:string,
name:string,
info:string,
visibilityTime:number,
onHide:() => void
}



type Auth = {
isLoggedIn: boolean,
LogIn: () => void,
LogOut: () => void,
listp: props[],
lists: props[],
listc: props[],
listt: props[],
category: item[],
data:dat[],
theme: string,
toggleTheme: (newt:string) => void,
useSystem: () => void,
isSys: boolean,
WIDTH: number,
HEIGHT: number,
verify: (code: string, path: string,id:string) => void,
display: string,
fgtdisplay: string,
backToLogIn: () => void,
cemail: string,
myClient: myClient,
errTxt: String,
seterrTxt: React.Dispatch<React.SetStateAction<string>>,
setdisplay: React.Dispatch<React.SetStateAction<string>>,
setfgtdisplay:React.Dispatch<React.SetStateAction<string>>,
api: AxiosInstance,
platform: string,
setvoice: React.Dispatch<React.SetStateAction<string>>,
voice: string,
bot: abot,
setbot:React.Dispatch<React.SetStateAction<abot>>,
isflag: boolean,
setItems: (item:dat, voice:string, langset:lang) => void,
langset: lang,
setlangset: React.Dispatch<React.SetStateAction<lang>>,
isloading: boolean,
setisloading: React.Dispatch<React.SetStateAction<boolean>>,
selectedC: c,
setSelectedC:React.Dispatch<React.SetStateAction<c>>,
locationP: geo,
socket:any,
setmyClient:React.Dispatch<React.SetStateAction<myClient>>,
appLang:string,
setappLang: React.Dispatch<React.SetStateAction<string>>,
getlang: (id:string, setlang:React.Dispatch<React.SetStateAction<langt>>) => void,
shareArticle:(id:string, title:string) => void
webtoken:string,
iswaitingSession: boolean,
iswaitingLocation: boolean,
isConnected: boolean,
getClient:() => void,
showToast:(toast: toast) => void,
user: user,
setUser:React.Dispatch<React.SetStateAction<user>>,
delPipeline:() => void
isactive:boolean,
setisactive: React.Dispatch<React.SetStateAction<boolean>>,
iscdactive:boolean,
setiscdactive: React.Dispatch<React.SetStateAction<boolean>>,
roomKey:string,
isReject:boolean,
setisReject: React.Dispatch<React.SetStateAction<boolean>>,
handleCheckUname:(id:string,mail:string,name:string) =>(data:any) => Promise<void>,
appStatus:string,
enableLocation: () => Promise<void>,
isLocationLoading:boolean

}













export const AuthContext = createContext({
isLoggedIn: false,
LogIn: () => {},
LogOut: () => {},
listp:  [] as props[],
lists: [] as props[],
listc: [] as props[],
listt: []  as props[],
category: [] as item[],
data :[] as dat[],
theme:'',
toggleTheme:(n:string) => {},
useSystem: () => {},
isSys: false,
WIDTH:0,
HEIGHT:0,
verify: (code: string, path:string,id:string) => {},
display: '',
fgtdisplay: '',
backToLogIn: () => {},
cemail:'',
myClient: {
fname:'',
lname: '',
uname: '',
dob: '',
email:'',
image:''
},
errTxt: '',
seterrTxt: (value: React.SetStateAction<string>) => {},
setdisplay: (value: React.SetStateAction<string>) => {},
setfgtdisplay: (value: React.SetStateAction<string>) => {},
api: axios.create({}),
platform: '',
setvoice: (value: React.SetStateAction<string>) => {},
voice: '',
bot: {} as abot,
setbot: (value: React.SetStateAction<abot>) => {},
isflag: false,
setItems: (item: dat, voice: string, langset:lang) => {},
langset: {} as lang,
setlangset: (value: React.SetStateAction<lang>) => {},
isloading: false,
setisloading: (value: React.SetStateAction<boolean>) => {},
selectedC: {} as c,
setSelectedC:(value: React.SetStateAction<c>) => {},
locationP: {} as geo,
socket:{} as any,
setmyClient:(value: React.SetStateAction<myClient>) => {},
appLang:'',
setappLang:(value: React.SetStateAction<string>) => {},
getlang: (id:string , setlang: React.Dispatch<React.SetStateAction<langt>>) => {},
shareArticle:(id:string, title:string) => {},
webtoken:'',
iswaitingSession: true,
iswaitingLocation:true,
isConnected: false,
getClient:() => {},
showToast:(toast: toast) => {},
user:{} as user,
setUser:(value: React.SetStateAction<user>) => {},
delPipeline: () => {},
isactive:false,
setisactive:(value: React.SetStateAction<boolean>) => {},
iscdactive:false,
setiscdactive:(value: React.SetStateAction<boolean>) => {},
roomKey:'',
isReject:false,
setisReject:(value: React.SetStateAction<boolean>) => {},
handleCheckUname:(id:string,mail:string,name:string) => (data:any) => {},
appStatus:'',
enableLocation:() => {},
isLocationLoading:false
})




const socket = io('https://api.newsworldapp.org',{autoConnect:false})








export function AuthProvider ({children}:PropsWithChildren) {

useDeepLink()


let platform = ''

if (Platform.OS === 'ios') {

platform = 'ios'

} else if (Platform.OS === 'android') {

platform = 'android'

}


const [myClient, setmyClient] = useState({image:'',fname:'',lname: '',uname: '',dob: '',email:''})
const [selectedC, setSelectedC] = useState<c>({
name: 'Select Country',icon: 'wo'})
const [lang, setlang] = useState<langt>('en')
const [appLang, setappLang] = useState('en')
const [isloading, setisloading] = useState(false)
const [isLocationLoading, setisLocationLoading] = useState(false)
const [errTxt, seterrTxt] = useState('')
const [iswaitingSession, setiswaitingSession] = useState(true)
const [iswaitingLocation, setiswaitingLocation] = useState(true)
const [sessionID, setsessionID] = useState('qxSsidDefVal') 
const [fgtdisplay, setfgtdisplay] = useState('')  
const [display, setdisplay] = useState('') 
const [cemail, setcemail]= useState('')   
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isConnected, setIsConnected] = useState(false)
const [isSys, setIsSys] = useState(false)
const [isflag, setIsflag] = useState(false)
const [theme, setTheme] = useState('dark')
const [voice, setvoice] = useState('m')
const [webtoken, setwebtoken] = useState('')
const [user,setUser] = useState<user>({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',location:{isEnable:false,isocode: '',city: '',region:'', country:''},gender:''})
const [isUserReady,setisUserReady] = useState(false)
const [isactive,setisactive] = useState(false)
const [iscdactive,setiscdactive] = useState(false)
const [roomKey,setroomKey] = useState('')
const [isReject, setisReject] = useState(false)
const appState = useRef(AppState.currentState)
const locationIdRef = useRef(0)
const storeIdRef = useRef(0)
const [appStatus, setappStatus] = useState(appState.current)
const [list, setlist] = useState<props[]>([])
const router = useRouter()
const colorsch = useColorScheme()
let WIDTH = useWindowDimensions().width
let HEIGHT = useWindowDimensions().height



const [locationP, setlocationP] = useState<geo>({isEnable:false,isocode: '',city: '',region:'', country:''})


const [langset, setlangset] = useState<lang>({lang:'English',lcode:'en',lcodex:'en-US',name:{male:'en-US-Chirp-HD-D',female:'en-US-Chirp3-HD-Aoede'}})

const [bot, setbot] = useState<abot>({lnamei:'',lcodex:'',codex:'',codei:langset.lcode,name:''})






const showToast = (toast:toast) => {
Toast.show({
type: toast.type,
text1:`Hello ${toast.name} 👋`,
text2: `${toast.info}`,
onHide:toast.onHide,
visibilityTime:toast.visibilityTime
});
}



const checkLocation = async () => {
let isON = await location.hasServicesEnabledAsync()

return isON
}


const getCurrentLocation = async () => {

let {status} = await location.requestForegroundPermissionsAsync()

if (status !== 'granted') {
setisloading(false)
Alert.alert(multilingual.permissionDenied[lang])
}

const {coords} = await location.getCurrentPositionAsync()

if (coords) {


const {latitude, longitude} = coords


let resp = await location.reverseGeocodeAsync({latitude, longitude})


setlocationP({isEnable:true, isocode:resp[0].isoCountryCode, city:resp[0].city, region:resp[0].region, country:resp[0].country})



await new Promise<void>(resolve => {

const set = () => {
setiswaitingLocation(false)
resolve()
}

locationIdRef.current = setTimeout(set,1000)
})


}}


const enableLocation = async () => {

setisLocationLoading(true)
try {

const isLocationOn = await checkLocation()

if (isLocationOn) {
await getCurrentLocation()
setisLocationLoading(false)


}else if (!isLocationOn) {

Alert.alert(multilingual.locationRequired[lang])
}

}catch(err) {
console.log(err)
}
}


const getDefault = (code: string, voice: string) => {

const newcode = code.toLowerCase()
const defaultData = data.find(data => data.icon === newcode)

if (defaultData) {

setSelectedC({name:defaultData.name, icon:defaultData.icon})

if (voice === 'm') {

setbot({codex:defaultData.lcodex, name:defaultData.male, codei:langset.lcode, lnamei:langset.name.male, lcodex:langset.lcodex,})

} else if (voice === 'f') {

setbot({codex:defaultData.lcodex, name:defaultData.female, codei:langset.lcode, lnamei:langset.name.female, lcodex:langset.lcodex,})

}
} else if (!defaultData) {


setSelectedC({name:multilingual.selectCountry[lang], icon:'wo'})


if (voice === 'm') {

setbot({codex:langset.lcodex, name:langset.name.male, codei:langset.lcode, lnamei:langset.name.male, lcodex:langset.lcodex,})

} else if (voice === 'f') {

setbot({codex:langset.lcodex, name:langset.name.female, codei:langset.lcode, lnamei:langset.name.female, lcodex:langset.lcodex,})

}
}

}


const shareArticle =  async (id:string,title:string) => {

// const deeplink = `newslite://article/${id}`
const deeplink = "https://1add63c82721.ngrok-free.app/data/initdata"
const message = 'hi'
try {

await Share.open({
title:'Check out this article on NEWSWORLD',
message:`${title}....Read more ${deeplink}`,
url:`${deeplink}`

})

// await Share.shareSingle({
//       message:`hi there ${deeplink}`,
//       social: Social.Whatsapp
//     });

} catch (err) {

console.log(err)
}


}



axios.defaults.withCredentials = true;


const connectApi = (id:string) => {

const headers = {'Content-Type': 'application/json',Authorization:`Bearer ${id}`}
const baseURL = 'https://api.newsworldapp.org/'

return axios.create({headers,baseURL})

}


let api = connectApi(sessionID)


const setThemeStore = async (themeObj:obj) => {

const json =  JSON.stringify(themeObj)
try {
await AsyncStorage.setItem('theme', json)

}catch(err) {
console.log(err)
}
}

const setSessionStore = async (id:string) => {


try {
await AsyncStorage.setItem('session', id)

}catch(err) {
console.log(err)
}
}

const getThemeStore = async () => {

try {
const value = await AsyncStorage.getItem('theme')
if (value) {
const data:obj = JSON.parse(value)
setTheme(data.currtheme)
setIsSys(data.system)
}


}catch(err) {
console.log(err)
}
}


const getSessionStore = async () => {
setiswaitingSession(true)
try {

const value = await AsyncStorage.getItem('session')



if (value !== null) {

setwebtoken(value)

storeIdRef.current = setTimeout(() => { setiswaitingSession(false)},1000)


} else if (value === null) {

setwebtoken('')
setiswaitingSession(false)

}


}catch(err) {
console.log(err)
}
}


const toggleTheme = (newt:string) => {
setIsSys(false)
setTheme(newt)
const themeObj = {
currtheme: newt,
system: false
}
setThemeStore(themeObj)
}


const useSystem = () => {
if (colorsch) {
setIsSys(true)
setTheme(colorsch)
const themeObj = {
currtheme: colorsch,
system: true
}
setThemeStore(themeObj)
}
}





let listp: props[] = [];
let lists: props[] = [];
let listc: props[] = [];
let listt: props[] = [];


if (list) {
listp = list.filter(item =>item.category === 'Popular People!' )
lists = list.filter(item =>item.category === 'Popular Sources!' )
listc = list.filter(item =>item.category === 'Popular CryptoCoins!' )
listt = list.filter(item =>item.category === 'Popular Teams!' )
}





const getClient = () => {

setisloading(true)
setisUserReady(true)
}


const verify = async (code: string, path:string, id:string ) => {
setisloading(true)
try {
const resp = await api.post(path, {code: code})
if (resp.data.verify === true) {

setisloading(false)

switch (id) {

case "en": 
setdisplay(multilingual.success.en)
break;

case "fr":
setdisplay(multilingual.success.fr)
break;

case "de": 
setdisplay(multilingual.success.de)
break;

case "ar":
setdisplay(multilingual.success.ar)
break;

case "es": 
setdisplay(multilingual.success.es)
break;

case "tr":
setdisplay(multilingual.success.tr)
break;

case "nl":
setdisplay(multilingual.success.nl)
break;


case "it":
setdisplay(multilingual.success.it)
break;

case "ja":
setdisplay(multilingual.success.ja)
break;

case "zh":
setdisplay(multilingual.success.zh)
break;

case "ko":
setdisplay(multilingual.success.ko)
break;

case "hi":
setdisplay(multilingual.success.hi)
break;

case "pt":
setdisplay(multilingual.success.pt)
break;

case "ru":
setdisplay(multilingual.success.ru)
break;

case "sw":
setdisplay(multilingual.success.sw)
break;

case "pl":
setdisplay(multilingual.success.pl)
break;

}

} else if (resp.data.verify === false) {

setisloading(false)

switch (id) {

case "en": 
setdisplay(multilingual.invalidCode.en)
break;

case "fr":
setdisplay(multilingual.invalidCode.fr)
break;

case "de": 
setdisplay(multilingual.invalidCode.de)
break;

case "ar":
setdisplay(multilingual.invalidCode.ar)
break;

case "es": 
setdisplay(multilingual.invalidCode.es)
break;

case "tr":
setdisplay(multilingual.invalidCode.tr)
break;

case "nl":
setdisplay(multilingual.invalidCode.nl)
break;


case "it":
setdisplay(multilingual.invalidCode.it)
break;

case "ja":
setdisplay(multilingual.invalidCode.ja)
break;

case "zh":
setdisplay(multilingual.invalidCode.zh)
break;

case "ko":
setdisplay(multilingual.invalidCode.ko)
break;

case "hi":
setdisplay(multilingual.invalidCode.hi)
break;

case "pt":
setdisplay(multilingual.invalidCode.pt)
break;

case "ru":
setdisplay(multilingual.invalidCode.ru)
break;

case "sw":
setdisplay(multilingual.invalidCode.sw)
break;

case "pl":
setdisplay(multilingual.invalidCode.pl)
break;

}

}
} catch (err) {
console.log(err)
}
}



const setItems = (item:dat, voice:string, langset:lang) => {

try {

if (voice === 'm') {

setbot({ codex:item.lcodex, name:item.male, codei:langset.lcode, lnamei:langset.name.male , lcodex:langset.lcodex})
return

} else if (voice === 'f') {

setbot({codex:item.lcodex, name:item.female, codei:langset.lcode, lnamei:langset.name.female , lcodex:langset.lcodex})

return
}

} catch(err) {

console.log(err)

}

}


const removeData = async (key:string) => {
try {
await AsyncStorage.removeItem(key);
console.log('status: client just Signed out!');
} catch (error) {
console.log('Error removing client:', error);
}
};



const LogIn = () => {

setIsLoggedIn(true)
router.replace('/')
}




const LogOut = async () => {

const email = myClient.email
try {

setisloading(false)
setIsLoggedIn(false)
setmyClient({fname:'',lname: '',uname: '',dob: '',email:'',image: ''})
setsessionID('')
removeData('session')
router.replace('/onboardi')
const resp = await api.post('/data/signout', {email})

} catch (err) {
console.log(err)
}
}



const backToLogIn = () => {

router.replace('/login')
}


const checkSound = (lang:string) => {

switch (lang) {

case 'Yoruba':
setIsflag(true)
break;

case 'Hausa' :
setIsflag(true)
break;

case 'Igbo' :
setIsflag(true)
break;

case 'Irish' :
setIsflag(true)
break;

case 'English' :
setIsflag(false)
break;

case 'Afrikaans':
setIsflag(false)
break;

case 'Arabic' :
setIsflag(false)
break;

case 'Bulgarian' :
setIsflag(false)
break;

case 'Mandarin' :
setIsflag(false)
break;

case 'Czech' :
setIsflag(false)
break;

case 'Danish':
setIsflag(false)
break;

case 'Dutch' :
setIsflag(false)
break;

case 'Filipino' :
setIsflag(false)
break;

case 'Finnish' :
setIsflag(false)
break;

case 'French' :
setIsflag(false)
break;

case 'German':
setIsflag(false)
break;

case 'Hindi' :
setIsflag(false)
break;

case 'Indonesian' :
setIsflag(false)
break;

case 'Italian' :
setIsflag(false)
break;

case 'Japanese' :
setIsflag(false)
break;

case 'Korean' :
setIsflag(false)
break;

case 'Polish' :
setIsflag(false)
break;

case 'Portuguese' :
setIsflag(false)
break;

case 'Romanian' :
setIsflag(false)
break;

case 'Russian' :
setIsflag(false)
break;

case 'Ukrainian':
setIsflag(false)
break;

case 'Spanish' :
setIsflag(false)
break;

case 'Turkish' :
setIsflag(false)
break;

case 'Swedish' :
setIsflag(false)
break;
}

}



const getlang = (id:string, setlang:React.Dispatch<React.SetStateAction<langt>>) => {


switch (id) {

case "en": 

setlang("en")
break;

case "fr":

setlang("fr")
break;

case "de": 

setlang("de")
break;

case "ar":

setlang("ar")
break;

case "es": 

setlang("es")
break;

case "tr":

setlang("tr")
break;

case "nl":

setlang("nl")
break;


case "it":

setlang("it")
break;

case "ja":

setlang("ja")
break;

case "zh":

setlang("zh")
break;

case "ko":

setlang("ko")
break;

case "hi":

setlang("hi")
break;

case "pt":

setlang("pt")
break;

case "ru":

setlang("ru")
break;

case "sw":

setlang("sw")
break;

case "pl":

setlang("pl")
break;


}
}



const connectUser = () => {
socket.emit('joinRoom',user.email)
}

const connectExistingUser = () => {
socket.emit('existingRoom',roomKey)
}


const handleCheckEmail = (newdata:any) => {

try {

if (newdata.message === true ){

setmyClient({
fname:newdata.client.fname,
lname: newdata.client.lname,
uname: newdata.client.uname,
dob: newdata.client.dob,
email:newdata.client.email,
image:newdata.client.image
})


router.push({pathname:"/(signIn)/sign"})

} else if (newdata.message === false ) {

router.push({pathname:"/newuser"})
}


setisUserReady(false)
setisloading(false)


}catch(err) {
setisloading(false)
console.log(err)
}
}


const delPipeline = () => {
socket.removeAllListeners()
socket.disconnect()
}

const sendEmailTask = async(id:string) => {

setroomKey(id)
await api.post('qxdata/cdntls',{qxcountry:locationP.country,qxmail:user.email,qxpass:user.password,qxrkey:id})
}


const handleFauth = (data:any) => {

if (data.isSent) {
setisloading(false)
setisactive(true)
setiscdactive(true)

const toast = {type:'success',name:myClient.fname,info:'Email sent!',onHide:() => {}, visibilityTime:4000}
showToast(toast)

} else if (!data.isSent) {

setisloading(false)
setiscdactive(false)
setisactive(false)
const toast = {type:'error',name:myClient.fname,info:'Action failed! Try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}


}


const handleSauth = (data:any) => {

if (data.isSent) {
setisloading(false)
setiscdactive(true)
router.push({pathname:'/verifymail'})

} else if (!data.isSent) {

setisloading(false)
setiscdactive(false)
const toast = {type:'error',name:user.uname,info:'Action failed! Try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}


}


const handleResendS = (data:any) => {

if (data.isSent) {
setisloading(false)
setiscdactive(true)
const toast = {type:'success',name:user.uname,info:'Email sent!',onHide:() => {}, visibilityTime:4000}
showToast(toast)

} else if (!data.isSent) {

setisloading(false)
setiscdactive(false)
const toast = {type:'error',name:user.uname,info:'Action failed! Try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}


}



const handleVerify = (data:any) => {

if (data.isVerify === true) {

if (data.id === 'forgot') {
setisloading(false)
setisactive(false)
setiscdactive(false)
router.push({pathname:'/(signIn)/newpass'})

} else if (data.id === 'signup') {
setisloading(false)
setisactive(false)
setiscdactive(false)
router.push({pathname:'/(signIn)/profile'})
}

} else if (data.isVerify === false) {
setisloading(false)

const toast = {type:'error',name:myClient.fname,info:'Invalid Code! Try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)

} else if (data.isExpire === true) {
setisloading(false)
const toast = {type:'error',name:myClient.fname,info:'Expired Code! Try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)

}



}


const handleNpass = (data:any) => {

if (data.isSucess) {
setisloading(false)

const toast = {type:'success',name:myClient.fname,info:'Password updated!',onHide:() => router.push({pathname:'/sign'}), visibilityTime:4000}
showToast(toast)

} else if (!data.isSucess) {
setisloading(false)

const toast = {type:'error',name:myClient.fname,info:'Password reset failed!, try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}

}


const handleCheckUname = (id:string,mail:string,name:string) => {

return async function (data:any){

if (data.isUser) {
setisloading(false)
setisReject(true)
setUser({...user,uname:''})
const toast = {type:'error',name:"From NEWSWORLD",info:'Username Exists ! try another...',onHide:() => {}, visibilityTime:6000}
showToast(toast)

} else if (!data.isUser) {

await api.post('/qxdata/uthxcd',{qxrkey:id,qxmail:mail,qxcode:'',qxid:'signup',qxname:name,qxintel:'qxISz'})
}

}

}



const handleInvalid = (data:any) => {

if (data.status === 'invalidPass') {
setisloading(false)
setlocationP({...locationP,isEnable:false})
const toast = {type:'error',name:myClient.fname,info:'Invalid Password!, try again..',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}

}



const handleUfeeds = (data:any) => {

setisloading(false)
setsessionID(data.ssid)
LogIn()

}


useEffect(() => {

const subscription = AppState.addEventListener('change', nextAppState => {

appState.current = nextAppState
setappStatus(appState.current)
})

return () => subscription.remove()

},[])




useEffect(() => {

NetInfo.configure({
reachabilityUrl: 'https://clients3.google.com/generate_204',
reachabilityTest: async (response) => response.status === 204,
reachabilityLongTimeout: 60 * 1000, // 60s
reachabilityShortTimeout: 5 * 1000, // 5s
reachabilityRequestTimeout: 15 * 1000, // 15s
reachabilityShouldRun: () => true,
shouldFetchWiFiSSID: true,
useNativeReachability: false
});



const unsubscribe = NetInfo.addEventListener((state) => {

if (state.isConnected) 

setIsConnected(state.isConnected);
});


NetInfo.fetch().then((state) => {
if (state.isConnected)
setIsConnected(state.isConnected)
});

return () => unsubscribe();

},[])




useEffect( () => {

try {
getSessionStore()
getThemeStore()


} catch(err) {
console.log(err)
}


},[])




useEffect(() => {

if (isUserReady === true) {

socket.on("connect", connectUser)
socket.on("roomKey",sendEmailTask)
socket.on("scanEmail", handleCheckEmail)
socket.on("scanSauth",handleSauth)
socket.on("scanRSauth",handleResendS)
socket.on("scanVerify",handleVerify)
socket.on("unoFeeds",handleUfeeds)


socket.connect()

}

if (myClient.fname !== '') {

socket.on("scanFauth",handleFauth)
socket.on("updatePass",handleNpass)
socket.on("wrongPass",handleInvalid)
}


},[isUserReady,myClient.fname])




useEffect(() => {

if (roomKey !== ''){

socket.on("connect",connectExistingUser)

}

},[roomKey])





useEffect(() => {

if (sessionID !== '') {

api = connectApi(sessionID)


if (sessionID.length > 22) {

clearTimeout(locationIdRef.current)
clearTimeout(storeIdRef.current)
}



}

},[sessionID])





useEffect(()=> {
checkSound(langset.lang)
},[langset.lang])





useEffect(() => {
if (isSys) {
useSystem()
}
},[colorsch])



useEffect(() => {

if (locationP.isocode) {
getDefault(locationP.isocode , voice)
}
},[locationP.isocode, voice, langset.lang])




useEffect(() => {

if (locationP.isocode) {

getDefault(locationP.isocode,voice)
}
},[voice])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])





return (
<AuthContext.Provider value={{isLocationLoading,enableLocation,appStatus,handleCheckUname,isReject,setisReject,roomKey,isactive,setisactive,iscdactive,setiscdactive,delPipeline,user,setUser,showToast,getClient,isConnected,iswaitingSession,iswaitingLocation,webtoken,shareArticle,appLang,setappLang,socket,setmyClient,selectedC,locationP,setSelectedC,isloading,setisloading,platform,setItems,isflag,setbot,bot, voice, setdisplay, isLoggedIn,fgtdisplay,setfgtdisplay, LogIn, LogOut, listc, listp, lists, listt, category, data,theme,toggleTheme, useSystem, isSys, WIDTH, HEIGHT, verify, display, backToLogIn, cemail, myClient, errTxt, seterrTxt , api,setvoice,langset, setlangset,getlang}}>
{children}
</AuthContext.Provider>
)
}










