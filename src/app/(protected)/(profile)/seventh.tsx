


import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import React, {useState, useContext,useEffect} from 'react'
import { ActiveColors } from '@/src/utils/color';
import { AuthContext } from '@/src/utils/authContext';
import { multilingual } from '@/src/utils/dataset';
import { useRouter } from 'expo-router';







type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";








const seventh = () => {

const [lang, setlang] = useState<langt>('en')
const [amount, setamount] = useState('m')
const {theme,getlang,appLang,api,myClient} = useContext(AuthContext)
const router = useRouter()



const initiatePay =  async (email:string,amount:string) => {

if (!email || !amount) return;

const resp = await api.post('/data/payment', {email,amount})

if (resp) {

const item = await resp.data.url

router.push({
pathname:'/webview',
params:{
url:item
}
})




}

}







useEffect(() => {

getlang(appLang,setlang)

},[appLang])















return (
<View style={style.container}>


<View style={[style.boxone,{backgroundColor:theme === 'dark' ? ActiveColors.dark.ablue : ActiveColors.light.ablue}]}>
<View style={style.colone}>
<Text style={{color:'white', fontSize:20}}>{multilingual.GetPremium[lang]}</Text>
<MaterialIcons name="workspace-premium" size={20} color="gold" />
</View>
<View style={style.coltwo}>
<Text style={{color:'white', fontSize:17}}>{multilingual.Exclusive[lang]}</Text>
</View>
</View>


<View style={style.boxtwo}>
<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.iiCountries[lang]}</Text>
</View>

<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.iiiCategory[lang]}</Text>
</View>



<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.SearchName[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.SearchCities[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.SearchNews[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.WatchLive[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.Sharethought[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.Translatelanguage[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.ListenNews[lang]}</Text>
</View>


<View style={style.value}>
<MaterialCommunityIcons name="check-decagram" size={24} color="green" />
<Text style={{color:'black', fontSize:16}}>{multilingual.TranslateComment[lang]}</Text>
</View>
</View>



<View style={style.boxthree}>


<View style={style.firstcol}>

<View style={[style.pack,{borderWidth:amount ==='m' ? 6:1}]}>
<TouchableOpacity onPress={() => setamount('m')}>
<View style={style.coli}>
<Fontisto name="shopping-package" size={24} color="#7c0980" />
{
(amount === 'm') ? (<FontAwesome5 name="dot-circle" size={24} color="brown" />):
(<FontAwesome5 name="circle" size={24} color="black" />)
}
</View>
<View style={style.colii}>
<View style={style.rolone}>
<View style={style.cola}>
<Text style={{color:'black', fontSize:24, fontWeight:900}}>$15.99</Text>
</View>
<View style={style.colb}>
<Text style={{color:'black', fontSize:15, fontWeight:'light'}}>{multilingual.permonth[lang]}</Text>
</View>
</View>
<View style={style.roltwo}></View>
</View>
</TouchableOpacity>
</View>


<View style={[style.pack,{borderWidth:amount ==='y' ? 6:1}]}>
<TouchableOpacity onPress={() => setamount('y')}>
<View style={style.coli}>
<Fontisto name="shopping-package" size={24} color="#7c0980" />
{
(amount === 'y') ? (<FontAwesome5 name="dot-circle" size={24} color="brown" />):
(<FontAwesome5 name="circle" size={24} color="black" />)
}
</View>


<View style={style.colii}>
<View style={style.rolone}>
<View style={style.cola}>
<Text style={{color:'black', fontSize:24, fontWeight:900}}>$144.99</Text>
</View>
<View style={style.colb}>
<Text style={{color:'black', fontSize:15, fontWeight:'light'}}>{multilingual.peryear[lang]}</Text>
</View>
</View>
<View style={style.roltwo}>
<View style={style.promo}>
<Text style={{color:'azure', fontSize:15, fontWeight:'light'}}>-20%</Text>
</View>
</View>
</View>
</TouchableOpacity>
</View>
</View>


<View style={style.secondcol}>
<View style={style.buton}>
<TouchableOpacity onPress={() => initiatePay(myClient.email,"2000")}>
<Text style={style.btext}>{multilingual.Subscribe[lang]}</Text>
</TouchableOpacity>
</View>
</View>
</View>
</View>
)






}

export default seventh








const style = StyleSheet.create({

container: {
flex:1,
backgroundColor: 'white',
width: "100%",
height:"100%",
justifyContent:'center',
alignContent:'center'
},

boxone: {
flex:1,
flexDirection:'column',
width: "100%",
justifyContent:'center',
alignItems:'center'
},

boxtwo: {
flex:6,
flexDirection:'column',
width: "100%",
justifyContent:'space-evenly',
alignItems:'center'
},

boxthree: {
flex:3,
backgroundColor: 'brown',
width: "100%",
justifyContent:'center',
alignItems:'center'
},

colone: {
height:"30%",
width: "80%",
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
columnGap:12
},


coltwo: {
height:"70%",
width: "100%",
justifyContent:'center',
alignItems:'center',
padding:9
},

value: {
flexDirection:'row',
columnGap:7,
width: "100%",
height:30,
justifyContent:'flex-start',
alignItems:'center',
paddingLeft:12,
},

firstcol: {
height:"65%",
width: "100%",
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
columnGap:10,
backgroundColor:'white'
},

secondcol: {
height:"35%",
width: "100%",
justifyContent:'center',
alignItems:'center',
backgroundColor:'white'
},

pack: {
height:"80%",
width: "43%",
justifyContent:'center',
alignItems:'center',
borderColor:'brown',
borderRadius:15
},

coli: {
height:"40%",
width: "100%",
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
columnGap:103
},


colii: {
height:"60%",
width: "100%",
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

rolone: {
height:'100%',
width:'60%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

roltwo: {
height:'100%',
width:'40%',
justifyContent:'flex-end',
alignItems:'flex-end',
},

cola: {
height:'60%',
width:'100%',
justifyContent:'center',
alignItems:'flex-start',
paddingLeft:9
},

colb: {
height:'40%',
width:'100%',
justifyContent:'center',
alignItems:'flex-start',
paddingLeft:9
},

promo: {
width:58,
height:28,
borderRadius:'24%',
backgroundColor:'red',
justifyContent:'center',
alignItems:'center',
marginRight:7,
marginBottom:7
},

buton: {
width:'80%',
height:'75%',
borderRadius:'5%',
backgroundColor:'#287a02',
justifyContent:'center',
alignItems:'center',
},

btext: {
color:'white',
fontWeight:900,
fontSize:22,
textAlign:'center'
}









})