import { StyleSheet } from "react-native";
import { color } from "../Constants/Color";

const iosShadow = {
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
};


export const CommonScreenVieStyle = StyleSheet.create({
    iosShadow,
    f1:{
        flex:1
    },
    fd_row_jc_sb_ai_c_bg_white_h50:{
        flexDirection: 'row',
        backgroundColor: color.black,
        alignItems: 'center',
        justifyContent: 'space-around',
        height:50
    },
    f1_jc_c_bg_backgroundWhite:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: color.backgroundWhite,
    },
    p16:{padding:16},
    bg_white_br6_p20_ele3:{
        backgroundColor: color.white,
        borderRadius: 6,
        padding: 20,
        elevation: 3,
        ...iosShadow
    },
    bw1_bc_borderColor_br2_p10:{
        borderWidth: 1,
        borderColor: color.borderColor,
        borderRadius: 2,
        padding: 10,
        fontSize: 14,
        width:'100%',
        height:40
    },
    mt12_mb_4:{
        marginTop: 12,
        marginBottom: 4,
    },
    mt10:{
        marginTop:10
    },  
    mt20_bg_blue_jc_c_br2_ai_c_w100per_h40:{
        marginTop: 20,
        backgroundColor:color.blue,
        justifyContent:'center',
        borderRadius: 2,
        alignItems: 'center',
        width:'100%',
        height:40
    },
    mt20_ai_c:{
        marginTop: 20,
        alignItems: 'center',
    },
    f1_bg_white_p16: {
        flex: 1,
        backgroundColor: color.white,
        padding: 16,
    },

    bg_backgroundWhite_p12_br8_h230_w100per: {
        backgroundColor: color.backgroundWhite,
        padding: 12,
        borderRadius: 8,
        height: 240,
        width: '100%',
    },
    fd_row_center_p8_bw1_bc_borderColor_br6_mb8_jc_spaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: color.borderColor,
        borderRadius: 6,
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    fd_row_center_bw1_bc_borderColor_br6_px8_mb8: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.borderColor,
        borderRadius: 6,
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    f1_h40: {
        flex: 1,
        height: 40,
    },
    fd_row_bg_blue_ai_c_jc_c_pv8_br6_mb8: {
        backgroundColor: color.blue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 6,
        marginBottom: 8,
    },
    fd_row_jc_sb_ai_c_mb12: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    bg_e6e6e6_pH10_pv4_br20_mr6_fs12: {
        backgroundColor: color.background1,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginRight: 6,
        fontSize: 12,
        height:25,
        justifyContent:'center',
        alignItems:'center'
    },
    bg_f9f9f9_p12_br8_mb16_h180_w100per: {
        backgroundColor: color.background2,
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        height: 180,
        width: '100%',
        ...iosShadow
    },
    fd_row_fw_wrap_mb6: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 6,
    },
    fd_row_ai_c_g6_mb4: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 4,
    },
    fd_row_ai_c_jc_c_bg_ffebb5_pv8_br6: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background3,
        borderRadius: 6,
        marginTop:12,
        width:'100%',
        height:35,
    },
    mb8:{marginBottom: 8},
    mv12:{marginVertical:12},
    mb6:{marginBottom:6},
    ml6:{marginLeft:6},
    f1_bg_0b0f20_px16: {
        flex: 1,
        backgroundColor: color.background4,
        paddingHorizontal: 16,
    },

    mt20: {
        marginTop: 20,
    },
    bg_f2c744_br6_px12_py10_row_aic_w140_jc_sb_mb20: {
        backgroundColor: color.yellow,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 140,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    w100_h180_br8_cover: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    row_mt30: {
        flexDirection: 'row',
        marginTop: 30,
    },
    bg_1f1f3f_p10_brTop10: {
        backgroundColor: color.background5,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bg_3f2d24_p10_brTop10_ml8: {
        backgroundColor: color.background6,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 8,
    },
    mt20_mb10: {
        marginTop: 20,
        marginBottom: 10,
    },
    bg_11172a_br10_mb16_hidden: {
         backgroundColor: color.background5,
        borderRadius: 10,
        marginBottom: 16,
        overflow: 'hidden',
    },
    w100_h160_cover: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },
    p10: {
        padding: 10,
    },
    
    absolute_center_circle60_bg_f1f1f1: {
        position: 'absolute',
        left: 140,
        top: 70,
        width: 60,
        height: 60,
        backgroundColor: color.backgroundWhite,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mt4:{marginTop:4}
  
})