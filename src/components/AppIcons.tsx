

import React from 'react'
import { SvgProps } from 'react-native-svg'
import xmarklight from '../../assets/icons/xmarklight.svg'
import xmarkdark from '../../assets/icons/xmarkdark.svg'
import savedark from '../../assets/icons/savedark.svg'
import savelight from '../../assets/icons/savelight.svg'
import saveddark from '../../assets/icons/saveddark.svg'
import savedlight from '../../assets/icons/savedlight.svg'
import homedark from '../../assets/icons/homedark.svg'
import homelight from '../../assets/icons/homelight.svg'
import settingdark from '../../assets/icons/settingdark.svg'
import settinglight from '../../assets/icons/settinglight.svg'
import profiledark from '../../assets/icons/profiledark.svg'
import profilelight from '../../assets/icons/profilelight.svg'
import initLogo from '../../assets/icons/initLogo.svg'
import arrowright from '../../assets/icons/arrowright.svg'
import arrowdowndark from '../../assets/icons/arrowdowndark.svg'
import arrowdownlight from '../../assets/icons/arrowdownlight.svg'
import onboarda from '../../assets/icons/onboarda.svg'
import onboardb from '../../assets/icons/onboardb.svg'
import onboardalight from '../../assets/icons/onboardalight.svg'
import onboardblight from '../../assets/icons/onboardblight.svg'
import pagei from '../../assets/icons/pagei.svg'
import pageii from '../../assets/icons/pageii.svg'
import smslight from '../../assets/icons/smslight.svg'
import smsdark from '../../assets/icons/smsdark.svg'
import pageblight from '../../assets/icons/pageblight.svg'
import pagebdark from '../../assets/icons/pagebdark.svg'
import actarrowleft from '../../assets/icons/actarrowleft.svg'
import arrowleftdark from '../../assets/icons/arrowleftdark.svg'
import arrowleftlight from '../../assets/icons/arrowleftlight.svg'
import keydark from '../../assets/icons/keydark.svg'
import keylight from '../../assets/icons/keylight.svg'
import useraccountdark from '../../assets/icons/useraccountdark.svg'
import useraccountlight from '../../assets/icons/useraccountlight.svg'
import userdark from '../../assets/icons/userdark.svg'
import userlight from '../../assets/icons/userlight.svg'
import eyedark from '../../assets/icons/eyedark.svg'
import eyelight from '../../assets/icons/eyelight.svg'
import editdark from '../../assets/icons/editdark.svg'
import editlight from '../../assets/icons/editlight.svg'
import rotatedark from '../../assets/icons/rotatedark.svg'
import rotatelight from '../../assets/icons/rotatelight.svg'
import locationdark from '../../assets/icons/locationdark.svg'
import locationlight from '../../assets/icons/locationlight.svg'
import calendar from '../../assets/icons/calendar.svg'
import warning from '../../assets/icons/warning.svg'
import check from '../../assets/icons/check.svg'
import sunlight from '../../assets/icons/sunlight.svg'
import sundark from '../../assets/icons/sundark.svg'
import notifylight from '../../assets/icons/notifylight.svg'
import notifydark from '../../assets/icons/notifydark.svg'
import starlight from '../../assets/icons/starlight.svg'
import stardark from '../../assets/icons/stardark.svg'
import locklight from '../../assets/icons/locklight.svg'
import lockdark from '../../assets/icons/lockdark.svg'
import dollarlight from '../../assets/icons/dollarlight.svg'
import dollardark from '../../assets/icons/dollardark.svg'
import supportlight from '../../assets/icons/supportlight.svg'
import supportdark from '../../assets/icons/supportdark.svg'
import logout from '../../assets/icons/logout.svg'
import moonlight from '../../assets/icons/moonlight.svg'
import moondark from '../../assets/icons/moondark.svg'
import systemlight from '../../assets/icons/systemlight.svg'
import systemdark from '../../assets/icons/systemdark.svg'
import male from '../../assets/icons/male.svg'
import female from '../../assets/icons/female.svg'
import inchecklight from '../../assets/icons/inchecklight.svg'
import incheckdark from '../../assets/icons/incheckdark.svg'
import trash from '../../assets/icons/trash.svg'
import cameralight from '../../assets/icons/cameralight.svg'
import cameradark from '../../assets/icons/cameradark.svg'
import remove from '../../assets/icons/remove.svg'
import checklight from '../../assets/icons/checklight.svg'
import checkdark from '../../assets/icons/checkdark.svg'
import cardslight from '../../assets/icons/cardslight.svg'
import cardsdark from '../../assets/icons/cardsdark.svg'
import walletlight from '../../assets/icons/walletlight.svg'
import walletdark from '../../assets/icons/walletdark.svg'
import reactionactlight from '../../assets/icons/reactionactlight.svg'
import reactionactdark from '../../assets/icons/reactionactdark.svg'
import reactionlight from '../../assets/icons/reactionlight.svg'
import reactiondark from '../../assets/icons/reactiondark.svg'
import saveoutlinelight from '../../assets/icons/saveoutlinelight.svg'
import saveoutlinedark from '../../assets/icons/saveoutlinedark.svg'
import commentactlight from '../../assets/icons/commentactlight.svg'
import commentactdark from '../../assets/icons/commentactdark.svg'
import defcommentlight from '../../assets/icons/defcommentlight.svg'
import defcommentdark from '../../assets/icons/defcommentdark.svg'
import badgelight from '../../assets/icons/badgelight.svg'
import badgedark from '../../assets/icons/badgedark.svg'
import homesearchlight from '../../assets/icons/homesearchlight.svg'
import homesearchdark from '../../assets/icons/homesearchdark.svg'
import watchlight from '../../assets/icons/watchlight.svg'
import watchdark from '../../assets/icons/watchdark.svg'
import laugh from '../../assets/icons/laugh.svg'
import sad from '../../assets/icons/sad.svg'
import angry from '../../assets/icons/angry.svg'
import thumb from '../../assets/icons/thumb.svg'
import Heart from '../../assets/icons/Heart.svg'
import heartoutlinedark from '../../assets/icons/heartoutlinedark.svg'
import heartoutlinelight from '../../assets/icons/heartoutlinelight.svg'
import voicelight from '../../assets/icons/voicelight.svg'
import voicedark from '../../assets/icons/voicedark.svg'








export type iconName = 'homedark'|'homelight'|'settingdark'|'settinglight'|'profiledark'|'profilelight'|'defsavelight'|'defsavedark'|'xmarklight'|'xmarkdark'|'actsavelight'|'actsavedark'|'initlogo'|'arrowdowndark'|'arrowdownlight'|'arrowright'|'onboarda'|'onboardb'|'smslight'|'smsdark'|'onboardalight'|'onboardblight'|'pagei'|'pageii'|'pageblight'|'pagebdark'|'actarrowleft'|'arrowleftdark'|'arrowleftlight'|'keydark'|'keylight'|'eyedark'|'eyelight'|'useraccountdark'|'useraccountlight'|'userdark'|'userlight'|'rotatedark'|'rotatelight'|'editdark'|'editlight'|'locationlight'|'locationdark'|'calendar'|'warning'|'check'|'sundark'|'sunlight'|'notifydark'|'notifylight'|'stardark'|'starlight'|'lockdark'|'locklight'|'dollardark'|'dollarlight'|'supportdark'|'supportlight'|'logout'|'moondark'|'moonlight'|'systemdark'|'systemlight'|'male'|'female'|'inchecklight'|'incheckdark'|'trash'|'cameralight'|'cameradark'|'remove'|'checklight'|'checkdark'|'cardslight'|'cardsdark'|'walletdark'|'walletlight'|'reactionactlight'|'reactionactdark'|'reactionlight'|'reactiondark'|'saveoutlinedark'|'saveoutlinelight'|'commentactdark'|'commentactlight'|'defcommentdark'|'defcommentlight'|'badgelight'|'badgedark'|'homesearchlight'|'homesearchdark'|'watchlight'|'watchdark'|'laugh'|'sad'|'angry'|'thumb'|'Heart'|'heartoutlinedark'|'heartoutlinelight'





interface AppIconProps extends SvgProps {
name: iconName;
size: number; 
}




const IconMap: Record<iconName, React.FC<SvgProps>> = {
defsavelight: savelight,
defsavedark: savedark,
actsavelight: savedlight,
actsavedark:saveddark,
xmarklight:xmarklight,
xmarkdark:xmarkdark,
homedark:homedark,
homelight:homelight,
settingdark:settingdark,
settinglight:settinglight,
profiledark:profiledark,
profilelight:profilelight,
initlogo:initLogo,
arrowdownlight:arrowdownlight,
arrowdowndark:arrowdowndark,
arrowright:arrowright,
onboarda:onboarda,
onboardb:onboardb,
smsdark:smsdark,
smslight:smslight,
onboardalight:onboardalight,
onboardblight:onboardblight,
pagebdark:pagebdark,
pageblight:pageblight,
pagei:pagei,
pageii:pageii,
actarrowleft:actarrowleft,
eyedark:eyedark,
eyelight:eyelight,
keydark:keydark,
keylight:keylight,
arrowleftdark:arrowleftdark,
arrowleftlight:arrowleftlight,
useraccountdark:useraccountdark,
useraccountlight:useraccountlight,
userdark:userdark,
userlight:userlight,
editdark:editdark,
editlight:editlight,
rotatedark:rotatedark,
rotatelight:rotatelight,
locationdark:locationdark,
locationlight:locationlight,
calendar:calendar,
warning:warning,
check:check,
logout:logout,
lockdark:lockdark,
locklight:locklight,
sundark:sundark,
sunlight:sunlight,
notifydark:notifydark,
notifylight:notifylight,
stardark:stardark,
starlight:starlight,
supportdark:supportdark,
supportlight:supportlight,
dollarlight:dollarlight,
dollardark:dollardark,
systemdark:systemdark,
systemlight:systemlight,
moondark:moondark,
moonlight:moonlight,
male:male,
female:female,
incheckdark:incheckdark,
inchecklight:inchecklight,
trash:trash,
cameradark:cameradark,
cameralight:cameralight,
remove:remove,
checkdark:checkdark,
checklight:checklight,
cardsdark:cardsdark,
cardslight:cardslight,
walletlight:walletlight,
walletdark:walletdark,
reactionactdark:reactionactdark,
reactionactlight:reactionactlight,
reactionlight:reactionlight,
reactiondark:reactiondark,
saveoutlinedark:saveoutlinedark,
saveoutlinelight:saveoutlinelight,
commentactdark:commentactdark,
commentactlight:commentactlight,
defcommentdark:defcommentdark,
defcommentlight:defcommentlight,
badgelight:badgelight,
badgedark:badgedark,
homesearchdark:homesearchdark,
homesearchlight:homesearchlight,
watchdark:watchdark,
watchlight:watchlight,
laugh:laugh,
sad:sad,
thumb:thumb,
angry:angry,
Heart:Heart,
heartoutlinedark:heartoutlinedark,
heartoutlinelight:heartoutlinelight
};









const AppIcon = ({name,size,...props}:AppIconProps) => {

const SelectedIcon = IconMap[name]

if (!SelectedIcon) return null;



return (
<SelectedIcon 
width={size} 
height={size} 
{...props} 
/>
)
}

export default AppIcon