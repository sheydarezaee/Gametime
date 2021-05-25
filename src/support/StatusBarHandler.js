// import React, { useEffect } from 'react'
// import { StatusBar } from 'react-native'
// import { useNavigation } from '@react-navigation/native'

// export function StatusBarHandler() {
//   const navigation = useNavigation()

//   useEffect(() => {
//     const _statusBarListenerOut =
//       navigation &&
//       navigation.addListener('didBlur', () => {
//         StatusBar.setBarStyle('dark-content')
//       })

//     return () => _statusBarListenerOut()
//   }, [])

//   return <StatusBar barStyle="light-content" />
// }