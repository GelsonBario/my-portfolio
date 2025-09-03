import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import SocialButton from '../../components/SocialButton/SocialButton';

const HomeScreen = () => (
    <ScrollView>
      <Header />
      <View style={styles.content}>
        <Text style={styles.bioTitle}>Sobre Mim</Text>
        <Text style={styles.bioText}>
          Essa é a primeira vez que estou entrando no mundo do mobile, estou aprendendo muito com o curso da DIO 
          com o Felipão. Agora não vou parar, vou continuar me aprofundando mais no mundo do mobile.
          Muito obrigado Felipão pelas coisas que me ensinou!! E como é a primeiras vez que estou entrando no mobile, não tenho muito conhecimento, mas o básico já ajuda muito.
        </Text>
        <View style={styles.socialContainer}>
          <SocialButton
            icon="linkedin-square"
            label="Linkedin"
            url="https://www.linkedin.com/in/gelsonbario"
            color="#0A66C2"
          />
          <SocialButton
            icon="github"
            label="GitHub"
            url="https://github.com/GelsonBario"
            color="#333"
          />
        </View>
      </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  content: { padding: 20 },
  bioTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  bioText: { fontSize: 16, lineHeight: 24, color: '#555', textAlign: 'justify' },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 },
});

export default HomeScreen;