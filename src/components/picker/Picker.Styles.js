import { StyleSheet } from 'react-native'

const pickerStyles = {
  fontSize: 14,
  color: 'gray',
  borderWidth: 1,
  borderColor: 'white',
  height: 55,
  borderRadius: 6,
  padding: 13,
  backgroundColor: 'white', 
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
}

export const defaultPickerStyles = StyleSheet.create({
  inputIOS: pickerStyles,
  inputAndroid: pickerStyles,
})

export const styles = StyleSheet.create({
  pickerContainer: { 
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white'
  },
})
