import React,{createContext,useState, PropsWithChildren, useEffect} from "react";
import { useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, Alert, Platform} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios'





type nclient = {
email: string,
password: string
}




type myClient = {
fname:string,
lname: string,
uname: string,
dob: string,
email:string,
gender: string
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
item: string,
color: string
}

type dat = {
name: string,
icon: string
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
platform: string

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
gender: ''
},
errTxt: '',
seterrTxt: (value: React.SetStateAction<string>) => {},
setdisplay: (value: React.SetStateAction<string>) => {},
setfgtdisplay: (value: React.SetStateAction<string>) => {},
api: axios.create({}),
changePass: (client: nclient) => {},
platform: ''
})








export function AuthProvider ({children}:PropsWithChildren) {



let platform = ''

if (Platform.OS === 'ios') {

platform = 'ios'

} else if (Platform.OS === 'android') {

platform = 'android'

}



const [myClient, setmyClient] = useState({
fname:'',
lname: '',
uname: '',
dob: '',
email:'',
gender:''
})

const [errTxt, seterrTxt] = useState('')
const [isClient, setisClient] = useState(false)
const [sessionID, setsessionID] = useState('') 
const [fgtdisplay, setfgtdisplay] = useState('')  
const [display, setdisplay] = useState('') 
const [cemail, setcemail]= useState('')   
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isSys, setIsSys] = useState(false)
const [theme, setTheme] = useState('dark')
const [list, setlist] = useState<props[]>()
const router = useRouter()
const colorsch = useColorScheme()
let WIDTH = useWindowDimensions().width
let HEIGHT = useWindowDimensions().height








axios.defaults.withCredentials = true;

const api = axios.create({
baseURL:'https://598de130f5df.ngrok-free.app/',
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




const category:item[] = [{
item:'business',
color:'#052214'
},
{
item:'crime',
color:'#250434'
},
{
item:'domestic',
color:'#16212B'
},
{
item:'education',
color:'#322E07'
},
{
item:'entertainment',
color:'#391248'
},
{
item:'environment',
color:'#09037D'
},
{
item:'food',
color:'#7D0A03'
},
{
item:'health',
color:'#7D0360'
},
{
item:'lifestyle',
color:'#696200'
},
{
item:'politics',
color:'#00c5ff'
},
{
item:'science',
color:'#ffa5f2'
},
{
item:'sports',
color:'#7765c1'
},
{
item:'technology',
color:'#5f5f00'
},
{
item:'tourism',
color:'#ff76d9'
},
]


const data:dat[] = [
{name: 'NIGERIA', icon: 'ng'},
{name: 'UNITED STATES', icon: 'us'},
{name: 'UNITED KINGDOM', icon: 'gb'},
{name: 'UNITED ARAB EMIRATES', icon: 'ae'},
{name: 'ARGENTINA', icon: 'ar'},
{name: 'AUSTRALIA', icon: 'au'},
{name: 'BELGIUM', icon: 'be'},
{name: 'BRAZIL', icon: 'br'},
{name: 'CAMEROON', icon: 'cm'},
{name: 'CANADA', icon: 'ca'},
{name: 'CHINA', icon: 'cn'},
{name: 'COTE D IVOIRE', icon: 'ci'},
{name: 'EGYPT', icon: 'eg'},
{name: 'FRANCE', icon: 'fr'},
{name: 'GABON', icon: 'ga'},
{name: 'GERMANY', icon: 'de'},
{name: 'GHANA', icon: 'gh'},
{name: 'INDIA', icon: 'in'},
{name: 'ISRAEL', icon: 'il'},
{name: 'ITALY', icon: 'it'},
{name: 'JAMAICA', icon: 'jm'},
{name: 'JAPAN', icon: 'jp'},
{name: 'KENYA', icon: 'ke'},
{name: 'MALI', icon: 'ml'},
{name: 'MEXICO', icon: 'mx'},
{name: 'MONACO', icon: 'mc'},
{name: 'MOROCCO', icon: 'ma'},
{name: 'NETHERLANDS', icon: 'nl'},
{name: 'NORWAY', icon: 'no'},
{name: 'PORTUGAL', icon: 'pt'},
{name: 'QATAR', icon: 'qa'},
{name: 'RUSSIA', icon: 'ru'},
{name: 'PHILIPPINES', icon: 'ph'},
{name: 'SAUDI ARABIA', icon: 'sa'},
{name: 'SENEGAL', icon: 'sn'},
{name: 'NEW ZEALAND', icon: 'nz'},
{name: 'SINGAPORE', icon: 'sg'},
{name: 'SOUTH AFRICA', icon: 'za'},
{name: 'SPAIN', icon: 'es'},
{name: 'SWEDEN', icon: 'se'},
{name: 'SWITZERLAND', icon: 'ch'},
{name: 'TANZANIA', icon: 'tz'},
{name: 'TOGO', icon: 'tg'},
{name: 'UGANDA', icon: 'ug'},
{name: 'ZIMBABWE', icon: 'zw'},
{name: 'ZAMBIA', icon: 'zm'},
{name: 'URUGUAY', icon: 'uy'},
{name: 'UKRAINE', icon: 'ua'},
{name: 'THAILAND', icon: 'th'},
{name: 'SIERRA LEONE', icon: 'sl'},

]












const setCredentials = async (user: user) => {


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
gender:resp.data.client.gender
})
} else if (resp.data.isClient === false) {
seterrTxt('This Email Address is not yet Authorized! please create new account then try again.')
}


if (resp.data.authorize === false) {

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
try {
const resp = await api.post(path, {code: code})
if (resp.data.verify === true) {
setdisplay('Success!')
} else if (resp.data.verify === false) {
setdisplay('Invalid Code!')
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
setIsLoggedIn(true)
router.replace('/')
}






const LogOut = () => {

setIsLoggedIn(false)
setmyClient({
fname:'',
lname: '',
uname: '',
dob: '',
email:'',
gender: ''
})
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



useEffect(() => {
getData()
getStorage()
},[])


useEffect(() => {
if (isSys) {
useSystem()
}


},[colorsch])



return (
<AuthContext.Provider value={{platform,setdisplay, isLoggedIn,fgtdisplay,setfgtdisplay, LogIn, LogOut, listc, listp, lists, listt, category, data,theme,toggleTheme, useSystem, isSys, WIDTH, HEIGHT, setCredentials, signUp, verify, display, backToLogIn, cemail, isClient, myClient, errTxt, seterrTxt , api, changePass, backToForgot}}>
{children}
</AuthContext.Provider>
)
}










