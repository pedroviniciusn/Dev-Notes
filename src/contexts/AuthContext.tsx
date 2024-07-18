import * as React from 'react';
import {Alert} from 'react-native';

import {auth} from '../../firebaseConfig';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../routes/stack.routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface AuthProviderProps {
  children: React.ReactNode;
}

export type UserProps = {
  id: string;
  name: string;
  email: string;
};

type AuthValuesType = {
  user: null | UserProps;
  loading: boolean;
  setUser: (value: null | UserProps) => void;
  setLoading: (value: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const defaultProvider: AuthValuesType = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = React.createContext(defaultProvider);

const AuthProvider = ({children}: AuthProviderProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const [user, setUser] = React.useState<UserProps | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const initAuth = async (): Promise<void> => {
      try {
        onAuthStateChanged(auth, currentUser => {
          if (currentUser) {
            setUser({
              id: currentUser.uid,
              email: currentUser.email || '',
              name: currentUser.displayName || 'Default Name',
            });

            navigation.navigate('Home');
          } else {
            navigation.navigate('Login');
          }
        });
      } catch (error) {
        console.error('Error on initAuth:', error);

        navigation.navigate('Login');
      }
    };

    initAuth();
  }, [navigation]);

  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (!response.user) {
        return Alert.alert('Error on login', 'An error occurred on login');
      }

      const userId = response.user.uid;

      setUser({
        id: userId,
        email,
        name: response.user.displayName || 'Default Name',
      });

      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error on login', 'An error occurred on login');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);

      setUser(null);
    } catch (error) {
      console.error('Error removing the token:', error);

      Alert.alert('Error on logout', 'An error occurred on logout');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        setLoading,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
