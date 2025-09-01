
import React,{createContext,useState, PropsWithChildren, useEffect} from "react";
import {  useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, Alert, Platform} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios'
import { data, category } from "./dataset";
import * as location from 'expo-location'
import io from 'socket.io-client'



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
pl:string

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
verify: (code: string, path: string) => void,
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
changePass: (client: nclient) => void,
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
verify: (code: string, path:string) => {},
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
changePass: (client: nclient) => {},
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
})








const socket = io('https://fb6e51a506d3.ngrok-free.app')








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


const [selectedC, setSelectedC] = useState<c>({
name: 'Select Country',icon: 'wo'})

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
Alert.alert('Location Service required', 'Please enable your location and grant access when prompted')
} else if (isON) {
setlocationP({...locationP, isEnable: isON})
}}






const getCurrentL = async () => {

let {status} = await location.requestForegroundPermissionsAsync()

if (status !== 'granted') {
Alert.alert('Permission Denied!', 'Allow app to use your location for adequate performance.')
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


setSelectedC({name:'Select Country', icon:'wo'})


if (voice === 'm') {

setbot({codex:langset.lcodex, name:langset.name.male, codei:langset.lcode, lnamei:langset.name.male, lcodex:langset.lcodex,})

} else if (voice === 'f') {

setbot({codex:langset.lcodex, name:langset.name.female, codei:langset.lcode, lnamei:langset.name.female, lcodex:langset.lcodex,})

}
}

}















axios.defaults.withCredentials = true;

const api = axios.create({
baseURL:'https://fb6e51a506d3.ngrok-free.app/',
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
seterrTxt('This Email Address is not yet Authorized! please create new account then try again.')
setisloading(false)
}


if (resp.data.authorize === false) {
setisloading(false)
seterrTxt('Wrong Password! kindly click on forgot Password to set new digits.')
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
Alert.alert('email already exists!')
} 

} catch(err) {
console.log(err)
}
}









const verify = async (code: string, path:string ) => {
setisloading(true)
try {
const resp = await api.post(path, {code: code})
if (resp.data.verify === true) {
setdisplay('Success!')
setisloading(false)
} else if (resp.data.verify === false) {
setdisplay('Invalid Code!')
setisloading(false)
}
} catch (err) {
console.log(err)
}
}







const changePass =  async (client: nclient)  => {

try{


const resp = await api.post('/data/update', {email: client.email, password:client.password})

setisClient(resp.data.isClient)

if (resp.data.isClient === false) {
seterrTxt('This Email Address is not Registered!')


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
setfgtdisplay('Password Changed Successfully!')
} else  if (resp.data.isRest === false){setfgtdisplay('Reset Failed. try Again!')}


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
return Alert.alert('Location Required', 'please enable location')
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











useEffect(() => {

setlocationP({...locationP, isEnable:false})
getData()
getStorage()
checkLocation()
getCurrentL()
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







return (
<AuthContext.Provider value={{appLang,setappLang,socket,setmyClient,selectedC,locationP,setSelectedC,isloading,setisloading,platform,setItems,isflag,setbot,bot, voice, setdisplay, isLoggedIn,fgtdisplay,setfgtdisplay, LogIn, LogOut, listc, listp, lists, listt, category, data,theme,toggleTheme, useSystem, isSys, WIDTH, HEIGHT, setCredentials, signUp, verify, display, backToLogIn, cemail, isClient, myClient, errTxt, seterrTxt , api, changePass, backToForgot, setvoice,langset, setlangset}}>
{children}
</AuthContext.Provider>
)
}










