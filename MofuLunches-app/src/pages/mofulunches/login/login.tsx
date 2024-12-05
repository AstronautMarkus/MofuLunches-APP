import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonText,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import './login.css';

const Login: React.FC = () => {
  const [rut, setRut] = useState('');

  const formatRut = (value: string) => {
    // Remove all non-numeric characters except 'k' or 'K'
    let formatted = value.replace(/[^0-9kK]/g, '');

    // Limit to 9 characters before formatting
    if (formatted.length > 9) {
      formatted = formatted.slice(0, 9);
    }

    // Add dots and hyphen
    if (formatted.length > 1) {
      formatted = formatted.slice(0, -1) + '-' + formatted.slice(-1);
    }
    if (formatted.length > 4) {
      formatted = formatted.slice(0, -5) + '.' + formatted.slice(-5);
    }
    if (formatted.length > 7) {
      formatted = formatted.slice(0, -9) + '.' + formatted.slice(-9);
    }

    return formatted;
  };

  const handleRutChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9kK]/g, ''); // Allow only numbers and 'k' or 'K'
    const formattedValue = formatRut(value);
    setRut(formattedValue);
    e.target.value = formattedValue; // Update the input value to show formatted RUT in real-time
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen className="ion-padding login-content">
        <IonGrid className="login-grid">
          <IonRow className="ion-justify-content-center ion-align-items-center login-row">
            <IonCol size="12" size-md="6" size-lg="4" className="login-col">
              <div className="login-container">
                <IonTitle className="login-title">Iniciar sesión</IonTitle>
                <form className="login-form">
                  {/* RUT input */}
                  <IonItem className="input-item" lines="none">
                    <IonLabel position="stacked">RUT</IonLabel>
                    <IonInput
                      className="input-field"
                      type="text"
                      placeholder="Ingrese su RUT sin puntos ni guión."
                      value={rut}
                      onIonChange={handleRutChange}
                      maxlength={12} // Limit total length to 12 including formatting
                      required
                    />
                  </IonItem>

                  {/* Password input */}
                  <IonItem className="input-item" lines="none">
                    <IonLabel position="stacked">Contraseña</IonLabel>
                    <IonInput
                      className="input-field"
                      type="password"
                      placeholder="Ingrese su contraseña."
                      required
                    />
                  </IonItem>

                  {/* Forgot password input */}
                  <IonText className="forgot-password">
                    <a href="/forgot-password">Olvidé mi contraseña</a>
                  </IonText>

                  {/* Login */}
                  <IonButton expand="block" className="login-button">
                    Ingresar
                  </IonButton>
                </form>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
