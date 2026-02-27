

import { View,Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { useRouter } from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { typo } from '@/src/utils/typo'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import PremiumView from '@/src/components/PremiumView'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons';





const billing = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,socket,roomKey,myClient,setisloading,isloading,appLang } = useContext(AuthContext)
const [amount, setamount] = useState('m')
const [date,setdate] = useState<Date>(new Date())


const placeholderA = theme === 'dark'? require('../../../../../assets/images/dollardark.png') : 
require('../../../../../assets/images/dollarlight.png')

const placeholderB = theme === 'dark'? require('../../../../../assets/images/cardsdark.png') : 
require('../../../../../assets/images/cardslight.png')




const handlePay =  () => {

setisloading(true)
const data = { email:myClient.email,amount,rkey:roomKey, }
socket.emit('payment', data)
}



function getNextDate(paidAt:string, amount:number) {

if (!paidAt&& !amount) return

const date = new Date(paidAt);
let day = date.getUTCDate();
let month = date.getUTCMonth();
let year = date.getUTCFullYear();


if (day > 28) {
day = 28;
}

if (amount === 1800) {

const nextDate = new Date(Date.UTC(year, month + 1, day));
return nextDate;

} else if (amount === 19500) {

const nextDate = new Date(Date.UTC(year + 1, month, day));
return nextDate;
}
}



const formatDate = (d:Date,locale:string) => {
return new Intl.DateTimeFormat(locale, { 
day: '2-digit',
month: 'long',
year: 'numeric',
}).format(d);
};







useEffect(() => {

socket.on('pay',(data:any) => {

setisloading(false)

router.push({pathname:'/(protected)/(profile)/(subsettings)/webview',params:{ url:data.url }})

})

},[socket])


useEffect(() => {

if (myClient.subCode !== "null"){

const data = myClient.history

if (data){

const { paidAt,amount } = data[data.length - 1]

const object = getNextDate(paidAt,amount)

if (object) {
setdate(object)
}

}


}

},[myClient])



return (
<View 
style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,rowGap:typo.h2}]}>

<View style={[styles.cupA,{borderBottomRightRadius:typo.h2,borderBottomLeftRadius:typo.h2}]}>

<PremiumView>
<View style={styles.colA}></View>

<View style={[styles.colB,{rowGap:typo.h2}]}>

<View style={styles.xbox}>

<View style={styles.xboxa}>

<TouchableOpacity onPress={() => router.back()} style={styles.rowa}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={Colors.light.primary } />
</TouchableOpacity>

<View style={styles.rowb}></View>

<View style={styles.rowc}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:Colors.light.primary}]}>Premium</Text>
</View>

</View>

<View style={styles.xboxb}>
<Text allowFontScaling={false} style={[styles.textR400,{color:Colors.light.primary,fontSize:typo.h3}]}>
Enhance your reading experience</Text>
</View>

</View>


<View style={styles.ybox}>

<View style={styles.yboxa}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:Colors.light.primary}]}>Features</Text>
</View>

<View style={[styles.yboxb,{rowGap:typo.h8}]}>

<View style={styles.ybline}>

<View style={styles.yba}>
<Image source={require('../../../../../assets/images/pointer.png')} style={{width:'40%',height:'60%'}} contentFit='contain'  />
</View>

<View style={styles.ybb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:Colors.light.primary}]}>
Access to News from 110+ countries </Text>
</View>

</View>

<View style={styles.ybline}>
<View style={styles.yba}>
<Image source={require('../../../../../assets/images/pointer.png')} style={{width:'40%',height:'60%'}} contentFit='contain'  />
</View>

<View style={styles.ybb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:Colors.light.primary}]}>
Access to Global Search </Text>
</View>
</View>

<View style={styles.ybline}>
<View style={styles.yba}>
<Image source={require('../../../../../assets/images/pointer.png')} style={{width:'40%',height:'60%'}} contentFit='contain'  />
</View>

<View style={styles.ybb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:Colors.light.primary}]}>
Comment on News Articles</Text>
</View>
</View>

<View style={styles.ybline}>
<View style={styles.yba}>
<Image source={require('../../../../../assets/images/pointer.png')} style={{width:'40%',height:'60%'}} contentFit='contain'  />
</View>

<View style={styles.ybb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:Colors.light.primary}]}>
AI Read Aloud </Text>
</View>
</View>

<View style={styles.ybline}>
<View style={styles.yba}>
<Image source={require('../../../../../assets/images/pointer.png')} style={{width:'40%',height:'60%'}} contentFit='contain'  />
</View>

<View style={styles.ybb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:Colors.light.primary}]}>
Translate News to 22+ languages </Text>
</View>
</View>

<View style={styles.ybline}>
<View style={styles.yba}>
<Image source={require('../../../../../assets/images/pointer.png')} style={{width:'40%',height:'60%'}} contentFit='contain'  />
</View>

<View style={styles.ybb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:Colors.light.primary}]}>
Engagement Archive</Text>
</View>
</View>

</View>

</View>

<View style={styles.zbox}>

<View style={styles.zba}>

<View style={styles.zbrowi}>

{
myClient.subCode === "null" && (<View style={[styles.zbbox,{backgroundColor:Colors.light.border,borderRadius:typo.h6}]}>

<TouchableOpacity onPress={() => setamount('m')} 
style={[styles.zboxy,amount === 'm' && {borderRadius:typo.h6,borderWidth:1,backgroundColor:Colors.dark.primary}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:amount === 'm'?  Colors.light.border : 
Colors.dark.primary }]}>Monthly</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setamount('y')} 
style={[styles.zboxz,amount === 'y' && {borderRadius:10,borderWidth:1,backgroundColor:Colors.dark.primary,columnGap:10}]}>

<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:amount === 'y'?  Colors.light.border : 
Colors.dark.primary}]}>Yearly</Text>

<View style={[styles.zzbox,{backgroundColor:Colors.dark.Activebtn}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h6,color:Colors.light.primary}]}>10% off</Text>

</View>

</TouchableOpacity>

</View>)
}

</View>

<View style={styles.zbrowii}>
{
myClient.subCode !== "null" && (<Text allowFontScaling={false} 
style={[styles.textB700,{fontSize:typo.h1_5,color:Colors.light.border}]}>
{'$'}{myClient.history[myClient.history.length - 1].amount / 100}</Text>)
}

{
myClient.subCode === "null" && (<Text allowFontScaling={false} 
style={[styles.textB700,{fontSize:typo.h1_5,color:Colors.light.border}]}>
{amount === 'm' ? '$18' : '$195'}</Text>)
}
</View>

</View>

{
myClient.subCode === 'null' && (<View style={styles.zbb}>

{
isloading ? (<View  style={[styles.bzbox,{backgroundColor:Colors.dark.Activebtn,borderRadius:typo.h4}]}>
<ActivityIndicator size={typo.h4} color={Colors.light.primary}  />
</View>) :
(<TouchableOpacity onPress={handlePay} style={[styles.bzbox,{backgroundColor:Colors.dark.Activebtn,borderRadius:typo.h4}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.light.primary}]}>Get Full Access</Text>
</TouchableOpacity>)
}

</View>)
}


{
myClient.subCode !== 'null' && (<View style={styles.zbb}>
<View style={[styles.bzboxz,{backgroundColor:Colors.light.border,columnGap:typo.h6,borderRadius:typo.h4}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.light.Activebtn}]}>Active</Text>
<Ionicons name="checkmark-done" size={typo.h2} color={Colors.dark.trash} />
</View>
</View>)
}



{
myClient.subCode !== "null" && (<View style={styles.zbc}>

<View style={styles.zcboxi}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color:Colors.light.border}]}>Active till</Text>
</View>

<View style={styles.zcboxii}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color:Colors.light.border}]}>
{formatDate(date,appLang.lcode)}</Text>
</View>

</View>)
}

</View>

</View>
</PremiumView>



</View>


<View style={[styles.cupB,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<TouchableOpacity onPress={()=> router.push({pathname:'/(protected)/(profile)/(subsettings)/history'})}
style={[styles.bcol,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.rolbi}>
<Image source={placeholderA} style={{width:'50%',height:'70%'}} contentFit='contain' />
</View>

<View style={styles.rolbii}>

<View style={styles.rbcol}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.secondary : 
Colors.dark.primary}]}>Billing</Text>
</View>

<View style={styles.rbcol}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.secondary : 
Colors.dark.primary}]}>Track Billing History</Text>
</View>

</View>


</TouchableOpacity>

<TouchableOpacity onPress={()=> router.push({pathname:'/(protected)/(profile)/(subsettings)/cards'})}  style={styles.bcol}>

<View style={styles.rolbi}>
<Image source={placeholderB} style={{width:'50%',height:'70%'}} contentFit='contain' />
</View>

<View style={styles.rolbii}>

<View style={styles.rbcol}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.secondary : 
Colors.dark.primary}]}>Cards</Text>
</View>

<View style={styles.rbcol}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.secondary : 
Colors.dark.primary}]}>Manage Subscription</Text>
</View>

</View>

</TouchableOpacity>

</View>


</View>
)
}

export default billing







const styles = StyleSheet.create({
container:{
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',

},



cupA:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'92%',
height:'67%',
},



colA:{
width:'100%',
height:'13%',
justifyContent:'center',
alignItems:'center',
},


colB:{
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
width:'100%',
height:'87%',
},


xbox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'100%',
height:'16%',
},


xboxa:{
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
width:'100%',
height:'65%',
},

rowa:{
justifyContent:'center',
alignItems:'center',
width:'10%',
height:'100%',
},

rowb:{
justifyContent:'center',
alignItems:'center',
width:'25%',
height:'100%',
},


rowc:{
justifyContent:'center',
alignItems:'flex-start',
width:'65%',
height:'100%',
},


xboxb:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'35%',
},



ybox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'100%',
height:'50%',
},

yboxa:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'12%',
},

yboxb:{
justifyContent:'flex-start',
alignItems:'center',
width:'97%',
height:'88%',
flexDirection:'column',
},


ybline:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'12%',
flexDirection:'row',
},

yba:{
justifyContent:'center',
alignItems:'center',
width:'10%',
height:'100%',
},


ybb:{
justifyContent:'center',
alignItems:'flex-start',
width:'90%',
height:'100%',
},




zbox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'100%',
height:'25%',
},

zba:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'35%',
flexDirection:'row'
},

zbrowi:{
justifyContent:'center',
alignItems:'flex-start',
width:'78%',
height:'100%',
},

zbrowii:{
justifyContent:'center',
alignItems:'flex-end',
width:'22%',
height:'100%',
},

zbbox:{
justifyContent:'center',
alignItems:'center',
width:'70%',
height:'78%',
borderWidth:1,
flexDirection:'row',
},


zbb:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'40%',
},


bzbox:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'80%',
borderWidth:1
},


bzboxz:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'80%',
borderWidth:1,
flexDirection:'row',
},



zbc:{
justifyContent:'space-between',
alignItems:'flex-start',
width:'93%',
height:'15%',
flexDirection:'row'
},


zcboxi:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'40%',
height:'100%',
},

zcboxii:{
justifyContent:'flex-end',
alignItems:'flex-end',
width:'60%',
height:'100%',
},


cupB:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'90%',
height:'13%',
},

bcol:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row'
},

rolbi:{
justifyContent:'center',
alignItems:'center',
width:'14%',
height:'100%',
},

rolbii:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},

rbcol:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'50%',
},




zboxy:{
justifyContent:'center',
alignItems:'center',
width:'43%',
height:'90%',
},


zboxz:{
justifyContent:'space-evenly',
alignItems:'center',
width:'54%',
height:'90%',
flexDirection:'row',
},

zzbox:{
justifyContent:'center',
alignItems:'center',
width:'48%',
height:'58%',
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