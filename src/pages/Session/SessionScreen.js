import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Lucide } from '@react-native-vector-icons/lucide';
import { HomeHeader } from '../../Components/CommonHeader/Header';
import { CommonScreenVieStyle } from '../../Styles/CommonScreenStyles';
import { CommonTextStyles } from '../../Styles/CommonTextStyles';
import { color } from '../../Constants/Color';


const sessions = [
  {
    id: '1',
    title: '2025 Imagine Cup World Championship',
    date: 'Mon, May 19',
    time: '9:17 PM - 9:30 PM IST',
    studio: 'STUDIO11',
    tags: ['On Demand', 'Interview'],
  },
  {
    id: '2',
    title: 'Microsoft Build opening keynote',
    date: 'Mon, May 19',
    time: '9:30 PM - 11:30 PM IST',
    studio: 'KEY010',
    tags: ['On Demand', 'Keynote', 'In Seattle + Online'],
  },
];

export default function SessionScreen() {
  return (
    <SafeAreaView style={CommonScreenVieStyle.f1}>
      <HomeHeader/>
    <ScrollView style={CommonScreenVieStyle.f1_bg_white_p16} bounces={true}>
      <View style={CommonScreenVieStyle.bg_backgroundWhite_p12_br8_h230_w100per}>
        <Text style={{...CommonTextStyles.f_sb_fs20_c_black, ...CommonScreenVieStyle.mb8}}>Session catalog</Text>
        <View style={CommonScreenVieStyle.fd_row_center_p8_bw1_bc_borderColor_br6_mb8_jc_spaceBetween}>
          <Text style={CommonTextStyles.f_sr_fs14_c_black}>All days</Text>
          <Lucide name="chevron-down" size={12} />
        </View>
        <View style={CommonScreenVieStyle.fd_row_center_bw1_bc_borderColor_br6_px8_mb8}>
          <TextInput placeholder="Search sessions" style={CommonScreenVieStyle.f1_h40} />
          <TouchableOpacity>
            <Lucide name="search" size={18} color={color.blue} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={CommonScreenVieStyle.fd_row_bg_blue_ai_c_jc_c_pv8_br6_mb8}>
          <Text style={CommonTextStyles.f_sr_fs14_c_white}>Refine results</Text>
        </TouchableOpacity>

        <View style={CommonScreenVieStyle.fd_row_jc_sb_ai_c_mb12}>
          <Text style={{...CommonTextStyles.f_sr_fs11_c_black, ...CommonScreenVieStyle.bg_e6e6e6_pH10_pv4_br20_mr6_fs12}}>On-demand</Text>
          <TouchableOpacity><Text style={CommonTextStyles.f_sr_fs13_c_blue}>Clear filters</Text></TouchableOpacity>
        </View>
      </View>

      {/* Session list */}
      <Text style={{...CommonTextStyles.f_sb_fs17_c_black, ...CommonScreenVieStyle.mv12}}>Sessions (290)</Text>
      {sessions.map((session) => (
        <View key={session.id} style={CommonScreenVieStyle.bg_f9f9f9_p12_br8_mb16_h180_w100per}>
          <Text style={{...CommonTextStyles.f_sb_fs16_c_blue, ...CommonScreenVieStyle.mb6}}>{session.title}</Text>

          <View style={CommonScreenVieStyle.fd_row_fw_wrap_mb6}>
            {session.tags.map((tag, i) => (
              <Text key={i} style={{...CommonTextStyles.f_sr_fs11_c_black, ...CommonScreenVieStyle.bg_e6e6e6_pH10_pv4_br20_mr6_fs12}}>{tag}</Text>
            ))}
          </View>

          <View style={CommonScreenVieStyle.fd_row_ai_c_g6_mb4}>
            <Lucide name="calendar-days" size={14} />
            <Text style={{...CommonTextStyles.f_sr_fs12_c_black,...CommonScreenVieStyle.ml6}}>{session.date}</Text>
            <Text style={{...CommonTextStyles.f_sr_fs12_c_black,...CommonScreenVieStyle.ml6}}>{session.time}</Text>
          </View>
          <Text style={CommonTextStyles.f_sr_fs12_c_grey}>{session.studio}</Text>
          <TouchableOpacity style={CommonScreenVieStyle.fd_row_ai_c_jc_c_bg_ffebb5_pv8_br6}>
            <Lucide name="circle-play" size={15} />
            <Text style={CommonTextStyles.f_sb_fs12_c_black}> Watch now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
}

