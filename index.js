import { AppRegistry } from 'react-native';
import App from './src/App'; // Remplacez par le chemin de votre composant racine
import { name as appName } from './app.json';

// Le composant racine de votre application (App) est enregistré ici
AppRegistry.registerComponent(appName, () => App);

// Démarrez l'application en utilisant le composant racine enregistré
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'), // Utilisé en cas de développement web (Expo Web)
});
