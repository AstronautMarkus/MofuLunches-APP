import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonAccordion,
  IonAccordionGroup,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import {
  personOutline,
  personSharp,
  settingsOutline,
  settingsSharp,
  cartOutline,
  cartSharp,
  documentTextOutline,
  documentTextSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  title: string;
}

const pedidosSubmenu: AppPage[] = [
  { title: 'Estado de mi pedido', url: '/pedido/estado' },
  { title: 'Lista de pedidos realizados', url: '/pedido/historial' },
];

const perfilSubmenu: AppPage[] = [
  { title: 'Consultar mi perfil', url: '/perfil/consultar' },
];

const appPages: AppPage[] = [
  { title: 'Consultar carta', url: '/carta' },
  { title: 'Ajustes', url: '/ajustes' },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonAccordionGroup>
          {/* Pedidos menu */}
          <IonAccordion value="pedidos">
            <IonItem slot="header" lines="none">
              <IonIcon slot="start" ios={cartOutline} md={cartSharp} />
              <IonLabel>Pedidos</IonLabel>
            </IonItem>
            <IonList slot="content">
              {pedidosSubmenu.map((page, index) => (
                <IonMenuToggle key={index} autoHide={true}>
                  <IonItem
                    className={location.pathname === page.url ? 'selected' : ''}
                    routerLink={page.url}
                    lines="none"
                    detail={false}
                  >
                    <IonLabel>{page.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ))}
            </IonList>
          </IonAccordion>

          {/* Profile menu */}
          <IonAccordion value="perfil">
            <IonItem slot="header" lines="none">
              <IonIcon slot="start" ios={personOutline} md={personSharp} />
              <IonLabel>Perfil</IonLabel>
            </IonItem>
            <IonList slot="content">
              {perfilSubmenu.map((page, index) => (
                <IonMenuToggle key={index} autoHide={true}>
                  <IonItem
                    className={location.pathname === page.url ? 'selected' : ''}
                    routerLink={page.url}
                    lines="none"
                    detail={false}
                  >
                    <IonLabel>{page.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ))}
            </IonList>
          </IonAccordion>

          {/* Main options */}
          <IonList>
            {appPages.map((page, index) => (
              <IonMenuToggle key={index} autoHide={true}>
                <IonItem
                  className={location.pathname === page.url ? 'selected' : ''}
                  routerLink={page.url}
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={
                      page.title === 'Consultar carta'
                        ? documentTextOutline
                        : settingsOutline
                    }
                    md={
                      page.title === 'Consultar carta'
                        ? documentTextSharp
                        : settingsSharp
                    }
                  />
                  <IonLabel>{page.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonAccordionGroup>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
