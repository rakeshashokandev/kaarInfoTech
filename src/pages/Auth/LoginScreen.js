import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Linking,ScrollView,SafeAreaView} from 'react-native';
import { CommonScreenVieStyle } from '../../Styles/CommonScreenStyles';
import { CommonTextInput } from '../../Components/CommonInput/TextInput';
import { CommonTextStyles } from '../../Styles/CommonTextStyles';
import { CustomCommonButton } from '../../Components/CommonButtons/CustomCommonButton';

function LoginScreen  ()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={{...CommonScreenVieStyle.f1_jc_c_bg_backgroundWhite,...CommonScreenVieStyle.p16}}>
      <View style={CommonScreenVieStyle.bg_white_br6_p20_ele3}>
        <Text style={CommonTextStyles.f_sb_fs10_c_black}>Sign in with an account.</Text>

        <Text style={{...CommonTextStyles.f_sr_fs10_c_gray42, ...CommonScreenVieStyle.mt12_mb_4}}>Email address <Text style={styles.required}>*</Text></Text>
        <CommonTextInput value={email} onChangeValue={setEmail} lable={'Email Address'}/>

        <Text style={{...CommonTextStyles.f_sr_fs10_c_gray42, ...CommonScreenVieStyle.mt12_mb_4}}>Password <Text style={styles.required}>*</Text></Text>
        <CommonTextInput value={password} onChangeValue={setPassword} lable={'Password'} secureTextEntry={true}/>

        <TouchableOpacity>
          <Text style={{...CommonTextStyles.f_sr_fs13_c_blue, ...CommonScreenVieStyle.mt10}}>Forgot your password?</Text>
        </TouchableOpacity>

        <CustomCommonButton label={'Sign in'} onPress={handleSignIn} />

      </View>

      <View style={CommonScreenVieStyle.mt20_ai_c}>
        <Text style={CommonTextStyles.f_sr_fs16_c_black}>Need help signing in?{' '}
          <Text style={CommonTextStyles.f_sr_fs16_c_blue}>
            Start here.
          </Text>
        </Text>
      </View>
    </SafeAreaView>
   
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  link: {
    color: '#0067B8',
  },
});
