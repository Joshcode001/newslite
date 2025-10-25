


import React,{createContext,useState, PropsWithChildren, useEffect} from "react";
import {  useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, Alert, Platform} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios'
import { data, category, multilingual } from "./dataset";
import * as location from 'expo-location'
import io from 'socket.io-client'
import useDeepLink from "./useDeepLink";
import Share, {Social} from 'react-native-share'






type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";



type nclient = {
email: string,
password: string
}

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
gender: string,
image: string,
}




type client = {
fname: string,
lname: string,
uname: string,
dob: string,
password: string,
email:string,
gender: string
}




type user = {
email:string,
password: string
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
setCredentials: (user:user) => void,
signUp: (client: client) => void,
verify: (code: string, path: string,id:string) => void,
display: string,
fgtdisplay: string,
backToLogIn: () => void,
backToForgot: () => void,
cemail: string,
isClient: boolean,
myClient: myClient,
errTxt: String,
seterrTxt: React.Dispatch<React.SetStateAction<string>>,
setdisplay: React.Dispatch<React.SetStateAction<string>>,
setfgtdisplay:React.Dispatch<React.SetStateAction<string>>,
api: AxiosInstance,
changePass: (client: nclient,id:string) => void,
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
setCredentials: (user: user) => {},
signUp: (client: client) => {},
verify: (code: string, path:string,id:string) => {},
display: '',
fgtdisplay: '',
backToLogIn: () => {},
backToForgot: () => {},
cemail:'',
isClient: false,
myClient: {
fname:'',
lname: '',
uname: '',
dob: '',
email:'',
gender: '',
image:''
},
errTxt: '',
seterrTxt: (value: React.SetStateAction<string>) => {},
setdisplay: (value: React.SetStateAction<string>) => {},
setfgtdisplay: (value: React.SetStateAction<string>) => {},
api: axios.create({}),
changePass: (client: nclient,id:string) => {},
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
shareArticle:(id:string, title:string) => {}
})








const socket = io('https://1add63c82721.ngrok-free.app')








export function AuthProvider ({children}:PropsWithChildren) {



let platform = ''

if (Platform.OS === 'ios') {

platform = 'ios'

} else if (Platform.OS === 'android') {

platform = 'android'

}






const [myClient, setmyClient] = useState({

image:'',
fname:'',
lname: '',
uname: '',
dob: '',
email:'',
gender:'',

})

useDeepLink()

const [selectedC, setSelectedC] = useState<c>({
name: 'Select Country',icon: 'wo'})
const [lang, setlang] = useState<langt>('en')
const [appLang, setappLang] = useState('en')
const [isloading, setisloading] = useState(false)
const [errTxt, seterrTxt] = useState('')
const [isClient, setisClient] = useState(false)
const [sessionID, setsessionID] = useState('') 
const [fgtdisplay, setfgtdisplay] = useState('')  
const [display, setdisplay] = useState('') 
const [cemail, setcemail]= useState('')   
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isSys, setIsSys] = useState(false)
const [isflag, setIsflag] = useState(false)
const [theme, setTheme] = useState('dark')
const [voice, setvoice] = useState('m')
const [list, setlist] = useState<props[]>([])
const router = useRouter()
const colorsch = useColorScheme()
let WIDTH = useWindowDimensions().width
let HEIGHT = useWindowDimensions().height

const [locationP, setlocationP] = useState<geo>({isEnable:false,isocode: '',city: '',region:'', country:''})


const [langset, setlangset] = useState<lang>({
lang:'English',lcode:'en',lcodex:'en-US',name:{male:'en-US-Chirp-HD-D',female:'en-US-Chirp3-HD-Aoede'}})

const [bot, setbot] = useState<abot>({lnamei:'',lcodex:'',codex:'',codei:langset.lcode,name:''})





const checkLocation = async () => {
let isON = await location.hasServicesEnabledAsync()

if (!isON) {
Alert.alert(multilingual.locationRequired[lang])
} else if (isON) {
setlocationP({...locationP, isEnable: isON})
}}






const getCurrentL = async () => {

let {status} = await location.requestForegroundPermissionsAsync()

if (status !== 'granted') {
Alert.alert(multilingual.permissionDenied[lang])
}

const {coords} = await location.getCurrentPositionAsync()

if (coords) {


const {latitude, longitude} = coords


let resp = await location.reverseGeocodeAsync({latitude, longitude})



setlocationP({isEnable:true, isocode:resp[0].isoCountryCode, city:resp[0].city, region:resp[0].region, country:resp[0].country})

}}




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

// await Share.open({
// message:`${title}....Read more ${deeplink}`,
// url:`${deeplink}`

// })

await Share.shareSingle({
      title: 'Share via WhatsApp',
      message:`${deeplink}`,
      social: Social.Email,
      
    });

} catch (err) {

console.log(err)
}


}





axios.defaults.withCredentials = true;

const api = axios.create({
baseURL:'https://1add63c82721.ngrok-free.app/',
headers:{
'Content-Type': 'application/json',
Authorization:`Bearer ${sessionID}`
}
})





const myInterceptor = api.interceptors.response.use((response) => {

return response
}, async (error) => {

const originalRequest = error.config


if (error.response.status === 401 ) {



try {

const resp = await api.post('/login/fresht', {token: sessionID})
const newToken = resp.data.token
setsessionID(newToken)

originalRequest.headers.Authorization = `Bearer ${newToken}`

return api(originalRequest)

} catch (err) {

LogOut()

}
}

})













const setStorage = async (themeObj:obj) => {

const json =  JSON.stringify(themeObj)
try {
await AsyncStorage.setItem('theme', json)

}catch(err) {
console.log(err)
}
}


const getStorage = async () => {

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








const toggleTheme = (newt:string) => {
setIsSys(false)
setTheme(newt)
const themeObj = {
currtheme: newt,
system: false
}
setStorage(themeObj)
}




const useSystem = () => {
if (colorsch) {
setIsSys(true)
setTheme(colorsch)
const themeObj = {
currtheme: colorsch,
system: true
}
setStorage(themeObj)
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








const setCredentials = async (user: user) => {
setisloading(true)

try {
const resp = await api.post('/login/home', {email:user.email, password:user.password})

setisClient(resp.data.isClient)

if (resp.data.isClient === true) {
setmyClient({
fname:resp.data.client.fname,
lname: resp.data.client.lname,
uname: resp.data.client.uname,
dob: resp.data.client.dob,
email:resp.data.client.email,
gender:resp.data.client.gender,
image:resp.data.client.image
})
} else if (resp.data.isClient === false) {
seterrTxt(multilingual.emailNotAuthorized[lang])
setisloading(false)
}


if (resp.data.authorize === false) {
setisloading(false)
seterrTxt(multilingual.wrongPassword[lang])
} else if (resp.data.authorize === true) {
setsessionID(resp.data.token)
LogIn()
}
} catch(err) {
console.log(err)
}
}








const signUp = async (client: client) => {
setdisplay('')
try {
const resp = await api.post('/login/signup', {fname:client.fname,lname:client.lname,uname:client.uname,password:client.password,email:client.email,dob:client.dob, gender:client.gender})
if (resp.data.message === 'success') {
router.replace({
pathname:'/verify',
params:{
from: 'signup'
}
})
setcemail(resp.data.email)
} else if (resp.data.message === 'fail') {
router.replace('/signup')
} else if (resp.data.message === 'already') {
Alert.alert(multilingual.emailExists[lang])
} 

} catch(err) {
console.log(err)
}
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







const changePass =  async (client: nclient, id:string)  => {

try{

const resp = await api.post('/data/update', {email: client.email, password:client.password})

setisClient(resp.data.isClient)

if (resp.data.isClient === false) {
seterrTxt(multilingual.emailNotAuthorized[lang])


} else if (resp.data.isClient === true) {
setcemail(resp.data.email)
router.replace({
pathname:'/verify',
params:{
from: 'forgot'
}
})
} 

if (resp.data.isReset === true) {

switch (id) {

case "en": 
setfgtdisplay(multilingual.passwordChanged.en)
break;

case "fr":
setfgtdisplay(multilingual.passwordChanged.fr)
break;

case "de": 
setfgtdisplay(multilingual.passwordChanged.de)
break;

case "ar":
setfgtdisplay(multilingual.passwordChanged.ar)
break;

case "es": 
setfgtdisplay(multilingual.passwordChanged.es)
break;

case "tr":
setfgtdisplay(multilingual.passwordChanged.tr)
break;

case "nl":
setfgtdisplay(multilingual.passwordChanged.nl)
break;


case "it":
setfgtdisplay(multilingual.passwordChanged.it)
break;

case "ja":
setfgtdisplay(multilingual.passwordChanged.ja)
break;

case "zh":
setfgtdisplay(multilingual.passwordChanged.zh)
break;

case "ko":
setfgtdisplay(multilingual.passwordChanged.ko)
break;

case "hi":
setfgtdisplay(multilingual.passwordChanged.hi)
break;

case "pt":
setfgtdisplay(multilingual.passwordChanged.pt)
break;

case "ru":
setfgtdisplay(multilingual.passwordChanged.ru)
break;

case "sw":
setfgtdisplay(multilingual.passwordChanged.sw)
break;

case "pl":
setfgtdisplay(multilingual.passwordChanged.pl)
break;

}


} else  if (resp.data.isReset === false){

switch (id) {

case "en": 
setfgtdisplay(multilingual.resetFailed.en)
break;

case "fr":
setfgtdisplay(multilingual.resetFailed.fr)
break;

case "de": 
setfgtdisplay(multilingual.resetFailed.de)
break;

case "ar":
setfgtdisplay(multilingual.resetFailed.ar)
break;

case "es": 
setfgtdisplay(multilingual.resetFailed.es)
break;

case "tr":
setfgtdisplay(multilingual.resetFailed.tr)
break;

case "nl":
setfgtdisplay(multilingual.resetFailed.nl)
break;


case "it":
setfgtdisplay(multilingual.resetFailed.it)
break;

case "ja":
setfgtdisplay(multilingual.resetFailed.ja)
break;

case "zh":
setfgtdisplay(multilingual.resetFailed.zh)
break;

case "ko":
setfgtdisplay(multilingual.resetFailed.ko)
break;

case "hi":
setfgtdisplay(multilingual.resetFailed.hi)
break;

case "pt":
setfgtdisplay(multilingual.resetFailed.pt)
break;

case "ru":
setfgtdisplay(multilingual.resetFailed.ru)
break;

case "sw":
setfgtdisplay(multilingual.resetFailed.sw)
break;

case "pl":
setfgtdisplay(multilingual.resetFailed.pl)
break;

}

} 


} catch(err) {
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






const getData = async () => {
try {
const resp = await api.get('/data/initdata')
const json = resp.data.json
setlist(json)
} catch (err) {
console.log(err)
}

}



const LogIn = () => {

if (locationP.isEnable === false) {
return Alert.alert(multilingual.locationRequired[lang])
} else if (locationP.isEnable === true) {
if (locationP.isocode) {getDefault(locationP.isocode,voice)}
setIsLoggedIn(true)
router.replace('/')
}

}






const LogOut = () => {

setisloading(false)
setIsLoggedIn(false)
setmyClient({fname:'',lname: '',uname: '',dob: '',email:'',gender: '',image: ''})
setisClient(false)
setsessionID('')
api.interceptors.response.eject(myInterceptor)
router.replace('/login')
}




const backToLogIn = () => {
setisClient(false)
router.replace('/login')
}





const backToForgot = () => {
router.replace({
pathname:'/forgot',
params:{
email:cemail
}
})
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










useEffect(() => {

try {

setlocationP({...locationP, isEnable:false})
getData()
getStorage()
checkLocation()
getCurrentL()

} catch(err) {
console.log(err)
}


},[])





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
<AuthContext.Provider value={{shareArticle,appLang,setappLang,socket,setmyClient,selectedC,locationP,setSelectedC,isloading,setisloading,platform,setItems,isflag,setbot,bot, voice, setdisplay, isLoggedIn,fgtdisplay,setfgtdisplay, LogIn, LogOut, listc, listp, lists, listt, category, data,theme,toggleTheme, useSystem, isSys, WIDTH, HEIGHT, setCredentials, signUp, verify, display, backToLogIn, cemail, isClient, myClient, errTxt, seterrTxt , api, changePass, backToForgot, setvoice,langset, setlangset,getlang}}>
{children}
</AuthContext.Provider>
)
}










