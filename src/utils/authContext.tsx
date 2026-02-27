


import React,{createContext,useState,PropsWithChildren,useEffect,useRef} from "react";
import {  useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, Alert, Platform,AppState} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios'
import { data,lingual } from "./dataset";
import * as location from 'expo-location'
import io from 'socket.io-client'
import useDeepLink from "./useDeepLink";
import Share, {Social} from 'react-native-share'
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import { useSharedValue,SharedValue } from "react-native-reanimated";






type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




type c = {
name: string,
icon: string,
abbr:string
}



type abot = {
lnamei:string,
lcodex:string,
codex:string,
codei:string,
name: string
}

type userlike = {
userId:string,
createdAt: string,
image: string,
}



type geo = {
isEnable:boolean | null,
isocode:string | null,
city:string | null,
region:string | null,
country:string | null
}

type usave = {
articleId:string,
articleImage: string,
title: string,
pubDate: string,
}



type ucomment = {
articleId:string,
commentId: string,
title: string,
likes: userlike[],
articleImage: string,
text: string,
}

type ureaction = {
id: string,
title: string,
tag: string,
emoji: 'heart'|'laugh'|'sad'|'angry'|'thumb',
createdAt: string,
}

type history = {
paidAt:string,
subCode:string,
amount:number
}


type myClient = {
fname:string,
lname: string,
uname: string,
dob: string,
email:string,
image: string,
gender:string,
reactions:ureaction[],
comments: ucomment[],
saved:usave[],
history:history[],
subCode:string
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
}



type obj = {
currtheme:string,
system:boolean
}


type objB = {
email:string,
rkey:string
}





type dat = {
name: string,
icon: string,
lcodex:string,
female: string,
male: string
}


type lang = {
codeic:string,
lang:string,
lcode:string,
lcodex:string,
name:{
male:string,
female:string
}
}



type like = {
heart:userlike[],
laugh:userlike[],
sad:userlike[],
angry:userlike[],
thumb:userlike[]
}


type comm = {
userId: string,
image:string,
createdAt:Date,
text:string,
region:string,
_id:string,
commentId:string,
parentId:string,
likes:userlike[],
replies:comm[]
}


type pArray = {
article_id:string,
title:string,
description:string,
content:string,
keywords:string,
country:string,
category:string,
pubDate:string,
image_url:string,
source_url:string,
source_name:string,
source_icon:string,
ai_summary:string,
comments:{array:comm[],count:number},
likes:like
}


type toast = {
type:string,
name:string,
info:string,
visibilityTime:number,
onHide:() => void
}

type applang = {
value:string,
lcode:string,
label:string,
icon:string
}





type Auth = {
isLoggedIn: boolean,
LogIn: () => void,
LogOut: () => void,
data:dat[],
theme: string,
toggleTheme: (newt:string) => void,
useSystem: () => void,
isSys: boolean,
WIDTH: number,
HEIGHT: number,
myClient: myClient,
errTxt: String,
seterrTxt: React.Dispatch<React.SetStateAction<string>>,
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
appLang:applang,
setappLang: React.Dispatch<React.SetStateAction<applang>>,
getlang: (id:string, setlang:React.Dispatch<React.SetStateAction<langt>>) => void,
shareArticle:(id:string, title:string) => void
webtoken:string,
iswaitingSession: boolean,
iswaitingLocation: boolean,
isConnected: boolean,
showToast:(toast: toast) => void,
user: user,
setUser:React.Dispatch<React.SetStateAction<user>>,
isactive:boolean,
setisactive: React.Dispatch<React.SetStateAction<boolean>>,
iscdactive:boolean,
setiscdactive: React.Dispatch<React.SetStateAction<boolean>>,
roomKey:string,
isReject:boolean,
setisReject: React.Dispatch<React.SetStateAction<boolean>>,
appStatus:string,
enableLocation: () => Promise<void>,
isLocationLoading:boolean,
postArray:pArray[],
shouldntDisplay:SharedValue<boolean>,
isClick:string,
clickCategory:(id:string) => void,
shouldScroll:boolean,
setshouldScroll:React.Dispatch<React.SetStateAction<boolean>>,
setroomKey: React.Dispatch<React.SetStateAction<string>>,
setisUserReady: React.Dispatch<React.SetStateAction<boolean>>,
setpostArray: React.Dispatch<React.SetStateAction<pArray[]>>,
setsessionID:React.Dispatch<React.SetStateAction<string>>,
setisClick:React.Dispatch<React.SetStateAction<string>>,
isUserReady:boolean
}













export const AuthContext = createContext({
isLoggedIn: false,
LogIn: () => {},
LogOut: () => {},
data :[] as dat[],
theme:'',
toggleTheme:(n:string) => {},
useSystem: () => {},
isSys: false,
WIDTH:0,
HEIGHT:0,
myClient: {} as myClient,
errTxt: '',
seterrTxt: (value: React.SetStateAction<string>) => {},
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
appLang:{} as applang,
setappLang:(value: React.SetStateAction<applang>) => {},
getlang: (id:string , setlang: React.Dispatch<React.SetStateAction<langt>>) => {},
shareArticle:(id:string, title:string) => {},
webtoken:'',
iswaitingSession: true,
iswaitingLocation:true,
isConnected: false,
showToast:(toast: toast) => {},
user:{} as user,
setUser:(value: React.SetStateAction<user>) => {},
isactive:false,
setisactive:(value: React.SetStateAction<boolean>) => {},
iscdactive:false,
setiscdactive:(value: React.SetStateAction<boolean>) => {},
roomKey:'',
isReject:false,
setisReject:(value: React.SetStateAction<boolean>) => {},
appStatus:'',
enableLocation:() => {},
isLocationLoading:false,
postArray:[] as pArray[],
shouldntDisplay:{} as SharedValue<boolean>,
isClick:'',
clickCategory:(id:string) => {},
shouldScroll:false,
setshouldScroll:(value: React.SetStateAction<boolean>) => {},
setisUserReady:(value: React.SetStateAction<boolean>) => {},
setroomKey:(value: React.SetStateAction<string>) => {},
isUserReady:false,
setsessionID:(value: React.SetStateAction<string>) => {},
setpostArray:(value: React.SetStateAction<pArray[]>) => {},
setisClick:(value: React.SetStateAction<string>) => {}
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




const shouldntDisplay = useSharedValue(false)
const [myClient, setmyClient] = useState<myClient>({image:'',fname:'',lname: '',uname: '',dob: '',email:'',
gender:'',reactions:[],comments:[],saved:[],history:[],subCode:"null"})
const [selectedC, setSelectedC] = useState<c>({
name: '',icon: '',abbr:''})
const [lang, setlang] = useState<langt>('en')
const [appLang, setappLang] = useState<applang>({value:'en',lcode:'en-US',label:'English',icon:'gb'})
const [isloading, setisloading] = useState(false)
const [isLocationLoading, setisLocationLoading] = useState(false)
const [errTxt, seterrTxt] = useState('')
const [iswaitingSession, setiswaitingSession] = useState(true)
const [iswaitingLocation, setiswaitingLocation] = useState(true)
const [sessionID, setsessionID] = useState('qxSsidDefVal')   
const [shouldScroll, setshouldScroll] = useState(false)    
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isConnected, setIsConnected] = useState(false)
const [isSys, setIsSys] = useState(false)
const [isUserReady, setisUserReady] = useState(false)
const [islogOut, setisLogOut] = useState(false)
const [isflag, setIsflag] = useState(false)
const [theme, setTheme] = useState('')
const [voice, setvoice] = useState('m') 
const [webtoken, setwebtoken] = useState('')
const [user,setUser] = useState<user>({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',gender:''})
const [isactive,setisactive] = useState(false)
const [iscdactive,setiscdactive] = useState(false)
const [isClick,setisClick] = useState('')
const [roomKey,setroomKey] = useState('')
const [isReject, setisReject] = useState(false)
const [postArray, setpostArray] = useState<pArray[]>([])
const appState = useRef(AppState.currentState)
const [appStatus, setappStatus] = useState(appState.current)
const router = useRouter()
const colorsch = useColorScheme()
let WIDTH = useWindowDimensions().width
let HEIGHT = useWindowDimensions().height




const [locationP, setlocationP] = useState<geo>({isEnable:false,isocode: '',city: '',region:'', country:''})


const [langset, setlangset] = useState<lang>({codeic:'gb',lang:'English',lcode:'en',lcodex:'en-US',name:{male:'en-US-Chirp-HD-D',female:'en-US-Chirp3-HD-Aoede'}})


const [bot, setbot] = useState<abot>({lnamei:'',lcodex:'',codex:'',codei:langset.lcode,name:''})



const Capitalize = (id:string) => {
if (!id) return ""
return id.charAt(0).toUpperCase() + id.slice(1)
}


const clickCategory = (id:string) => {

if (isloading) return

if(!isloading) {
setisloading(true)
}

let category = ''

setisClick(id)

if (id === 'All') {
category = 'top'
} else if (id !== 'All') {
category = id.toLowerCase()
}

if (category !== '') {

socket.emit('indexArticles',{country:selectedC.name.toLowerCase(),rkey:roomKey,category})
}



}



const showToast = (toast:toast) => {
Toast.show({
type: toast.type,
text1:`${lingual.hello[lang]} ${toast.name} 👋`,
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

let { status } = await location.requestForegroundPermissionsAsync()

if (status !== 'granted') {
setisloading(false)
Alert.alert(lingual.permDenied[lang])
}

const { coords } = await location.getCurrentPositionAsync()

if (coords) {


const { latitude, longitude } = coords


let resp = await location.reverseGeocodeAsync({ latitude, longitude })


setlocationP({ isEnable:true, isocode:resp[0].isoCountryCode, city:resp[0].city, region:resp[0].region, country:resp[0].country })



await new Promise<void>(resolve => {

const set = () => {
setiswaitingLocation(false)
resolve()
}

setTimeout(set,1000)
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

Alert.alert(lingual.locationReq[lang])
setisloading(false)
}

}catch(err) {
console.log(err)
}
}



const getDefault = (code: string, voice: string) => {

const newcode = code.toLowerCase()
const defaultData = data.find(data => data.icon === newcode)

if (defaultData) {

setSelectedC({name:defaultData.name, icon:defaultData.icon,abbr:defaultData.abbr})

if (voice === 'm') {

setbot({codex:defaultData.lcodex, name:defaultData.male, codei:langset.lcode, lnamei:langset.name.male, lcodex:langset.lcodex,})

} else if (voice === 'f') {

setbot({codex:defaultData.lcodex, name:defaultData.female, codei:langset.lcode, lnamei:langset.name.female, lcodex:langset.lcodex,})

}
} else if (!defaultData) {


setSelectedC({name:'UNITED STATES OF AMERICA', icon:'us',abbr:'USA'})


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



const setSessionStore = async (sessionObj:objB) => {

const json =  JSON.stringify(sessionObj)

try {
await AsyncStorage.setItem('session',json)

}catch(err) {
console.log(err)
}
}



const getThemeStore = async () => {

try {
const value = await AsyncStorage.getItem('theme')

if (value) {

const data:obj = JSON.parse(value)

if (data.system === true) {
useSystem()

}else if (data.system === false) {
setTheme(data.currtheme)

}


}else if (!value){
useSystem()

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

const obj = JSON.parse(value)


setwebtoken(obj.email)
setroomKey(obj.rkey)

setTimeout(() => setiswaitingSession(false),1000)


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
setisLogOut(false)
router.replace('/')
}




const LogOut = async () => {

try {
shouldntDisplay.value = false
setlocationP({isEnable:false,isocode: '',city: '',region:'', country:''})
socket.emit("logout",{ email:myClient.email })
socket.removeAllListeners()
socket.close()
setisloading(false)
setIsLoggedIn(false)
setUser({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',gender:''})
setmyClient({fname:'',lname: '',uname: '',dob: '',email:'',image: '',gender:'',reactions:[],comments:[],saved:[],history:[],subCode:"null"})
setsessionID('qxSsidDefVal')
removeData('session')
setisLogOut(true)
router.replace('/onboardi')


} catch (err) {
console.log(err)
}
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

case 'Azerbaijani':
setIsflag(true)
break;

case 'Armenian':
setIsflag(true)
break;

case 'Persian':
setIsflag(true)
break;

case 'Swahili':
setIsflag(true)
break;

case 'Malay':
setIsflag(true)
break;

case 'Zulu':
setIsflag(true)
break;

case 'Latin':
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

case 'Vietnamese' :
setIsflag(false)
break;


case 'Urdu' :
setIsflag(false)
break;

case 'Thai' :
setIsflag(false)
break;

case 'Telugu' :
setIsflag(false)
break;

case 'Slovenian' :
setIsflag(false)
break;

case 'Slovak' :
setIsflag(false)
break;

case 'Punjabi' :
setIsflag(false)
break;

case 'Norwegian' :
setIsflag(false)
break;

case 'Hungarian' :
setIsflag(false)
break;

case 'Hebrew' :
setIsflag(false)
break;

case 'Greek' :
setIsflag(false)
break;

case 'Finnish':
setIsflag(false)
break;

case 'Estonian' :
setIsflag(false)
break;

case 'Bengali' :
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


case "id":

setlang("id")
break;



case "fa":

setlang("fa")
break;



case "pa":

setlang("pa")
break;



case "uk":

setlang("uk")
break;


case "ro":

setlang("ro")
break;


case "tl":

setlang("tl")
break;


}


}




const handleNewClient = (client:any) => {

setmyClient({
fname:client.fname,
lname:client.lname,
uname:client.uname,
dob:client.dob,
email:client.email,
image:client.image,
gender:client.gender,
reactions:client.reactions,
comments:client.comments,
saved:client.saved,
history:client.history,
subCode:client.subCode
})

}


const delPipeline = () => {
socket.removeAllListeners()
socket.disconnect()
}


const handleFauth = (data:any) => {

if (data.isSent) {
setisloading(false)
setisactive(true)
setiscdactive(true)

const toast = {type:'success',name:myClient.fname,info:lingual.emailSent[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)

} else if (!data.isSent) {

setisloading(false)
setiscdactive(false)
setisactive(false)
const toast = {type:'error',name:myClient.fname,info:lingual.error[lang],onHide:() => {}, visibilityTime:4000}
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
const toast = {type:'error',name:user.uname,info:lingual.error[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
}


}


const handleResendS = (data:any) => {

if (data.isSent) {
setisloading(false)
setiscdactive(true)
const toast = {type:'success',name:user.uname,info:lingual.emailSent[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)

} else if (!data.isSent) {

setisloading(false)
setiscdactive(false)
const toast = {type:'error',name:user.uname,info:lingual.error[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
}


}



const handleVerify = (data:any) => {

if (data.isVerify === true) {

if (data.id === 'forgot') {
setisloading(false)
setisactive(false)
setiscdactive(false)
router.replace({pathname:'/(signIn)/newpass'})

} else if (data.id === 'signup') {
setisloading(false)
setisactive(false)
setiscdactive(false)
router.replace({pathname:'/(signIn)/profile'})
}

} else if (data.isVerify === false) {
setisloading(false)

const toast = {type:'error',name:myClient.fname,info:lingual.invalidC[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)

} else if (data.isExpire === true) {
setisloading(false)
const toast = {type:'error',name:myClient.fname,info:lingual.expired[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)

}



}


const handleNpass = (data:any) => {

if (data.isSucess) {
setisloading(false)

const toast = {type:'success',name:myClient.fname,info:lingual.passUpdated[lang],onHide:() => router.push({pathname:'/sign'}), visibilityTime:4000}
showToast(toast)

} else if (!data.isSucess) {
setisloading(false)

const toast = {type:'error',name:myClient.fname,info:lingual.error[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
}

}


const handleInvalid = (data:any) => {

if (data.status === 'invalidPass') {

setisloading(false)
setlocationP({...locationP,isEnable:false})
const toast = {type:'error',name:myClient.fname,info:lingual.invalidPass[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
}

if (data.isAlready === true) {

setisloading(false)
setlocationP({...locationP,isEnable:false})
const toast = {type:'error',name:myClient.fname,info:'Log Out from other Device',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}


}



const handleActive = (data:any) => {

setmyClient({
...myClient,
history:data.history,
subCode:data.subCode
})

}

const handleCancel = (data:any) => {

if (data.isCancel){

setmyClient({
...myClient,
subCode:"null"
})
}

}

const handleIfeeds = (data:any) => {
setpostArray(data.post)

if (data.category === 'top') {
setisClick('All')
setshouldScroll(true)
}else if (data.category !== 'top') {
const result = Capitalize(data.category)
setisClick(result)
}

setisloading(false)

}

const connectExistingUser = () => {

socket.emit('existingRoom',roomKey)
}


const handleUfeeds = (data:any) => {
setpostArray(data.post)
setisClick('All')
setisloading(false)
setsessionID(data.ssid)
LogIn()

}




useEffect(() => {
socket.on("unoFeeds",handleUfeeds)
socket.on("articles",handleIfeeds)
socket.on("scanSauth",handleSauth)
socket.on("scanRSauth",handleResendS)
socket.on("scanVerify",handleVerify)
socket.on("newClient",handleNewClient)

return () => {
socket.off("scanSauth", handleSauth)
socket.off("scanRSauth",handleResendS)
socket.off("scanVerify",handleVerify)
socket.off("newClient",handleNewClient)
socket.off("unoFeeds",handleUfeeds)
socket.off("articles",handleIfeeds)
};

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

const subscription = AppState.addEventListener('change', nextAppState => {

if (
appState.current.match(/inactive|background/) &&
nextAppState === 'active'
) {
socket.connect()
}

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



useEffect(() => {

if (myClient.fname !== '') {

setroomKey(myClient.uname)

socket.on("scanFauth",handleFauth)
socket.on("updatePass",handleNpass)
socket.on("wrongPass",handleInvalid)
socket.on("loggedIn",handleInvalid)
socket.on("activeZ",handleActive)
socket.on("cancelPro",handleCancel)


socket.emit('existingRoom',myClient.uname)
}


return () => {

socket.off("scanFauth",handleFauth)
socket.off("updatePass",handleNpass)
socket.off("wrongPass",handleInvalid)
socket.off("loggedIn",handleInvalid)
socket.off("activeZ",handleActive)
socket.off("cancelPro",handleCancel)

}

},[myClient])



useEffect(() => {

if (roomKey !== ''){
socket.removeListener("connect")
socket.on("connect",connectExistingUser)
}

},[roomKey])



useEffect(() => {

if (sessionID !== '') {

api = connectApi(sessionID)


}

},[sessionID])



useEffect(()=> {
checkSound(langset.lang)
},[langset.lang])




useEffect(() => {

if (locationP.isocode) {
getDefault(locationP.isocode , voice)
}
},[locationP.isocode, voice, langset.lang])



useEffect(() => {

getlang(appLang.value,setlang) 

},[appLang])




useEffect(() => {

if (isSys === true) {
useSystem()

}

},[colorsch])





useEffect(() => {

if (isLoggedIn){

const obj = { email:myClient.email,rkey:roomKey}
setSessionStore(obj)

}

},[isLoggedIn])



useEffect(() => {

if (islogOut) {

socket.on("unoFeeds",handleUfeeds)
socket.on("articles",handleIfeeds)
socket.on("scanSauth",handleSauth)
socket.on("scanRSauth",handleResendS)
socket.on("scanVerify",handleVerify)
socket.on("newClient",handleNewClient)
}

return () => {
socket.off("scanSauth", handleSauth)
socket.off("scanRSauth",handleResendS)
socket.off("scanVerify",handleVerify)
socket.off("newClient",handleNewClient)
socket.off("unoFeeds",handleUfeeds)
socket.off("articles",handleIfeeds)
};

},[islogOut])



useEffect(() => {
if (myClient.fname !== ''&&  islogOut) {

setroomKey(myClient.uname)

socket.on("scanFauth",handleFauth)
socket.on("updatePass",handleNpass)
socket.on("wrongPass",handleInvalid)
socket.on("loggedIn",handleInvalid)
socket.on("activeZ",handleActive)
socket.on("cancelPro",handleCancel)


socket.emit('existingRoom',myClient.uname)
}


return () => {

socket.off("scanFauth",handleFauth)
socket.off("updatePass",handleNpass)
socket.off("wrongPass",handleInvalid)
socket.off("loggedIn",handleInvalid)
socket.off("activeZ",handleActive)
socket.off("cancelPro",handleCancel)

}

},[myClient,islogOut])





return (
<AuthContext.Provider value={{setshouldScroll,shouldScroll,isClick,clickCategory,shouldntDisplay,postArray,isLocationLoading,enableLocation,appStatus,isReject,setisReject,roomKey,isactive,setisactive,iscdactive,setiscdactive,user,setUser,showToast,isConnected,iswaitingSession,iswaitingLocation,webtoken,shareArticle,appLang,setappLang,socket,setmyClient,selectedC,locationP,setSelectedC,isloading,setisloading,platform,setItems,isflag,setbot,bot, voice,isLoggedIn,LogIn, LogOut, data,theme,toggleTheme, useSystem, isSys, WIDTH, HEIGHT,myClient, errTxt, seterrTxt , api,setvoice,langset, setlangset,getlang,isUserReady,setroomKey,setisUserReady,setisClick,setpostArray,setsessionID}}>
{children}
</AuthContext.Provider>
)
}










