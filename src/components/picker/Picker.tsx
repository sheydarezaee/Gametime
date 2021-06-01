import React from "react"
import { View } from "react-native"
import RNPickerSelect from 'react-native-picker-select'
import { defaultPickerStyles, styles } from './Picker.Styles'

const Picker = ({ items, label, value, onValueChange}) => {
  return (
    <View style={styles.pickerContainer}>
      <RNPickerSelect
        placeholder={{
          label,
          value: null,
        }}
        items={items}
        onValueChange={(valueChange) => {
          onValueChange(valueChange)
        }}
        style={defaultPickerStyles}
        value={value}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  )
}

export default Picker