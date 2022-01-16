export const navigation = [
  {
    text: 'Home',
    path: '',
    icon: 'home'
  },
  {
    text: 'Commercial & Marketing',
    icon: 'group',
    items: [
      {
        text: 'Clients',
        path: '/client'
      },
      {
        text: 'Agences',
        path: '/agence'
      }
    ]
  },
  { 
    text: 'Fournisseurs & Produits',
    icon: 'product',
    items: [
      {
        text: 'Fournisseurs',
        path: '/fournisseur'
      },
      {
        text: 'Produits',
        path: '/produit'
      },
      {
        text: 'Produits par agence',
        path: '/produit/byagence'
      },
      {
        text: 'Commandes',
        path: '/commande'
      },
      {
        text: 'Transfert de produits',
        path: '/transfert'
      },
      {
        text: 'Produits à Commander',
        path: '/produit/acommander'
      }
    ]
  },
  {
    text: 'Force de Vente',
    icon: 'money',
    items: [
      {
        text: 'Ventes Récentes',
        path: '/vente'
      },
      {
        text: 'Etats Ventes',
        path: '/etatsventes'
      },
      {
        text: 'Archives Ventes',
        path: '/archivesventes'
      }
    ]
  },
  {
    text: 'Gestion Interne',
    icon: 'chart',
    items: [
      {
        text: 'Charges',
        path: '/charges'
      }
      // {
      //   text: 'Tresorerie',
      //   path: '/tresorerie'
      // }
    ]
  }
];
