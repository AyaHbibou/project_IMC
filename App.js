import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  const [imc, setImc] = useState('');
  const [categorie, setCategorie] = useState('');
  const [imageCategorie, setImageCategorie] = useState('');

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;

    const resultat = (p / (t * t)).toFixed(2);
    setImc(resultat);

    if (resultat < 18.5) {
      setCategorie('Maigreur');
      setImageCategorie(require('./assets/image_imc/maigre.png'));
    }
    else if (resultat >= 18.5 && resultat < 25) {
      setCategorie(' Normale ');
      setImageCategorie(require('./assets/image_imc/normal.png'));
    }
    else if (resultat >= 25 && resultat < 30) {
      setCategorie('Surpoids');
      setImageCategorie(require('./assets/image_imc/surpoids.png'));
    }
    else if (resultat >= 30 && resultat < 40) {
      setCategorie('Obésité modérée');
      setImageCategorie(require('./assets/image_imc/obese.png'));
    }
    else {
      setCategorie('Obésité sévère');
      setImageCategorie(require('./assets/image_imc/t_obese.png'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC For II-Master BDCC 1</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Poids</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre poids"
          keyboardType="numeric"
          value={poids}
          onChangeText={setPoids}
        />
        <Text style={styles.unit}>Kg</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Taille</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre taille"
          keyboardType="numeric"
          value={taille}
          onChangeText={setTaille}
        />
        <Text style={styles.unit}>Cm</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={calculerIMC}>
        <Text style={styles.buttonText}>Calculer IMC</Text>
      </TouchableOpacity>

      {imc && (
        <>
          <Text style={styles.result}>Votre IMC est : {imc}</Text>
          <Text style={styles.categorie}>{categorie}</Text>

          {imageCategorie && (
            <Image source={imageCategorie} style={styles.imageCategorie} />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0ff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 40,
    color: '#4a2c6e',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    width: '90%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 70,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  unit: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#6a1b9a',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  categorie: {
    marginTop: 10,
    fontSize: 17,
    color: '#333',
  },
  imageCategorie: {
    width: 90,
    height: 140,
    marginTop: 20,
    resizeMode: 'contain',
  },
});
