import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type SocialButtonProps = {
  icon: keyof typeof AntDesign.glyphMap;
  label: string;
  url: string;
  color: string;
};

const SocialButton = ({ icon, label, url, color }: SocialButtonProps) => (
    <TouchableOpacity
      style={[styles.socialButtonContainer, { backgroundColor: color }]}
      onPress={() => Linking.openURL(url).catch(err => console.error("Couldn't load page", err))}
    >
      <AntDesign name={icon} size={24} color="#fff" />
      <Text style={styles.socialButtonLabel}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  socialButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialButtonLabel: { color: '#fff', fontSize: 16, marginLeft: 10, fontWeight: 'bold' },
});

export default SocialButton;