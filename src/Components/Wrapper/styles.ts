import { StyleSheet } from "react-native";
import { Size } from "../../constants";
import { Colors, Styles } from "../../styles";
import { w } from "../../utils";

export default StyleSheet.create({
  container: {
    width: Size.wWidth,
    height: Size.wHeight,
    backgroundColor: Colors.primary
  },
  appContainer: {
    flex: 1,
    paddingHorizontal: Size.xl,
    paddingBottom: Size.m,
  },
  row: {
    ...Styles.rowView,
  },
  spaceBetweenRow: {
    ...Styles.row_space,
  },
  spaceAround: {
    ...Styles.spaceAround,
  },
  text: {
    fontSize: w(3.6),
    color: Colors.text,
  },
  btn: {
    width: Size.xl,
    height: Size.xl,
    borderRadius: Size.l,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapRow: {
    flexWrap: 'wrap',
  },
})