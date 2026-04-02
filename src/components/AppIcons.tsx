

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
import smslight from '../../assets/icons/smslight.svg'
import smsdark from '../../assets/icons/smsdark.svg'



type iconName = 'homedark'|'homelight'|'settingdark'|'settinglight'|'profiledark'|'profilelight'|'defsavelight'|'defsavedark'|'xmarklight'|'xmarkdark'|'actsavelight'|'actsavedark'|'initlogo'|'arrowdowndark'|'arrowdownlight'|'arrowright'|'onboarda'|'onboardb'|'smslight'|'smsdark'





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
smslight:smslight
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