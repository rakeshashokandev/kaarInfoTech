import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Lucide } from '@react-native-vector-icons/lucide';
import { color } from "../../Constants/Color";
import { CommonScreenVieStyle } from "../../Styles/CommonScreenStyles";

export const HomeHeader =({onPress}) => {
    return (
         <View style={CommonScreenVieStyle.fd_row_jc_sb_ai_c_bg_white_h50}>
            <View style={{ width: 20 }} />
              <Image
                source={require('../../assets/images/microsoft_logo.png')}
                style={styles.logo}
              />
              
              <TouchableOpacity onPress={onPress}>
                <Lucide name="user-round-plus" size={20} color={color.white}/>
              </TouchableOpacity>
            </View>
    )
    
}

const styles = StyleSheet.create({

  logo: { 
    width: '20%', 
    height: 40, 
    resizeMode:'center',
  },
})