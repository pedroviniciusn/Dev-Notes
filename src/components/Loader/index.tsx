import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

interface LoaderProps {
  message: string;
}

const styles = StyleSheet.create({
  overlay: {
    position: 'relative',
    zIndex: 2,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  message: {
    fontSize: 20,
  },
});

export const Loader = ({message}: LoaderProps) => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#483d8b" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
