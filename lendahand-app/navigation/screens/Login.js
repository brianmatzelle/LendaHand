import React, { useState } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react/cjs/react.development'
import { useNavigation } from '@react-navigation/core'
import { ThemedButton } from 'react-native-really-awesome-button'
import logo from '../../assets/logo.png'
import { styles } from '../../styles/Styles'

const windowWidth = Dimensions.get('window').width;
const buttonWidth = windowWidth / 2.6;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("MainContainer")                              // Automatically logged in
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {                                  // SIGN UP
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    })
  }
  
  const handleSignIn = () => {                                  // SIGN IN
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
  }
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    
    >
      <View style={styles.logo}>
        <Image 
        source={logo} 
        alt="logo"
        style={styles.logoImg}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={ email }
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <ThemedButton
          onPress={handleSignIn}
          name="bruce"
          type="primary"
          style={styles.button}
          width={buttonWidth}
        >
          <Text style={styles.buttonText}>Login</Text>
        </ThemedButton>

        <ThemedButton
          name="bruce"
          onPress={handleSignUp}
          type="secondary"
          width={buttonWidth}
          style={styles.button}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </ThemedButton>

      </View>
    </KeyboardAvoidingView>
  )
}