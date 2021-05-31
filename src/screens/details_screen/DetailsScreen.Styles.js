import { StyleSheet, Platform, Dimensions } from 'react-native'
const hasNotch = Platform.OS === 'ios' && Dimensions.get('window').height >= 812

export default StyleSheet.create({
})