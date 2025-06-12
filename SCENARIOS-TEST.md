# Guide de Test des Scénarios Bell

## 🎯 Objectif

Tester les scénarios contextuels de conversation pour les services spa et room service implémentés dans l'application Bell.

## 🚀 Comment Tester

### 1. Page de Test Dédiée

Accédez à la page de test : `http://localhost:3000/test-scenarios`

Cette page permet de tester chaque service individuellement avec des boutons de sélection.

### 2. Application Mobile Principale

Accédez à la page mobile : `http://localhost:3000/mobile`

Navigation naturelle via les ServiceTags pour tester l'intégration complète.

## 📋 Scénarios Implémentés

### 🧘 **Spa & Massage**
- **Message d'accueil** : Présentation du spa avec options
- **Actions rapides** :
  - `Voir nos services` → Affiche le menu spa détaillé
  - `Réserver un massage` → Flow de réservation
- **Réponses contextuelles** : Prix, créneaux disponibles, confirmation

### 👨‍🍳 **Room Service**
- **Message d'accueil** : Présentation du service 24h/24
- **Actions rapides** :
  - `Voir la carte` → Redirige vers le menu complet
  - `Petit-déjeuner` → Information spécialisée
- **Réponses contextuelles** : Carte du jour, délais de livraison, frais

### 🧹 **Housekeeping**
- **Message d'accueil** : Services d'entretien
- **Actions rapides** :
  - `Ménage supplémentaire`
  - `Nouvelles serviettes` 
  - `Signaler un problème`

### 🔑 **Conciergerie**
- **Message d'accueil** : Services de conciergerie
- **Actions rapides** :
  - `Réserver un restaurant`
  - `Infos touristiques`
  - `Commander un taxi`

## 🧪 Tests à Effectuer

### ✅ Test 1 : Navigation entre Services
1. Ouvrir `/test-scenarios`
2. Cliquer sur chaque bouton de service
3. Vérifier que l'en-tête change correctement
4. Vérifier que le message d'accueil est adapté

### ✅ Test 2 : Actions Rapides
1. Attendre la fin de l'animation de frappe
2. Cliquer sur chaque bouton d'action rapide
3. Vérifier que les réponses contextuelles s'affichent
4. Vérifier que les nouveaux boutons apparaissent

### ✅ Test 3 : Integration Mobile
1. Ouvrir `/mobile`
2. Cliquer sur les ServiceTags
3. Vérifier la navigation contextuelle :
   - `Room Service` → Menu complet
   - `Spa & Massage` → Conversation spa
   - `Housekeeping` → Conversation housekeeping
   - `Conciergerie` → Conversation conciergerie

### ✅ Test 4 : Flow Complet Spa
1. Sélectionner `Spa & Massage`
2. Cliquer `Voir nos services`
3. Cliquer `Réserver un massage`
4. Vérifier le flow jusqu'à la confirmation

### ✅ Test 5 : Flow Complet Room Service
1. Sélectionner `Room Service`
2. Cliquer `Voir la carte`
3. Vérifier la redirection vers le menu
4. Tester l'ajout au panier et commande

## 🎨 Animations à Vérifier

- ✅ **Indicateurs de frappe** : 3 points animés avant le texte
- ✅ **Animation progressive** : Texte qui s'affiche caractère par caractère
- ✅ **Boutons d'action** : Apparition après le texte complet
- ✅ **Transitions** : Changement fluide entre services
- ✅ **Scroll automatique** : Scroll vers le bas lors de nouveaux messages

## 🔧 Structure Technique

### Types Principaux
```typescript
interface ChatScenario {
  id: string;
  serviceType: 'spa' | 'room-service' | 'housekeeping' | 'concierge' | 'general';
  title: string;
  botResponses: BotResponse[];
  context: ScenarioContext;
}
```

### Composants Clés
- `ContextualConversationView` : Chat adaptatif par service
- `getScenarioByService()` : Fonction de récupération des scénarios
- Actions rapides intégrées avec callbacks

## 🐛 Problèmes Potentiels

1. **Animations qui se chevauchent** : Vérifier les timeouts
2. **Boutons non cliquables** : Vérifier les z-index
3. **Scroll non fonctionnel** : Vérifier les heights
4. **Navigation cassée** : Vérifier les redirections

## 📊 Métriques de Succès

- [ ] **Temps de réponse** < 1.5s pour l'affichage
- [ ] **Animations fluides** sans saccades
- [ ] **Navigation intuitive** entre services
- [ ] **Actions fonctionnelles** avec feedback approprié
- [ ] **Messages contextuels** pertinents par service

---

## 🎉 Prêt pour les Tests !

Lancez le serveur de développement et commencez vos tests :

```bash
npm run dev
# ou
yarn dev
```

Puis ouvrez :
- **Test dédié** : `http://localhost:3000/test-scenarios`
- **App mobile** : `http://localhost:3000/mobile`

Bon test ! 🚀 