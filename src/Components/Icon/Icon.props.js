import {ImageStyle, ViewStyle} from 'react-native';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {IconTypes} from '../../assets/icons';
import {color} from '../../theme';
import { normalize } from '../../Globals/normalize';

/**
 * All icon will start off looking like this.
 */
const BASE = {
  resizeMode: 'contain',
  height: normalize(18),
};

export const presets = {
  /**
   * The default icon style.
   */
  default: BASE,

  /**
   * A large version of the default icon.
   */
  large: {...BASE, width: normalize(30), height: normalize(30)},

  /**
   * A medium large version of the default icon.
   */
  mediumLarge: {
    ...BASE,
    width: normalize(38),
    height: normalize(38),
  },

  /**
   * A small version of the default icon.
   */
  small: {...BASE, width: normalize(14), height: normalize(14)},

  /**
   * A medium version of the default icon.
   */
  medium: {...BASE, width: normalize(16), height: normalize(16)},

  /**
   * A extra small version of the default icon.
   */
  extraSmall: {
    ...BASE,
    width: normalize(8),
    height: normalize(8),
  },

  /**
   * A large version of the default icon.
   */
  extraLarge: {
    ...BASE,
    width: normalize(65),
    height: normalize(65),
  },

  /*
   * A normal version of the default icon.
   */
  normal: {...BASE, width: normalize(10), height: normalize(10)},
  basic: {...BASE, width: normalize(12), height: normalize(12)},
  icon40Size: {
    ...BASE,
    width: 40,
    height: 40,
  },
  icon20Size: {
    ...BASE,
    width: 20,
    height: 20,
  },
  full: {},
};
  