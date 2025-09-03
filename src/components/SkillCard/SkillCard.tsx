import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type SkillCardProps = {
  icon: keyof typeof FontAwesome5.glyphMap;
  name: string;
};

const SkillCard = ({ icon, name }: SkillCardProps) => (
    <View style={styles.skillCardContainer}>
      <FontAwesome5 name={icon} size={40} color="#3498db" />
      <Text style={styles.skillCardName}>{name}</Text>
    </View>
);

const styles = StyleSheet.create({
  skillCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  skillCardName: { fontSize: 16, marginTop: 10, fontWeight: '600', color: '#333' },
});

export default SkillCard;