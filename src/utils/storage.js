import { AsyncStorage } from 'react-native'

export const getRawValue = async (key) => {

  try {
    const value = await AsyncStorage.getItem(key)

    return value
  } catch (error) {
    console.log(error)
  }

  return undefined
}

export const setRawValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (error) {
    console.log(error)
  }

  return false
}

export const getValue = async (key, defaultValue) => {
  const data = await getJsonObject(key)

  return data ? data[key] || defaultValue : defaultValue
}

export const setValue = async (key, value) => {
  const data = {}
  data[key] = value

  const saved = await setJson(key, data)

  return saved
}

export const getJsonObject = async (key) => {
  const jsonString = await getRawValue(key)

  return JSON.parse(jsonString) || undefined
}
export const getJsonArray = async (key) => {
  const jsonString = await getRawValue(key)
  
  return JSON.parse(jsonString) || []
}
  
export const setJson = async (key, value) => {
  const jsonString = JSON.stringify(value)
  const stored = await setRawValue(key, jsonString)

  return stored
}