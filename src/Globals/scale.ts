import {Dimensions} from 'react-native';
import Device from 'react-native-device-info';

//Screen Constants
//based on iphone X scale
const SCREEN_HEIGHT = 812;
const SCREEN_WIDTH = 375;

const {height, width} = Dimensions.get('window');

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 **/
export default function (units: number = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const scaleForFont = (units: number = 1) => (width / SCREEN_WIDTH) * units;
const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

const HP = (percent: number = 0): number => {
  return Math.round(height * (percent / 100));
};

const WP = (percent: number = 0): number => {
  return Math.round(width * (percent / 100));
};

/** get tab bar height */
export function getTabBarHeight(): number {
  const tabHeight: number = Device.hasNotch()
    ? verticalScale(85)
    : verticalScale(75);
  return tabHeight;
}

export {verticalScale, scaleForFont, HP, WP};
