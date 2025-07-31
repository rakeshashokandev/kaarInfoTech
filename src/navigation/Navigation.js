import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Auth/LoginScreen";
import HomeScreen from "../pages/Home/HomeScreen";
import SessionScreen from "../pages/Session/SessionScreen";
import BottomTab from "./BottomTab";


const Navigation =() => {
    const rootStack =  createNativeStackNavigator();
    return (
         <>
         <rootStack.Navigator initialRouteName="MainTabs">
            <rootStack.Screen name="MainTabs" component={BottomTab} options={{headerShown:false}}/>
            <rootStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
             <rootStack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
            <rootStack.Screen name="SessionScreen" component={SessionScreen} options={{headerShown:false}}/>
         </rootStack.Navigator>
         </>
    )
}
export default Navigation;