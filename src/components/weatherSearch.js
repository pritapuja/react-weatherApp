// Import useState
import React, { useState } from 'react'
import { View, Button, StyleSheet} from 'react-native'
import CustomTextInput from './customTextInput'

const WeatherSearch = ({ fetchWeatherData }) => {
  const [location, setLocation] = useState('')

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        value={location}
        onChange={(text) => setLocation(text)}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Search"
          onPress={() => fetchWeatherData(location)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
})

export default WeatherSearch