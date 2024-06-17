import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native'
import WeatherSearch from './weatherSearch';

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {
 
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  return (
    <SafeAreaView>
      {/* <WeatherSearch fetchWeatherData={fetchWeatherData} /> */}
      <View style={styles.marginTop20}>
        <Text style={styles.text}>The weather of {name}</Text>
        <Text style={[styles.temperature, styles.marginTop20]}>{temp} °C</Text>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${icon}.png` }}
            style={styles.weatherIcon}
          />
          <Text style={[styles.text, styles.bold]}>{description}</Text>
        </View>
        <Text style={styles.text}>{description}</Text>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Text style={[styles.text, styles.bold]}>Visibility :</Text>
          <Text style={[styles.text, styles.marginLeft15]}>{visibility} km</Text>
        </View>
        <View style={[styles.rowContainer, styles.marginTop20]}>
          <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
          <Text style={[styles.text, styles.marginLeft15]}>{speed} m/s</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo