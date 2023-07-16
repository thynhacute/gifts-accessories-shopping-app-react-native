import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const GestureHandlerRoot = ({ children }) => {
    return <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>;
};

export default GestureHandlerRoot;
