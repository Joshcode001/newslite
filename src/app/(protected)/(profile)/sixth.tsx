

import { View, Text, StyleSheet , ScrollView, Switch, TouchableOpacity,Modal, Image} from 'react-native'
import React, {useContext, useState, useEffect, useCallback} from 'react'
import { ActiveColors } from "@/src/utils/color";
import { AuthContext } from '@/src/utils/authContext'
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AI_prop } from '@/src/utils/dataset';
import { FlatList } from 'react-native-gesture-handler';
import { app_data, multilingual } from '@/src/utils/dataset';








type lang = {
lang:string,
lcode:string,
lcodex:string
name:{
male:string,
female:string
}
}

type app = {
label:string,
value:string
}


type item = {
item:lang
}

type itemc = {
item:app
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";






const settings = () => {

const [lang, setlang] = useState<langt>('en')
const [app, setapp] = useState('English')
const [isModal, setisModal] = useState('a')
const {theme,toggleTheme,isSys,useSystem,WIDTH,HEIGHT,setvoice,voice,isflag,langset,setlangset,appLang,setappLang,getlang} = useContext(AuthContext)







const Langtag = ({lang,lcode,lcodex,name}:lang) => (
<TouchableOpacity onPress={() => {
setlangset({lang, lcode,lcodex, name})
setisModal('a')
}}>
<View style={styles.langtag}>
<Text style={styles.txt}>{lang}</Text>
</View>
</TouchableOpacity>
)




const Apptag = ({label, value}:app) => (
<TouchableOpacity onPress={() => {
setappLang(value)
setapp(label)
setisModal('a')
}}>
<View style={styles.langtag}>
<Text style={styles.txt}>{label}</Text>
</View>
</TouchableOpacity>
)




const setdefault = (id:string) => {
const data = app_data.find(c => c.value === id)

if (data) {
setapp(data.label)
}
}




const renderItem1 = useCallback(({item}:item)=> <Langtag lang={item.lang} lcode={item.lcode} lcodex={item.lcodex} name={item.name}/>,[])

const renderItem2 = useCallback(({item}:itemc)=> <Apptag label={item.label} value={item.value}/> ,[])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])




useEffect(() => {

setdefault(appLang)

},[])




return (
<ScrollView showsVerticalScrollIndicator={false}>
<View style={[styles.container,{backgroundColor: theme === 'dark' ? ActiveColors.dark.base: ActiveColors.light.base}, {width: WIDTH}]}>
<View style={styles.subcont}>
<Text style={[styles.mtxt, {color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Themeswitch[lang]}</Text>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Darkmode[lang]}</Text>
<Switch  value={theme === 'dark'} onValueChange={() => toggleTheme(theme ==='light' ? 'dark': 'light')}/>
</View>
</View>



<View style={styles.subcont}>
<Text style={[styles.mtxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Themesettings[lang]}</Text>

<TouchableOpacity onPress={()=> toggleTheme('light')}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{(theme === 'dark') ? (<Foundation name="lightbulb" size={14} color='white'  />):(<Foundation name="lightbulb" size={14} color='black'  />)}

<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Light[lang]}</Text>
</View>
{((theme === 'light' && !isSys) ? (<FontAwesome5 name="check-circle" size={20} color="#252526" />): (<FontAwesome5 name="circle" size={20} color="grey" />))}
</View>
</TouchableOpacity>





<TouchableOpacity onPress={()=> toggleTheme('dark')}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{((theme === 'dark') ? (<MaterialIcons name="dark-mode" size={14} color="white" />) : (<MaterialIcons name="dark-mode" size={14} color="black" />))}

<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Dark[lang]}</Text>
</View>
{((theme === 'dark' && !isSys) ? (<FontAwesome5 name="check-circle" size={20} color="azure" />): (<FontAwesome5 name="circle" size={20} color="grey" />))}

</View>
</TouchableOpacity>



<TouchableOpacity onPress={() => useSystem()}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{((theme === 'dark') ? (<MaterialCommunityIcons name="theme-light-dark" size={12} color="white" />):(<MaterialCommunityIcons name="theme-light-dark" size={12} color="black" />))}

<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.System[lang]}</Text>
</View>
{((isSys && (theme === 'dark' || 'light')) ? (<FontAwesome5 name="check-circle" size={20} color="grey" />): (<FontAwesome5 name="circle" size={20} color="grey" />))}

</View>
</TouchableOpacity>
</View>


<View style={styles.subcont}>
<Text style={[styles.mtxt, {color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>A.I {multilingual.Voiceswitch[lang]}</Text>

<TouchableOpacity onPress={() => setvoice('m')} disabled={isflag}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{
(theme === 'dark') ? (<FontAwesome5 name="male" size={20} color="white" />):(<FontAwesome5 name="male" size={20} color="black"/>)
}
<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Male[lang]}</Text>
</View>

{((voice === 'm') ? (<FontAwesome5 name="check-circle" size={20} color={theme === 'dark' ? 'azure': 'grey'} />): (<FontAwesome5 name="circle" size={20} color='grey'  />))}

</View>
</TouchableOpacity>

<TouchableOpacity onPress={() => setvoice('f')}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{
(theme === 'dark') ? (<FontAwesome5 name="female" size={20} color="white" />):(<FontAwesome5 name="female" size={20} color="black"/>)
}
<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Female[lang]}</Text>
</View>

{((voice === 'f') ? (<FontAwesome5 name="check-circle" size={20} color={theme === 'dark' ? 'azure': 'grey'} />): (<FontAwesome5 name="circle" size={20} color='grey'  />))}

</View>
</TouchableOpacity>

</View>


<View style={styles.subcont}>
<Text style={[styles.mtxt, {color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Translate[lang]}</Text>

<TouchableOpacity onPress={() => setisModal('b')}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{((theme === 'dark') ? (<MaterialIcons name="language" size={14} color="white" />) : (<MaterialIcons name="language" size={14} color="black" />))}

<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Text[lang]}</Text>
</View>


<Text style={[styles.txt, {color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{langset.lang}</Text>
</View>
</TouchableOpacity>
</View>


<View style={styles.subcont}>
<Text style={[styles.mtxt, {color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Applanguage[lang]}</Text>

<TouchableOpacity onPress={() => setisModal('c')}>
<View style={[styles.cont,{backgroundColor:theme === 'dark' ? ActiveColors.dark.dblue : ActiveColors.light.primary}]}>
<View style={styles.label}>
{((theme === 'dark') ? (<MaterialIcons name="language" size={14} color="white" />) : (<MaterialIcons name="language" size={14} color="black" />))}

<Text style={[styles.ctxt,{color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{multilingual.Text[lang]}</Text>
</View>


<Text style={[styles.txt, {color:  theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue }]}>{app}</Text>
</View>
</TouchableOpacity>
</View>







</View>

<Modal visible={isModal === 'b'} animationType="slide"
onRequestClose={()=> {setisModal('a')}} presentationStyle="pageSheet">
<View style={[styles.centeredView,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.accent}, {width: WIDTH}]}>
<View style={[styles.modalView, {backgroundColor:theme === 'dark' ? ActiveColors.dark.dpink :  ActiveColors.light.dpink},{width:WIDTH < 650 ? WIDTH : WIDTH / 2.2}, {height:HEIGHT -  200}]}>
<FlatList  data={AI_prop} renderItem={renderItem1} keyExtractor={item => item.lcode}/>
</View>
</View>
</Modal>

<Modal visible={isModal === 'c'} animationType="slide"
onRequestClose={()=> {setisModal('a')}} presentationStyle="pageSheet">
<View style={[styles.centeredView,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.accent}, {width: WIDTH}]}>
<View style={[styles.modalView, {backgroundColor:theme === 'dark' ? ActiveColors.dark.dpink :  ActiveColors.light.dpink},{width:WIDTH < 650 ? WIDTH : WIDTH / 2.2}, {height:HEIGHT -  200}]}>
<FlatList  data={app_data} renderItem={renderItem2} keyExtractor={item => item.value}/>
</View>
</View>
</Modal>
</ScrollView>
)
}

export default settings








const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'flex-start',
alignContent:'center',
minHeight:'auto',
maxHeight:'auto',
flexDirection:'column'
},

subcont: {
justifyContent:'center',
alignItems:'center',
width:'100%',
paddingTop:30

},

cont: {
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
marginBottom:10,
width:'90%',
columnGap:210,
padding:16,
borderRadius:15
},


label:{
flexDirection:'row',
columnGap:5,
justifyContent:'center',
alignItems:'center',
marginRight:60
},

mtxt:{
justifyContent:'center',
fontSize:18,
alignSelf:'flex-start',
fontWeight:'bold',
marginLeft:12,
marginBottom:14,
},
ctxt: {
fontSize:15
},


txt:{
justifyContent:'center',
alignItems:'center',
textAlign:'center',
fontSize: 17,
fontWeight:'ultralight',
color:'azure',
},

centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},

modalView: {
borderRadius: 30,
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


langtag:{
justifyContent: 'center',
alignItems: 'center',
padding:8,
width:400,
height:50,
borderBottomWidth:3,
borderColor:'grey',

}

})