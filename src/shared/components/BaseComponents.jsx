import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// Container base
export const Container = ({ children, style }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }, style]}>
      {children}
    </View>
  );
};

// Texto base
export const StyledText = ({ children, style }) => {
  const { theme } = useTheme();
  return (
    <Text style={[styles.text, { color: theme.colors.text }, style]}>
      {children}
    </Text>
  );
};

// Botón base
export const Button = ({ children, onPress, style }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: theme.colors.primary }, style]}
    >
      <StyledText style={{ color: '#fff' }}>{children}</StyledText>
    </TouchableOpacity>
  );
};

// Card base
export const Card = ({ children, style }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.card, { 
      backgroundColor: theme.colors.card,
      borderColor: theme.colors.border 
    }, style]}>
      {children}
    </View>
  );
};

// Input base
export const Input = ({ style, ...props }) => {
  const { theme } = useTheme();
  return (
    <TextInput
      style={[styles.input, { 
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        color: theme.colors.text
      }, style]}
      {...props}
    />
  );
};

// Switch de tema
export const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={styles.switchButton}
    >
      <StyledText>{isDarkMode ? '🌙' : '☀️'}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  input: {
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
  },
  switchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 16,
    right: 16,
  },
}); 