import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#a9a9a9',
  },
  textError: {
    color: 'red',
  },
  textInput: {
    width: '100%',
    padding: 10,
    backgroundColor: '#d3d3d3',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#483d8b',
  },
  signUpContainer: {
    flexDirection: 'row',
    gap: 3,
  },
  signUp: {
    textDecorationLine: 'underline',
    color: '#483d8b',
  },
});
