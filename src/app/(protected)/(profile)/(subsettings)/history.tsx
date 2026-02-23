

import { View, Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { typo,length } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'


type history = {
paidAt:string,
subCode:string,
amount:number
}





const history = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,appLang,myClient } = useContext(AuthContext)


const placeholder = theme === 'dark' ? require('../../../../../assets/images/emptydark.png') : 
require('../../../../../assets/images/emptylight.png')


const formatDisplayDate = (dateString:string, locale:string) => {

const date = new Date(dateString);

const dFormatter = new Intl.DateTimeFormat(locale, {
day: '2-digit',
month: 'short',
year: 'numeric',
});

const tFormatter = new Intl.DateTimeFormat(locale, {
hour: '2-digit',
minute: '2-digit',
hour12: false,
});

const datePart = dFormatter.format(date); 
const timePart = tFormatter.format(date);


return `${datePart} : ${timePart}`;
};





const Receipt = ({paidAt,amount,subCode}:history) => (
<View style={[styles.receipt,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.rolri}>

<View style={styles.riboxi}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{formatDisplayDate(paidAt,appLang.lcode)}</Text>
</View>

<View style={styles.riboxii}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{subCode}</Text>
</View>
</View>

<View style={styles.rolrii}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_5,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{"$"}{amount / 100}</Text>
</View>

</View>
)



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={[styles.cupB,{rowGap:typo.h1_5}]}>


<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Billing History</Text>

</View>
</View>

{
myClient.subCode !== "null" && (<View style={[styles.colB,{borderTopWidth:1,borderTopColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<FlatList contentContainerStyle={{width:'100%',height:'100%'}} horizontal={false} data={myClient.history} keyExtractor={Item => Item.paidAt}  
renderItem={({item}) => <Receipt paidAt={item.paidAt}  amount={item.amount} subCode={item.subCode}/> }/>

</View>)
}


{
myClient.subCode === "null" && (<View style={styles.colC}>

<View style={styles.box}>

<Image source={placeholder} contentFit='contain' style={{width:'35%',height:'30%'}} />

<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>You are currently on a free plan</Text>

</View>

</View>)
}

</View>

</View>
)
}

export default history




const styles = StyleSheet.create({
container:{
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
flex:1
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%'
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:'column',
},

colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'7%',
flexDirection:'row',
},

rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'86%',
height:'100%',

},


colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'93%',
},


colC:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'93%',

},

box:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'column',
rowGap:20
},


receipt:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:65,
flexDirection:'row',
},


rolri:{
justifyContent:'center',
alignItems:'center',
width:'80%',
height:'90%',
flexDirection:'column'
},

riboxi:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},


riboxii:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'60%',
},


rolrii:{
justifyContent:'center',
alignItems:'flex-end',
width:'20%',
height:'90%',
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