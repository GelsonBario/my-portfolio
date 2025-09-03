import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TabBarProps = {
  activeScreen: string;
  onTabPress: (screenName: string) => void;
};

const TabBar = ({ activeScreen, onTabPress }: TabBarProps) => (
  <View style={styles.tabBar}>
    <TouchableOpacity
      style={styles.tabItem}
      onPress={() => onTabPress('Início')}
    >
      <Ionicons
        name={activeScreen === 'Início' ? 'home' : 'home-outline'}
        size={24}
        color={activeScreen === 'Início' ? '#3498db' : 'gray'}
      />
      <Text style={[styles.tabLabel, { color: activeScreen === 'Início' ? '#3498db' : 'gray' }]}>
        Início
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.tabItem}
      onPress={() => onTabPress('Habilidades')}
    >
      <Ionicons
        name={activeScreen === 'Habilidades' ? 'code-slash' : 'code-slash-outline'}
        size={24}
        color={activeScreen === 'Habilidades' ? '#3498db' : 'gray'}
      />
      <Text style={[styles.tabLabel, { color: activeScreen === 'Habilidades' ? '#3498db' : 'gray' }]}>
        Habilidades
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabBar;