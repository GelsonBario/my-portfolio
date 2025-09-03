import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SkillCard from '../../components/SkillCard/SkillCard';
import { SKILLS_DATA } from '../../constants/skills';

const SkillsScreen = () => (
    <>
      <View style={styles.skillsHeader}>
        <Text style={styles.skillsTitle}>Minhas Habilidades</Text>
      </View>
      <FlatList
        data={SKILLS_DATA}
        renderItem={({ item }) => <SkillCard name={item.name} icon={item.icon} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.skillsList}
      />
    </>
);

const styles = StyleSheet.create({
  skillsHeader: { padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  skillsTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  skillsList: { paddingBottom: 20 },
});

export default SkillsScreen;