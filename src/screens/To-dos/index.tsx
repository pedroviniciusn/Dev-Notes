import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

import {useAuth} from '../../hooks/useAuth';

import {styles} from './styles';

const Todos = () => {
  const {user, logout} = useAuth();

  const handleClickLogout = () => logout();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Todos</Text>
        <Text style={styles.description}>Welcome to our app {user?.name}</Text>
        <Button color={'#483d8b'} title="Logout" onPress={handleClickLogout} />
      </View>
    </SafeAreaView>
  );
};

export default Todos;
