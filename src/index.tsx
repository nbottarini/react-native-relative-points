import { Dimensions } from 'react-native'

export { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export function relativeValueToPoints(value: number, designWidth: number = 1440) {
    if (value === 0) return 0
    const screenWidth = Dimensions.get('window').width
    return screenWidth * value / designWidth
}
