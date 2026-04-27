
import { View,Text,StyleSheet,TouchableOpacity,FlatList,Modal,TextInput } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import {useAnimatedRef} from 'react-native-reanimated'
import { typo,length } from '@/src/utils/typo'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import AppIcon from '@/src/components/AppIcons'
import CountryFlag from "react-native-country-flag";
import CustomNav from '@/src/components/CustomNav'
import Cusloader from '@/src/components/Cusloader'
import CusNewsBox from '@/src/components/CusNewsBox'
import { data,category,lingual } from '@/src/utils/dataset'





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl"

type ctag = {
name:string,
abbr:string,
icon:string
}



const home = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,appLang,getlang,setSelectedC,selectedC,postArray,setpostArray,isClick,setisClick,socket,isloading,setisloading,setroomKey,roomKey,showToast } = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [modalVisible, setModalVisible] = useState(false);
const [elyCount,setelyCount] = useState(2)
const [sentence, setsentence] = useState({first:'',second:''});
const [searchtext, setsearchtext] = useState('');
const animatedRef = useAnimatedRef<FlatList>()


const placeholderL = theme === 'dark' ? 'logodark' : 'Logolight'
const placeholderE = theme === 'dark' ? 'emptynewsdark' : 'emptynewslight'
const placeholderX = theme === 'dark' ? 'xmarkdark' : 'xmarklight'
const placeholderS = theme === 'dark' ? 'insearchdark' : 'insearchlight'

const newData = data.filter((item) => item.name.toLowerCase().includes(searchtext.toLowerCase()))


const showGuest = () => {

setModalVisible(false)
const toast = {type:'customError',name:lingual.guest[lang],info:lingual.createUseFeature[lang],onHide:() => {}, visibilityTime:3000}
showToast(toast)

}



const ListEmpty = () => (

<View style={[styles.empty,{height:length.l5}]}>

<View style={styles.emptybox}>


<View style={styles.boxQ}>
<AppIcon name={placeholderE} size={50}/>
</View>

<View style={styles.boxA}>
<View style={styles.cop}>
<Text allowFontScaling={false}  style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{sentence.first}</Text>
</View>

<View style={styles.cop}>
<Text allowFontScaling={false}  style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{sentence.second}</Text>
</View>

</View>

<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.checkBack[lang]}</Text>
</View>

</View>

</View>
)


const getMessage = () => {

let result = ''

if (isClick === 'All') {

result = lingual.emptyCountry[lang].replace("{label}",selectedC.name)

}else if (isClick !== 'All') {

const obj = category.find(data => data.item.en === isClick)

if ( !obj ) return

result = lingual.emptyCategory[lang].replace("{label}",obj.item[lang]).replace("{country}",selectedC.name)
}

return result
}


const CountryTag = ({name,abbr,icon}:ctag) => (
<TouchableOpacity style={[styles.ctag,{height:length.l2 / 3,backgroundColor:selectedC.icon === icon ? (theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary ) : 'transparent'}]} onPress={() => showGuest()} >
<View style={styles.cboxa}>
<CountryFlag isoCode={icon} size={typo.h3} />
</View>
<View style={styles.cboxb}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{name}</Text>
</View>
</TouchableOpacity>
)


const connectGuest = () => {
socket.emit('joinRoom','guest')
}



const handleGuestTask = async (id:any) => {

setroomKey(id)

try {

const query = await fetch('https://api.newsworldapp.org/account/qxgetlocation',{
method:'GET'
})

const result = await query.json()
const code = result.data.country
const newcode = code.toUpperCase()
const defaultData = data.find(data => data.name === newcode)

if (defaultData) {
setSelectedC({name:defaultData.name, icon:defaultData.icon,abbr:defaultData.abbr})
}else if (!defaultData){
setSelectedC({name:'UNITED STATES OF AMERICA', icon:'us',abbr:'USA'})
}

socket.emit('indexArticles',{country:code.toLowerCase(),rkey:id,category:'top'})


}catch(err){

console.log(err)
}

}



const handleClient = () => {

socket.removeListener("connect")
socket.close()
router.replace({pathname:'/onboardii'})
}



useEffect(() => {

setisloading(true)
socket.on("connect", connectGuest)
socket.on("roomKey",handleGuestTask)

socket.connect()

return () => {
socket.off("connect", connectGuest)
socket.off("roomKey",handleGuestTask)
}

},[])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


useEffect(() => {

if (!isloading && postArray.length === 0 ) {

const result = getMessage()
const words = result?.split(" ")

if (!words) return

setsentence({
first:words.slice(0, 4).join(" "),
second:words.slice(4).join(" ")
})

}

},[postArray,lang])





return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
{
isloading ? (<Cusloader top={length.l4} />) : (<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>


<View style={styles.cupone}>

<View style={styles.header}>


<View style={styles.headone}>
<View style={styles.itema}>
<AppIcon name={placeholderL} size={theme === 'dark' ? typo.h1_5 : typo.h1_2}/>
</View>

<TouchableOpacity onPress={handleClient} style={styles.itemb}>
<Text allowFontScaling={false} 
style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>
{lingual.signIn[lang]}
</Text>
</TouchableOpacity>
</View>


<View style={styles.headtwo}>
<View style={styles.diva}>
<TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.tag,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={styles.sidea}>
<CountryFlag isoCode={selectedC.icon} size={typo.h3} />
</View>
<View style={styles.sideb}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{selectedC.abbr}</Text>
</View>
</TouchableOpacity>
</View>
<View style={styles.divb}>
<CustomNav animatedRef={animatedRef} setelyCount={setelyCount} />
</View>
</View>

</View>

</View>

<View style={styles.cuptwo}>

<FlatList  initialNumToRender={60} ItemSeparatorComponent={() => <View style={{width:'100%',height:33}}></View>}  ListEmptyComponent={() => <ListEmpty/>} getItemLayout={(data,index) => ({length:(HEIGHT / 2) ,offset:(HEIGHT / 2) * index,index})}   
style={styles.flatlist} contentContainerStyle={styles.ccsOne}  showsVerticalScrollIndicator={false}  
data={postArray} keyExtractor={item => item.article_id} renderItem={({item}) => <CusNewsBox articleId={item.article_id} commentLength={item.comments.count} pubDate={item.pubDate}
image={item.image_url} title={item.title} description={item.description} likes={item.likes} type='guest'/>}/>

</View>

<View style={styles.cupthree}></View>






<Modal animationType='fade' transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
<View style={styles.centeredView} >
<View style={[styles.modalView,{rowGap:typo.h5,borderRadius:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>

<View style={[styles.taba,{borderBottomColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={styles.rowa}>
<AppIcon name={placeholderS} size={typo.h1_8}/>
</View>
<View style={styles.rowb}>
<TextInput allowFontScaling={false} value={searchtext} onChangeText={(text) => setsearchtext(text)} placeholder='Search Country...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder}style={[styles.input,{padding:typo.h8,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}/>
</View>
<TouchableOpacity onPress={() => setModalVisible(false)} style={styles.rowc}>
<AppIcon name={placeholderX} size={typo.h1_8}/>
</TouchableOpacity>
</View>


<View  style={[styles.tabb,{borderRadius:typo.h6,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<FlatList getItemLayout={(data,index) => ({length:length.l2 / 3,offset:length.l2 / 3 * index,index})} keyboardShouldPersistTaps ='handled' data={newData} keyExtractor={item => item.icon} renderItem={({item}) => <CountryTag abbr={item.abbr}  name={item.name} icon={item.icon} />} />
</View>
</View>
</View>

</Modal>

</View>)
}
</View>
)
}

export default home






const styles = StyleSheet.create({

container:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
flex:1
},

cupone:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'17.7%',
},


cuptwo:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'79.8%',
},

cupthree:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'2.5%',

},

header:{
display:'flex',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'63%',
flexDirection:'column'
},


headone:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row'
},

itema:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
},


itemb:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
},


headtwo:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'50%',
flexDirection:'row'
},

diva:{
justifyContent:'center',
alignItems:'flex-end',
width:'30%',
height:'100%',

},


divb:{
justifyContent:'center',
alignItems:'flex-start',
width:'70%',
height:'100%',
},

tag:{
justifyContent:'space-around',
alignItems:'center',
width:'100%',
height:'70%',
flexDirection:'row',
},

sidea:{
justifyContent:'center',
alignItems:'center',
width:'50%',
height:'100%',
},

sideb:{
justifyContent:'center',
alignItems:'flex-start',
width:'50%',
height:'100%',
},

ccsOne:{
justifyContent:'flex-start',
alignItems:'center'
},

textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

flatlist:{
width:'100%',
height:'100%',
flex:1
},

empty:{
justifyContent:'center',
alignItems:'center',
width:'100%',
},

emptybox:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'27%',
flexDirection:'column',
},


boxA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'35%',
flexDirection:'column',
},

cop:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
},


boxB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'15%',
},


boxQ:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
},

centeredView: {
flex: 1,
justifyContent: 'center',
alignItems:'center'
},


modalView: {
width:'90%',
flexDirection:'column',
justifyContent:'center',
position:'absolute',
top:'19%',
right:'5%',
height:'43%',
alignItems: 'center',

},


taba:{
justifyContent:'center',
alignItems:'center',
width:'92%',
height:'15%',
borderBottomWidth:1,
flexDirection:'row'
},

rowa:{
justifyContent:'center',
alignItems:'center',
width:'12%',
height:'100%',
},

rowb:{
justifyContent:'center',
alignItems:'center',
width:'76%',
height:'100%',
},

rowc:{
justifyContent:'center',
alignItems:'center',
width:'12%',
height:'100%',
},


tabb:{
justifyContent:'flex-start',
alignItems:'center',
width:'92%',
height:'85%',
borderWidth:1
},

input:{
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},

ctag:{
width:'100%',
flexDirection:'row',
justifyContent:'center',
alignItems:'center'
},

cboxa:{
justifyContent:'center',
alignItems:'center',
width:'17%',
height:'100%',
},

cboxb:{
justifyContent:'center',
alignItems:'flex-start',
width:'83%',
height:'100%',
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