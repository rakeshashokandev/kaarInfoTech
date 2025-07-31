import { Text, TouchableOpacity } from "react-native"
import { CommonScreenVieStyle } from "../../Styles/CommonScreenStyles"
import { CommonTextStyles } from "../../Styles/CommonTextStyles"

export const CustomCommonButton = ({label, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={CommonScreenVieStyle.mt20_bg_blue_jc_c_br2_ai_c_w100per_h40}>
            <Text style={CommonTextStyles.f_sb_fs18_c_white}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}