

import { View, Text,StyleSheet,TouchableOpacity,Modal,FlatList} from 'react-native'
import React,{useContext, useEffect,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CountryFlag from "react-native-country-flag";
import { app_data } from '@/src/utils/dataset';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';


type langtag = {
code:string,
name:string
}

type lgtag = {
code:string,
name:string,
value:string
}




const lang = () => {

const router = useRouter()
const {setappLang,WIDTH,HEIGHT,theme} = useContext(AuthContext)
const [modalVisible, setModalVisible] = useState(false);
const [deflang,setdeflang] = useState<langtag>({name:'English',code:'gb'})




const Langtag = ({code,name,value}:lgtag) => (
<TouchableOpacity onPress={() => {
setdeflang({name,code})
setappLang(value)
setModalVisible(false)
}}>
<View style={[styles.boxiv,{borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]}>
<CountryFlag isoCode={code} size={15} />
<Text style={[styles.texti,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText}]}>{name}</Text>
</View>
</TouchableOpacity>
)





return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.boxa}>
<View style={styles.iconview}>
<View style={styles.icon}>
<Image contentFit='contain' source={require('../../../assets/images/initlogo.png')} style={{width:'100%',height:'100%'}}/>
</View>
</View>
<View style={styles.inputa}>
<View style={styles.itemi}>
<Text style={[styles.texti,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText }]}>Choose a language to continue</Text>
</View>
<View style={styles.itemii}>
<View style={[styles.itemiii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.boxi}>
<CountryFlag isoCode={deflang.code} size={15}/>
<Text style={[styles.texti,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{deflang.name}</Text>
</View>
<View style={styles.boxii}>
<TouchableOpacity onPress={() => setModalVisible(true)}>
<FontAwesome name="angle-down" size={27} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>
</View>
</View>


<View style={styles.boxb}>
<View style={styles.btnview}>
<View style={styles.button}>
<TouchableOpacity style={[styles.btn,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardi'})}>
<Text style={[styles.textii,{color:Colors.light.primary}]}>Next</Text>
<FontAwesome name="angle-right" size={27} color={Colors.light.primary}/>
</TouchableOpacity>
</View>
</View>
</View>

<Modal animationType='fade' visible={modalVisible} onRequestClose={() => setModalVisible(false)} transparent>
<View style={styles.centeredView}>
<View style={[styles.modalView,{backgroundColor:theme === 'dark' ? Colors.dark.modal : Colors.light.modal}]}>
<View style={{width:'100%',height:'100%'}}>
<FlatList data={app_data} renderItem={({item}) => <Langtag code={item.icon} name={item.label} value={item.value} />}/>
</View>
</View>
</View>
</Modal>
</View>
)
}

export default lang





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},

boxa:{
justifyContent:'space-between',
alignItems:'center',
height:'48.3%',
width:'100%',
},

boxb:{
justifyContent:'flex-end',
alignItems:'center',
height:'51.7%',
width:'100%',
},

inputa:{
justifyContent:'space-between',
alignItems:'center',
width:'88%',
height:'24.2%'
},

itemi:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'23.5%',

},

itemii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'52.9%',
},

itemiii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'90%',
borderRadius:22,
borderWidth:1,
flexDirection:'row',
columnGap:13
},

boxi:{
justifyContent:'flex-start',
alignItems:'center',
width:'70%',
height:'88%',
flexDirection:'row',
columnGap:18
},


boxii:{
justifyContent:'center',
alignItems:'flex-end',
width:'16%',
height:'60%',

},

icon: {
width:'12.4%',
height:'28.9%',
},

iconview: {
width:'100%',
height:'34.1%',
justifyContent:'flex-end',
alignItems:'center'
},

btnview: {
width:'88%',
height:'18.8%',
justifyContent:'flex-start',
alignItems:'flex-end'
},

button: {
justifyContent:'center',
alignItems:'center',
width:'27.1%',
height:'47.1%'
},

btn: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'95%',
borderRadius:18,
flexDirection:'row',
columnGap:15
},

texti: {
fontFamily:'CabinetGrotesk-Regular',
fontSize:18,
fontWeight:400
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:18,
fontWeight:500,
color:'#FFFFFF'
},


centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
width:'100%',
height:'100%'
},

modalView: {
position:'absolute',
justifyContent:'center',
top:'49%',
borderRadius: 20,
width:'88%',
height:'40%',
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},

boxiv:{
justifyContent:'flex-start',
alignItems:'center',
width:'90%',
height:40,
flexDirection:'row',
columnGap:18,
borderRadius:10,
borderBottomWidth:1,
marginVertical:10,
marginHorizontal:10,
paddingLeft:10
},
})