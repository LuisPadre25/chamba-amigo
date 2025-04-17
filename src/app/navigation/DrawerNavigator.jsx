import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '../../shared/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { StyledText } from '../../shared/components/BaseComponents';

// Importar pantallas
import BottomTabNavigator from './BottomTabNavigator';
import PerfilScreen from '../../features/perfil/screens/PerfilScreen';
import CuatesScreen from '../../features/cuates/screens/CuatesScreen';
import RewardsScreen from '../../features/rewards/screens/RewardsScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.drawerContent, { backgroundColor: theme.colors.background }]}>
      <View style={styles.drawerHeader}>
        <Ionicons name="construct" size={60} color={theme.colors.primary} />
        <StyledText style={[styles.appName, { color: theme.colors.text }]}>
          Chamba Amigos
        </StyledText>
        <StyledText style={[styles.appSubtitle, { color: theme.colors.textSecondary }]}>
          Tu plataforma de trabajo colaborativo
        </StyledText>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme.colors.background,
          width: 240,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cuates"
        component={CuatesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="gift" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  appSubtitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default DrawerNavigator; 