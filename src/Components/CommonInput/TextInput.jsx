import { TextInput } from "react-native"
import { CommonScreenVieStyle } from "../../Styles/CommonScreenStyles"

export const CommonTextInput =({lable, value, onChangeValue, secureTextEntry=false}) => {
    return (
         <TextInput
                  style={CommonScreenVieStyle.bw1_bc_borderColor_br2_p10}
                  placeholder={lable}
                  value={value}
                  onChangeText={onChangeValue}
                  keyboardType="email-address"
                  secureTextEntry={secureTextEntry}
                />
    )
}