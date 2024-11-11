# MUI to Tailwind Converter

Un outil de conversion en temps réel pour transformer les composants Material-UI (MUI) en classes Tailwind CSS.

## 🌟 Développé par
- [Ayina Maerik](https://www.linkedin.com/in/ayinamaerik/)
- [Tresor Manock](https://www.linkedin.com/in/tr%C3%A9sormanock/)

## 📖 Table des matières
- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Guide technique](#guide-technique)
- [Composants pris en charge](#composants-pris-en-charge)
- [Contribution](#contribution)
- [Limitations connues](#limitations-connues)
- [Roadmap](#roadmap)

## 🎯 Aperçu
Ce projet permet aux développeurs de convertir facilement leur code Material-UI en classes Tailwind CSS équivalentes. L'outil offre une interface interactive avec prévisualisation en temps réel.

## ✨ Fonctionnalités
- Conversion en temps réel
- Prévisualisation du résultat
- Support des composants MUI courants
- Interface responsive
- Animations fluides avec Framer Motion
- Copie rapide du code converti

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/Treys1704/muiToTailwind.git

# Accéder au répertoire
cd muiToTailwind

# Installer les dépendances
npm install

# Lancer l'application
npm run dev

# Creation de votre fichier .env avec votre secret key
```

### Dépendances principales
```json
{
  "dependencies": {
    "@monaco-editor/react": "^4.4.6",
    "framer-motion": "^6.0.0",
    "@tailwindcss/typography": "^2.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── CodeConverter.jsx    # Composant principal de conversion
│   ├── ComponentsList.jsx   # Liste des composants supportés
│   └── Preview.jsx         # Prévisualisation du code converti
├── utils/
│   ├── componentMappings.js # Mappings MUI vers Tailwind
│   ├── converter.js        # Logique de conversion
│   ├── dynamicStyles.js    # Gestion des styles dynamiques
│   └── propHandlers.js     # Gestion des props complexes
├── styles/
│   └── App.css            # Styles globaux
└── App.jsx                # Point d'entrée de l'application
```

## 🔧 Guide technique

### Configuration Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Configurations personnalisées
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  // Liste des classes safelist
}
```

### Ajout de nouveaux composants
Pour ajouter le support d'un nouveau composant MUI :

1. Mettre à jour `componentMappings.js` :
```javascript
export const componentMappings = {
  NouveauComposant: {
    prop: {
      value: 'classes-tailwind-correspondantes'
    }
  }
}
```

2. Ajouter le mapping HTML dans `htmlMappings.js` :
```javascript
export const htmlMappings = {
  NouveauComposant: 'element-html-equivalent'
}
```

### Gestion des styles dynamiques
Les styles dynamiques sont gérés via `dynamicStyles.js`. Pour ajouter de nouveaux styles :

```javascript
export function handleDynamicStyles(props, component) {
  // Logique de conversion des styles
}
```

## 🎨 Composants pris en charge
- Layout Components (Container, Grid, etc.)
- Input Components (Button, TextField, etc.)
- Data Display (Typography, List, etc.)
- Navigation (AppBar, Menu, etc.)
- Surfaces (Card, Paper, etc.)
- Feedback Components (Alert, Snackbar, etc.)
- Data Grid
- Date & Time Pickers

## 🤝 Contribution
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## ⚠️ Limitations connues
- Certains composants complexes peuvent nécessiter des ajustements manuels
- Les styles très personnalisés peuvent ne pas être convertis parfaitement
- Les animations complexes nécessitent une configuration manuelle

## 🗺️ Roadmap
- [ ] Support de plus de composants MUI
- [ ] Amélioration de la prévisualisation
- [ ] Support des thèmes personnalisés
- [ ] Export/Import de configurations
- [ ] Tests automatisés

## 🔍 Debugging
Pour le debugging, utilisez les outils de développement React et la console du navigateur. Les erreurs de conversion sont affichées dans l'interface utilisateur.

## 🔒 Sécurité
- Le code est converti côté client
- Utilisation de `dangerouslySetInnerHTML` sécurisée pour la prévisualisation
- Validation des entrées utilisateur

## 📝 Notes pour les développeurs
- Assurez-vous de maintenir la cohérence des mappings
- Testez les conversions avec différents cas d'utilisation
- Documentez les nouveaux composants ajoutés
- Suivez les conventions de code existantes

## 🏗️ Architecture
```
Frontend (React)
└── Components
    ├── Conversion Logic
    │   └── Component Mappings
    ├── Preview System
    └── UI Components
```

## 📚 Ressources utiles
- [Documentation Material-UI](https://mui.com/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
- [React Documentation](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)

## 📫 Contact
Pour toute question ou suggestion, contactez :
- Ayina Maerik - [LinkedIn](https://www.linkedin.com/in/ayinamaerik/)
- Tresor Manock - [LinkedIn](https://www.linkedin.com/in/tr%C3%A9sormanock/)

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

Développé avec ❤️ par Ayina Maerik & Tresor Manock
