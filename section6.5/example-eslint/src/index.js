const pref = '東京都'
const weather = '曇りのち晴れ'

function getWeather (prefName) {
  let result
  if (prefName == '東京都') {
    result = '晴れ'
  }
  if (prefName == '大阪府') {
    result = '雨'
  }
  return result
}

const result = getWeather(pref)
console.log(result)
