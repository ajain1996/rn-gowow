import React from 'react'

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export interface LinearGradContainerProps {
    backgroundColor?: string;
    children?: React.ReactNode;
    style?: object;
}

const LinearGradContainer = ({
    children,
    backgroundColor,
    style,
}: LinearGradContainerProps) => {
    return (
        // <View style={[styles.container, { backgroundColor }, style]}>{children}</View>
        <LinearGradient
            colors={["#16182C", "#16182C", "#424167"]}
            style={[styles.container, { backgroundColor }, style]}
        >
            {children}
        </LinearGradient>
    )
};
export default LinearGradContainer;