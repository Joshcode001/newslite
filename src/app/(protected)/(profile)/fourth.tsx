import { View, Text, StyleSheet,Pressable} from 'react-native'
import React , {useContext, useState, useEffect}from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { ActiveColors } from '@/src/utils/color'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import * as ImageManipulator from "expo-image-manipulator";
import { multilingual } from '@/src/utils/dataset';







type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




const fourth = () => {


const [lang, setlang] = useState<langt>("en")
const {theme, LogOut, WIDTH, HEIGHT, locationP, api,setmyClient, myClient,appLang,getlang } = useContext(AuthContext)
const [image, setimage] = useState('')
const Fullname = `${myClient.fname} ${myClient.lname}`






const upload_DB = async (uri:string, userid:string) => {

try {

const manipulatedImage = await ImageManipulator.manipulateAsync(
uri,
[{ resize: { width: 500 } }],
{ compress: 0.7, format: ImageManipulator.SaveFormat.JPEG, base64:true }
);




const resp = await api.post('/data/image-upload', { blob:manipulatedImage.base64, userid})




} catch(err) {
console.log(`status:${err}`)
}

}





const pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ['images', 'videos'],
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});


if (!result.canceled) {

setmyClient({...myClient, image: result.assets[0].uri});

setimage(result.assets[0].uri)

await upload_DB(result.assets[0].uri, myClient.uname)
}

};



useEffect(() => {

getlang(appLang,setlang)

},[appLang])




return (
<View style={[styles.container,{ backgroundColor: theme === 'dark' ?  ActiveColors.dark.base: ActiveColors.light.base }, {width:WIDTH, height: HEIGHT}]}>
<View style={[styles.content, {backgroundColor: theme === 'dark' ? ActiveColors.light.cgrey : ActiveColors.dark.cgrey}, {width: WIDTH < 650 ? '100%' : '66%'}, {height: WIDTH < 650 ? '100%' : '89%'}]}>

<View style={[styles.icon]}>

<View style={{flexDirection:'row', columnGap:2}}>
<Image source={myClient.image} style={{width:130, height:130, borderRadius:'50%'}}/>
<Pressable style={{justifyContent:'flex-end'}} onPress={pickImage}><Entypo name="folder-images" size={24} color="brown" /></Pressable>
</View>

<Text style={[styles.title,{color: theme === 'dark' ? ActiveColors.dark.base : ActiveColors.light.primary}]}>{Fullname}</Text>

</View>

<View style={[styles.board]}>

<View style={[styles.mbox, {backgroundColor: theme === 'dark' ? ActiveColors.light.base: ActiveColors.dark.primary, marginBottom: WIDTH < 650 ? 36 : 10}]} >
<View style={styles.box}>
<Entypo name="mail" size={20} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} />
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary}]}>{multilingual.Email[lang]}</Text>
</View>
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary }]}>{myClient.email}</Text>
</View>




<View style={[styles.mbox, {backgroundColor: theme === 'dark' ? ActiveColors.light.base: ActiveColors.dark.primary, marginBottom: WIDTH < 650 ? 36 : 10}]} >
<View style={styles.box}>
{
(myClient.gender === 'female') ?
(<Fontisto name="female" size={20} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} />) :
(<Fontisto name="male" size={20} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} />)

}
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary}]}>{multilingual.Gender[lang]}</Text>
</View>
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary }]}>{myClient.gender}</Text>
</View>





<View style={[styles.mbox, {backgroundColor: theme === 'dark' ? ActiveColors.light.base: ActiveColors.dark.primary, marginBottom: WIDTH < 650 ? 36 : 10}]} >
<View style={styles.box}>
<FontAwesome6 name="user-secret" size={20} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} />
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary}]}>{multilingual.Username[lang]}</Text>
</View>
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary }]}>{myClient.uname}</Text>
</View>



<View style={[styles.mbox, {backgroundColor: theme === 'dark' ? ActiveColors.light.base: ActiveColors.dark.primary, marginBottom: WIDTH < 650 ? 36 : 10}]} >
<View style={styles.box}>
<Fontisto name="date" size={20} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} />
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary}]}>{multilingual.Birthday[lang]}</Text>
</View>
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary }]}>{myClient.dob}</Text>
</View>




<View style={[styles.mbox, {backgroundColor: theme === 'dark' ? ActiveColors.light.base: ActiveColors.dark.primary, marginBottom: WIDTH < 650 ? 36 : 10}]} >
<View style={styles.box}>
<Entypo name="location" size={20} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} />
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary}]}>{multilingual.Location[lang]}</Text>
</View>
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary }]}>{`${locationP.city}, ${locationP.region}`}</Text>
</View>



<View style={[styles.mbox, {backgroundColor: theme === 'dark' ? ActiveColors.light.base: ActiveColors.dark.primary, marginBottom: WIDTH < 650 ? 36 : 10}]} >
<View style={styles.box}>
<MaterialIcons name="verified-user" size={24} color={theme === 'dark' ? ActiveColors.dark.cgrey :ActiveColors.light.primary} /> 
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary}]}>{multilingual.Subscription[lang]}</Text>
</View>
<Text style={[styles.txt, {color: theme === 'dark' ? ActiveColors.dark.primary: ActiveColors.light.primary }]}>Free Account</Text>
</View>

</View>



<Pressable onPress={LogOut} style={[styles.btn, {backgroundColor: theme === 'dark' ? ActiveColors.dark.mgreen : ActiveColors.light.mgreen}]}>
<Text style={{color:ActiveColors.light.primary, paddingHorizontal:5}}>{multilingual.Signout[lang]}</Text>
</Pressable>


</View>
<View style={{width:'100%', height: 67}}>

</View>
</View>
)
}

export default fourth






const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",

},


content:{
flexDirection:'column',
rowGap:16,
justifyContent:'flex-start',
alignItems:'center',
borderRadius:15,

},

icon: {
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
rowGap:5,
width:'100%',
height:270,
paddingTop:4
},


title: {
fontSize:25,
fontWeight:'bold',
textAlign:'center'
},

box:{
flexDirection:'row',
columnGap:10,
justifyContent:'flex-start',
alignItems: 'center',
width:120,
height:26,
paddingLeft:10

},

mbox:{
flexDirection:'row',
columnGap:50,
justifyContent:'flex-start',
alignItems: 'center',
width: '100%',
height:33,
padding:5
},

board: {
flexDirection:'column',
width:'100%',
justifyContent:'center',
alignItems:'center',

},

txt: {
fontSize:17,
textAlign:'center',
justifyContent:'center',
paddingHorizontal:7
},

btn: {
width:100,
height: 40,
padding:7,
justifyContent:'center',
alignItems:'center'
}

})