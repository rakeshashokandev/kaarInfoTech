import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Lucide } from '@react-native-vector-icons/lucide';
import { HomeHeader } from '../../Components/CommonHeader/Header';
import { color } from '../../Constants/Color';
import { CommonScreenVieStyle } from '../../Styles/CommonScreenStyles';
import { CommonTextStyles } from '../../Styles/CommonTextStyles';

const { width } = Dimensions.get('window');

const sessions = [
  {
    id: 'KEY010',
    title: 'Microsoft Build opening keynote',
    speakers: 'Satya Nadella and Kevin Scott',
    image: require('../../assets/images/card_image.png'),
  },
  {
    id: 'KEY030',
    title: 'The Agentic Web [Part 1]',
    speakers: 'Kevin Scott',
    image: require('../../assets/images/card_image.png'),
  },
];

export default function HomeScreen({ navigation }) {
  const handleSingnUp = () => {
    navigation.navigate('LoginScreen');
  };

  const renderSession = ({ item }) => (
    <View key={item.id} style={{...CommonScreenVieStyle.bg_11172a_br10_mb16_hidden,  position: 'relative' }}>
      <Image style={CommonScreenVieStyle.w100_h160_cover} source={item.image} />
      <View style={CommonScreenVieStyle.p10}>
        <Text style={CommonTextStyles.f_sb_fs15_c_yellow}>{item.title}</Text>
        <Text style={{...CommonTextStyles.f_sb_fs15_c_white, ...CommonScreenVieStyle.mt4}}>{item.id}</Text>
      </View>
      <TouchableOpacity style={CommonScreenVieStyle.absolute_center_circle60_bg_f1f1f1}>
        <Lucide name="play" size={20} color={color.black} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader onPress={handleSingnUp} />
      <ScrollView style={CommonScreenVieStyle.f1_bg_0b0f20_px16}>
        <View style={CommonScreenVieStyle.mt20}>
          <Text style={{...CommonTextStyles.f_sb_fs20_c_white, ...CommonScreenVieStyle.mb8}}>
            We’ll see you next year @Build
          </Text>
          <Text style={{...CommonTextStyles.f_sr_fs14_c_grey, ...CommonScreenVieStyle.mb8}}>
            Thank you for another wonderful event full of connecting, coding, and learning. To get
            notified of what’s happening next at Microsoft Build 2026, sign up for updates.
          </Text>
          <TouchableOpacity style={CommonScreenVieStyle.bg_f2c744_br6_px12_py10_row_aic_w140_jc_sb_mb20}>
            <Text style={CommonTextStyles.f_sb_fs14_c_black}>Get notified</Text>
            <Lucide name="arrow-right" size={14} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={CommonScreenVieStyle.row_mt30}>
          <TouchableOpacity style={CommonScreenVieStyle.bg_1f1f3f_p10_brTop10}>
            <Text style={CommonTextStyles.f_sb_fs13_c_white}>Catch up on sessions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CommonScreenVieStyle.bg_3f2d24_p10_brTop10_ml8}>
            <Text style={CommonTextStyles.f_sb_fs13_c_white}>News and announcements</Text>
          </TouchableOpacity>
        </View>

        <View style={CommonScreenVieStyle.mt20_mb10}>
          <Text style={CommonTextStyles.f_sb_fs14_c_white}>
            Check out any sessions you missed and rewatch the ones you loved
          </Text>
          <TouchableOpacity>
            <Text style={CommonTextStyles.f_sr_fs14_c_yellow}>View on-demand sessions</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={sessions}
          renderItem={renderSession}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 60 }}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
