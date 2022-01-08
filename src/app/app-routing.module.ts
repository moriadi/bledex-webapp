import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ConfirmComponent } from './shared/components';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxDataGridModule, DxFormModule, DxButtonModule, DxTemplateModule, DxPopupModule, DxPopoverModule, DxCheckBoxModule, DxSelectBoxModule, DxNumberBoxModule, DxAutocompleteModule, DxScrollViewModule, DxResponsiveBoxModule, DxTabPanelModule, DxDateBoxModule, DxLoadIndicatorModule, DxToastModule } from 'devextreme-angular';
import { AuthGuard } from './helpers/auth.guard';
import { CommonModule } from '@angular/common';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { FournisseurFormComponent } from './components/fournisseur-form/fournisseur-form.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { CommandeComponent } from './pages/commande/commande.component';
import { CommandeFormComponent } from './components/commande-form/commande-form.component';
import { LigneCommandeFormComponent } from './components/lignecommande-form/lignecommande-form.component';
import { CommandeDetailsComponent } from './components/commande-details/commande-details.component';
import { ClientComponent } from './pages/client/client.component';
import { VenteComponent } from './pages/ventes/vente.component';
import { VenteFormComponent } from './components/vente-form/vente-form.component';
import { VenteDetailsComponent } from './components/vente-details/vente-details.component';
import { LigneVenteFormComponent } from './components/lignevente-form/lignevente-form.component';
import { FactureComponent } from './pages/facture/facture.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { VentesMensuellesComponent } from './pages/ventesmensuelles/ventesmensuelles.component';
import { VenteMensuelleDetailsComponent } from './components/vente-mensuelle-details/ventemensuelle-details.component';
import { ArchivesVenteComponent } from './pages/archives-ventes/archive-vente.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { DxiRowModule, DxiColumnModule } from 'devextreme-angular/ui/nested';
import { EtatsVentesComponent } from './components/etatsventes/etats-ventes.component';
import { VentesQuotidiennesComponent } from './pages/ventesquotidiennes/ventesquotidiennes.component';
import { ChargeComponent } from './pages/charge/charge.component';
import { ChargeFormComponent } from './components/charge-form/charge-form.component';
import { ProduitACommanderComponent } from './pages/produitacommander/produit-a-commander.component';
import { TresorerieComponent } from './pages/tresorerie/tresorerie.component';
import { TresorerieFormComponent } from './components/tresorerie-form/tresorerie-form.component';
import { VenteDateFormComponent } from './components/vente-date-form/vente-date-form.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { AgenceProduitsComponent } from './components/agence-produit/agence-produit.component';
import { TransfertComponent } from './pages/transfert/transfert.component';
import { TransfertFormComponent } from './components/transfert-form/transfert-form.component';
import { LigneTransfertFormComponent } from './components/lignetransfert-form/lignetransfert-form.component';
import { TransfertDetailsComponent } from './components/transfert-details/transfert-details.component';
import { VenteProduitComponent } from './pages/ventesproduits/venteproduits.component';
import { ArchiveVenteFilterComponent } from './components/archive-vente-filter/archive-vente-filter.component';
import { ArchiveVenteResultComponent } from './components/archive-vente-result/archive-vente-result.component';
import { VenteConfirmComponent } from './components/vente-confirm/vente-confirm.component';

const routes: Routes = [
  {
    path: 'home', redirectTo: '/client', pathMatch:'full' 
  },
  {
    path: '', redirectTo: '/client', pathMatch:'full' 
  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agence',
    component: AgenceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fournisseur',
    component: FournisseurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'produit',
    component: ProduitComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'produit/acommander',
    component: ProduitACommanderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'commande',
    component: CommandeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transfert',
    component: TransfertComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vente',
    component: VenteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ventesmensuelles',
    component: VentesMensuellesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etatsventes',
    component: EtatsVentesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'archivesventes',
    component: ArchivesVenteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'facture/:vente_id',
    component: FactureComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'charges',
    component: ChargeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tresorerie',
    component: TresorerieComponent,
    canActivate: [AuthGuard]
  },
  {
      path: 'admin',
      component: ClientComponent,
      canActivate: [AuthGuard],
      data: { roles: ['admin'] }
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginFormComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    DxDataGridModule, 
    DxFormModule, 
    DxButtonModule,
    DxTemplateModule, 
    DxPopupModule, 
    DxPopoverModule,
    CommonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxAutocompleteModule,
    DxScrollViewModule,
    DxiRowModule,
    DxiColumnModule,
    DxResponsiveBoxModule,
    DxTabPanelModule,
    DxDateBoxModule,
    DxLoadIndicatorModule,
    DxToastModule
  ],
  exports: [RouterModule],
  declarations: [
    AgenceComponent,
    AgenceProduitsComponent,
    TransfertComponent,
    TransfertFormComponent,
    LigneTransfertFormComponent,
    TransfertDetailsComponent,
    HomeComponent, 
    ProfileComponent, 
    FournisseurComponent,
    FournisseurFormComponent,
    ProduitComponent,
    ProduitFormComponent,
    CommandeComponent,
    CommandeFormComponent,
    LigneCommandeFormComponent,
    CommandeDetailsComponent,
    ClientComponent,
    ClientFormComponent,
    VenteComponent,
    VenteFormComponent,
    VenteDetailsComponent,
    LigneVenteFormComponent,
    FactureComponent,
    ProfilComponent,
    VentesMensuellesComponent,
    VenteMensuelleDetailsComponent,
    ArchivesVenteComponent,
    ConfirmComponent,
    EtatsVentesComponent,
    VentesQuotidiennesComponent,
    ChargeComponent,
    ChargeFormComponent,
    ProduitACommanderComponent,
    TresorerieComponent,
    TresorerieFormComponent,
    VenteDateFormComponent,
    VenteProduitComponent,
    ArchiveVenteFilterComponent,
    ArchiveVenteResultComponent,
    VenteConfirmComponent
  ]
})
export class AppRoutingModule { }
