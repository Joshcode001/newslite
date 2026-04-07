

import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '../utils/authContext'
import { useRouter } from 'expo-router'
import { Colors } from '../utils/color'
import { typo } from '../utils/typo'
import { Image } from 'expo-image'
import DatePicker from 'react-native-date-picker'
import { lingual } from '../utils/dataset'
import AppIcon from './AppIcons'





type cat = {
show:string,
send:string
}


type tops = {
setshowModal:React.Dispatch<React.SetStateAction<boolean>>,
setaction:React.Dispatch<React.SetStateAction<string>>,
country:cat,
livecategory:cat
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl"





const SearchTime = ({setshowModal,setaction,country,livecategory}:tops) => {


const router = useRouter()
const { theme,appLang,isloading,setisloading,liveCount,showToast,myClient,roomKey,socket,getlang } = useContext(AuthContext)
const [ showDate,setshowDate ] = useState(false)
const [fromDate,setfromDate] = useState<cat>({show:'null',send:'null'})
const [toDate,settoDate] = useState<cat>({show:'null',send:'null'})
const [option,setoption] = useState('')
const [showLoad, setshowLoad] = useState(false)
const [lang, setlang] = useState<langt>('en')




const placeholderL = theme === 'dark' ? 'locationdark' : 'locationlight'
const placeholderC = theme === 'dark' ? 'categorydark': 'categorylight'
const placeholderA = theme === 'dark' ? 'arrowdowndark' : 'arrowdownlight'




const showCountry = () => {

if(isloading)return

setaction('showCountry')
setshowModal(true)
}


const showCategory = () => {

if(isloading)return
setaction('showCategory')
setshowModal(true)
}


const formatToISO = (date:Date) => {

const year = date.getFullYear();

const month = String(date.getMonth() + 1).padStart(2, '0');

const day = String(date.getDate()).padStart(2, '0');

return `${year}-${month}-${day}`;
};


const formatToSHO = (date:Date,locale:string) => {

const dFormatter = new Intl.DateTimeFormat(locale, {
day: '2-digit',
month: 'short',
year: 'numeric',
});

const result = dFormatter.format(date)

return result
}


const handleFrom = () => {
if(showDate || isloading)return

setshowDate(true)
setoption('from')
}

const handleTo = () => {
if(showDate || isloading)return

setshowDate(true)
setoption('to')
}


const fixBlock = (date:Date) => {

setshowDate(false)

switch (true) {

case (option === 'from'):

const forShow = formatToSHO(date,appLang.lcode)
const forSend = formatToISO(date)
setfromDate({ show:forShow,send:forSend })
break;


case (option === 'to'):

const forShowB = formatToSHO(date,appLang.lcode)
const forSendB = formatToISO(date)
settoDate({ show:forShowB,send:forSendB })
break;

}

}



const SearchTime = () => {

switch (true) {

case (myClient.subCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveCount === 0):

const toastB = {type:'customError',name:myClient.fname,info:lingual.limitReach[lang],onHide:() => {}, visibilityTime:4000}
showToast(toastB)
break;


case (myClient.subCode !== 'null' && liveCount > 0):

if (isloading || showLoad) return
if (country.send === "null" || fromDate.send === 'null' || toDate.send === 'null'|| livecategory.send === 'null') return

setisloading(true)
setshowLoad(true)

const data = { rkey:roomKey,userId:myClient.uname,country:country.send,fromDate:fromDate.send,toDate:toDate.send,category:livecategory.send }

socket.emit('SearchTime',data)

}

}


useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



return (
<View style={styles.container}>

<View style={styles.parta}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>Search by Timeframe</Text>
</View>

<View style={styles.partb}>

<View style={styles.poda}>

<View style={styles.rola}>
<AppIcon name={placeholderL} size={25} />
</View>

<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>
Location</Text>
</View>

</View>

<TouchableOpacity onPress={showCountry} style={[styles.podb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.rolla}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.faintText : 
Colors.light.faintText}]}>{country.show === 'null' ? 'Select Country' : country.show}</Text>
</View>

<View style={styles.rollb}>
<AppIcon name={placeholderA} size={25} />
</View>

</TouchableOpacity>

</View>

<View style={styles.partc}>

<View style={styles.poda}>

<View style={styles.rola}>
<AppIcon name='calendar' size={25} />
</View>

<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>
Timeframe</Text>
</View>

</View>


<View style={styles.podc}>

<TouchableOpacity onPress={handleFrom} style={[styles.jani,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.rolla}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.faintText : 
Colors.light.faintText}]}>{fromDate.show === 'null'? 'From' :fromDate.show }</Text>
</View>

<View style={styles.rollb}>
<AppIcon name={placeholderA} size={25} />
</View>
</TouchableOpacity>

<TouchableOpacity onPress={handleTo}  style={[styles.jani,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.rolla}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.faintText : 
Colors.light.faintText}]}>{toDate.show === 'null' ? 'To' : toDate.show}</Text>
</View>

<View style={styles.rollb}>
<AppIcon name={placeholderA} size={25} />
</View>
</TouchableOpacity>

</View>

</View>

<View style={styles.partd}>

<View style={styles.poda}>

<View style={styles.rola}>
<AppIcon name={placeholderC} size={25} />
</View>

<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>
Category</Text>
</View>

</View>

<TouchableOpacity onPress={showCategory} style={[styles.podb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : 
Colors.light.border}]}>

<View style={styles.rolla}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.faintText : 
Colors.light.faintText}]}>{livecategory.show === 'null' ?  'Select Category' : livecategory.show}</Text>
</View>

<View style={styles.rollb}>
<AppIcon name={placeholderA} size={25} />
</View>

</TouchableOpacity>

</View>

<View style={styles.parte}>
<TouchableOpacity onPress={SearchTime}
style={[styles.button,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn}]}>

{
showLoad ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary} /> ): (<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color: 
Colors.light.primary }]}>Search</Text>)
}

</TouchableOpacity>
</View>



<DatePicker minimumDate={new Date('2022-01-01')} maximumDate={new Date()} theme={theme === 'dark' ? 'dark' : 'light'} mode='date' 
date={new Date('2022-01-01')} modal open={showDate} onCancel={() => setshowDate(false)} onConfirm={date => fixBlock(date)}  />

</View>
)
}

export default SearchTime







const styles = StyleSheet.create({
container:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

parta:{
width:'90%',
height:'10%',
justifyContent:'flex-end',
alignItems:'flex-start',
flexDirection:"column"
},


partb:{
width:'90%',
height:'25%',
justifyContent:'center',
alignItems:'flex-start',
},


partc:{
width:'90%',
height:'25%',
justifyContent:'center',
alignItems:'flex-start',
},



partd:{
width:'90%',
height:'25%',
justifyContent:'center',
alignItems:'flex-start',
},


parte:{
width:'90%',
height:'15%',
justifyContent:'center',
alignItems:'flex-end',
},

poda:{
width:'100%',
height:'50%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},


podb:{
width:'100%',
height:'50%',
justifyContent:'center',
alignItems:'center',
borderBottomWidth:2,
flexDirection:'row'
},

podc:{
width:'100%',
height:'50%',
justifyContent:'space-between',
alignItems:'center',
flexDirection:'row'
},

jani:{
width:'43%',
height:'100%',
justifyContent:'space-between',
alignItems:'center',
flexDirection:'row',
borderBottomWidth:2
},



rola:{
width:'8%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},


rolb:{
width:'92%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},


rolla:{
width:'80%',
height:'90%',
justifyContent:'center',
alignItems:'flex-start',
paddingLeft:5
},

rollb:{
width:'20%',
height:'90%',
justifyContent:'center',
alignItems:'flex-end',
},


button:{
width:'30%',
height:'70%',
justifyContent:'center',
alignItems:'center',
},



textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT700: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:700,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},

})