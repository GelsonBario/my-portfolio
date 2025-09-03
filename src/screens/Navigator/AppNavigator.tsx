import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import SkillsScreen from '../SkillsScreen/SkillsScreen';
import TabBar from '../../components/TabBar/TabBar';

export default function AppNavigator() {
  const [activeScreen, setActiveScreen] = useState('Início');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screenContainer}>
        {activeScreen === 'Início' ? <HomeScreen /> : <SkillsScreen />}
      </View>
      <TabBar activeScreen={activeScreen} onTabPress={setActiveScreen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f5f5' },
  screenContainer: { flex: 1 },
});