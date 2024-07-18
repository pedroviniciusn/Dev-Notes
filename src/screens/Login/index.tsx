import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../../routes/stack.routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useAuth} from '../../hooks/useAuth';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../../services/yup/schemas/auth/loginSchema';

import {styles} from './styles';

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const {login} = useAuth();

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const handleClickLogin = async ({email, password}: LoginProps) =>
    await login(email, password);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.description}>Log in and enjoy our app</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="E-mail"
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.textInput}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.textError}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textInput}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.textError}>{errors.password.message}</Text>
        )}
        <Text>Forgot your password?</Text>
        <Button
          color={'#483d8b'}
          title="Login"
          onPress={handleSubmit(handleClickLogin)}
        />
        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
