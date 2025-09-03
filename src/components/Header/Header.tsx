import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import minhafoto from '../../../assets/minhafoto.png'

const Header = () => (
    <View style={styles.headerContainer}>
      <Image
        source={minhafoto}
        style={styles.headerAvatar}
      />
      <Text style={styles.headerName}>Gelson Vera Popygua Bario</Text>
      <Text style={styles.headerTitle}>Desenvolvedor Mobile | React Native</Text>
    </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerAvatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  headerName: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  headerTitle: { fontSize: 16, color: '#666', marginTop: 4 },
});

export default Header;