import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Importez les fichiers SVG pour chaque pièce
//import PionSvg from './PionSvg'; // Remplacez par le chemin de votre fichier SVG de pion
import TourSvg from '../assets/Toursvg'; // Remplacez par le chemin de votre fichier SVG de tour
// Importez d'autres SVG pour les autres pièces


const ChessWidget = () => {
  // Modifiez votre structure de données pour utiliser des identifiants de pièces
  const [board, setBoard] = useState([
    ['tour', 'cavalier', 'fou', 'reine', 'roi', 'fou', 'cavalier', 'tour'],
    ['pion', 'pion', 'pion', 'pion', 'pion', 'pion', 'pion', 'pion'],
    // ...
  ]);

  // Fonction pour rendre chaque case
  const renderSquare = (piece, row, col) => {
    let pieceSvg;

    // Utilisez des conditions pour sélectionner le SVG approprié en fonction de l'identifiant de la pièce
    switch (piece) {
      case 'tour':
        pieceSvg = <TourSvg />;
        break;
      // Ajoutez d'autres cas pour les autres pièces
      default:
        pieceSvg = null; // Pièce inconnue
    }

    return (
      <View key={`${row}-${col}`} style={styles.square}>
        {pieceSvg}
      </View>
    );
  };

  // Fonction pour rendre chaque ligne
  const renderRow = (row, rowIndex) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {row.map((piece, colIndex) => renderSquare(piece, rowIndex, colIndex))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => renderRow(row, rowIndex))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightSquare: {
    backgroundColor: 'lightgray',
  },
  darkSquare: {
    backgroundColor: 'gray',
  },
});

export default ChessWidget;
