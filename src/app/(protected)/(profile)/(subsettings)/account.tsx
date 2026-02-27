

import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { AuthContext } from '@/src/utils/authContext'
import { typo,length } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import * as ImageManipulator from "expo-image-manipulator";








const account = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,myClient,socket,setmyClient,isloading,setisloading,roomKey,showToast,platform} = useContext(AuthContext)
const [newDetails, setnewDetails] = useState({ fname:'null',lname:'null',image:'null' })
const [key, setkey] = useState({ a:0,b:0,c:0 })
const [isSuccess, setisSuccess]  = useState({value:false,image:'null'})
const [preview, setpreview] = useState('null')




const placeholder = theme === 'dark' ? require('../../../../../assets/images/bigusericondark.png') :
require('../../../../../assets/images/bigusericonlight.png')




const upload_DB = async (uri:string) => {

try {

const manipulatedImage = await ImageManipulator.manipulateAsync(
uri,
[{ resize: { width: 500 } }],
{ compress: 0.7, format: ImageManipulator.SaveFormat.JPEG, base64:true }
);


if (manipulatedImage.base64) {
setnewDetails({...newDetails,image:manipulatedImage.base64})
setkey({...key,a:1})
}


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

setpreview(result.assets[0].uri)
await upload_DB(result.assets[0].uri)
};

}


const handleUpdate = async () => {

if ((key.a + key.b + key.c) < 1 ) return


setisloading(true)
setisSuccess({value:false,image:'null'})
await socket.emit('updateProfile', {

fname:newDetails.fname,
lname:newDetails.lname,
image:newDetails.image,
userId:myClient.uname,
rkey:roomKey })

}








useEffect(() => {

setpreview(myClient.image)
setisloading(false)

},[])



useEffect(() => {

if (isSuccess.value === true){


setmyClient({
...myClient,
fname:newDetails.fname !== 'null' ? newDetails.fname : myClient.fname ,
lname:newDetails.lname !== 'null' ? newDetails.lname : myClient.lname,
image:isSuccess.image !== 'null' ? isSuccess.image : myClient.image
})

const toast = {type:'success',name:myClient.fname,info:'profile Updated',onHide:() => {}, visibilityTime:4000}
showToast(toast)

}

},[isSuccess,newDetails])




useEffect(() => {

socket.on('updateStatus', (data:any) => {

setisSuccess({value:data.value,image:data.image})
setisloading(false)
})

},[socket])





return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.cupA}></View>



<View style={styles.cupB}>

<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<View style={styles.sideA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Settings</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>
Account settings</Text>
</View>

</View>

</View>

<View style={styles.colB}>

<TouchableOpacity onPress={pickImage} style={styles.imageBox}>
<Image source={preview === 'null' ? placeholder : preview}  style={styles.image}  contentFit='contain' />
</TouchableOpacity>

</View>

<View style={styles.colC}>

<View style={[styles.box,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border }]}>
<View style={styles.boxA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>First Name</Text>
</View>
<View style={styles.boxB}>
<TextInput allowFontScaling={false} style={[styles.input,styles.textR400,{fontSize:typo.h3}]} placeholder={myClient.fname} placeholderTextColor={theme === 'dark' ? Colors.light.border : 
Colors.dark.primary} onChangeText={text => {

if (text.length < 1) {
setkey({...key,b:0})

}else if (text.length >= 1){

setnewDetails({...newDetails,fname:text})
setkey({...key,b:1})
}

}} />
</View>
</View>

<View style={[styles.box,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border }]}>
<View style={styles.boxA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Last Name</Text>
</View>
<View style={styles.boxB}>
<TextInput allowFontScaling={false} style={[styles.input,styles.textR400,{fontSize:typo.h3}]} placeholder={myClient.lname} placeholderTextColor={theme === 'dark' ? Colors.light.border : 
Colors.dark.primary} onChangeText={text => {

if (text.length < 1) {
setkey({...key,c:0})

}else if (text.length >= 1){

setnewDetails({...newDetails,lname:text})
setkey({...key,c:1})
}

}} />
</View>
</View>

<View style={[styles.box,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border }]}>
<View style={styles.boxA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Username</Text>
</View>
<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.placeholder : Colors.dark.placeholder}]}>{myClient.uname}</Text>
</View>
</View>

<View style={[styles.box,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border }]}>
<View style={styles.boxA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Birthday</Text>
</View>
<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.placeholder : Colors.dark.placeholder}]}>{myClient.dob}</Text>
</View>
</View>

</View>

</View>


<KeyboardStickyView  style={styles.stickyB} offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:-30,opened:42}}>

<TouchableOpacity onPress={handleUpdate} style={[styles.button,{borderRadius:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : 
Colors.light.Activebtn}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary}  />) : (<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color: 
Colors.light.primary}]}>Update Profile</Text>)
}

</TouchableOpacity>

</KeyboardStickyView>

</View>
)
}

export default account







const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'8%',
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'79%',
},



button:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'43%',
borderWidth:1,
},

colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row'
},



colB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'30%',
},


colC:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'40%',
flexDirection:'column'
},


box:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'25%',
borderBottomWidth:1,
},

boxA:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

boxB:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'60%'
},

stickyB:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'13%',
},

rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},

sideA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},

sideB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},


imageBox:{
justifyContent:'center',
alignItems:'center',
width:'36%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},


image:{
width:'88%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

input:{
width:'100%',
height:'95%',
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