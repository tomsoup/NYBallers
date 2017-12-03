import { Dimensions } from 'react-native';

const BOARD = Dimensions.get('window');
export const HEIGHT = Dimensions.get('window');
// export const BOARD = 310;
export const BOARD_BORDER = 0;
const gutter = BOARD_BORDER * 3;
export const CELL_SIZE = (BOARD - gutter) / 2;
