import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonText,
  IonButton,
} from '@ionic/react';
import './home.css';
import logo from '../../../img/logo.png';
const Home: React.FC = () => {

  return (
    <IonPage>

      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MofuLunches</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent fullscreen className="ion-padding home-content">
        <IonGrid>
          {/* Logo */}
          <IonRow className="ion-justify-content-center ion-margin-bottom">
            <IonCol size="6" size-md="4" className="ion-text-center">
              <IonImg src={logo} alt="MofuLunches Logo" className="home-logo" />
            </IonCol>
          </IonRow>

          {/* Bienvenida */}
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="8" className="ion-text-center">
              <IonText>
                <h1 className="home-title">¡Bienvenido a MofuLunches!</h1>
              </IonText>
              <IonText>
                <p className="home-description">
                  Aquí puedes realizar pedidos, consultar el estado de tus órdenes, y calificar nuestras cartas. ¡Disfruta de una experiencia única!
                </p>
              </IonText>

              <IonText>
                <p className="home-description">
                  Para comenzar, inicia sesión.
                </p>
              </IonText>

              <IonButton expand="block" routerLink="/login">
                Iniciar Sesión
              </IonButton>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
