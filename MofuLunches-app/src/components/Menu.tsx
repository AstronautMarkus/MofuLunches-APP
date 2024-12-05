import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonAccordion,
  IonAccordionGroup,
} from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUser,
  faCog,
  faList,
} from '@fortawesome/free-solid-svg-icons'; 
import './Menu.css';

interface AppPage {
  url: string;
  title: string;
  icon: any; 
}

const pedidosSubmenu: AppPage[] = [
  { title: 'Estado de mi pedido', url: '/pedido/estado', icon: faList },
  { title: 'Lista de pedidos realizados', url: '/pedido/historial', icon: faCartShopping },
];

const perfilSubmenu: AppPage[] = [
  { title: 'Consultar mi perfil', url: '/perfil/consultar', icon: faUser },
];

const appPages: AppPage[] = [
  { title: 'Consultar carta', url: '/carta', icon: faList },
  { title: 'Ajustes', url: '/ajustes', icon: faCog },
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonAccordionGroup>
          
          {/*Pedidos menu */}
          <IonAccordion value="pedidos">
            <IonItem slot="header" lines="none">
              <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '8px' }} />
              <IonLabel>Pedidos</IonLabel>
            </IonItem>
            <IonList slot="content">
              {pedidosSubmenu.map((page, index) => (
                <IonMenuToggle key={index} autoHide={true}>
                  <IonItem routerLink={page.url} lines="none" detail={false}>
                    <FontAwesomeIcon
                      icon={page.icon}
                      style={{ marginRight: '8px' }}
                    />
                    <IonLabel>{page.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ))}
            </IonList>
          </IonAccordion>

          {/* Perfil menu */}
          <IonAccordion value="perfil">
            <IonItem slot="header" lines="none">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
              <IonLabel>Perfil</IonLabel>
            </IonItem>
            <IonList slot="content">
              {perfilSubmenu.map((page, index) => (
                <IonMenuToggle key={index} autoHide={true}>
                  <IonItem routerLink={page.url} lines="none" detail={false}>
                    <FontAwesomeIcon
                      icon={page.icon}
                      style={{ marginRight: '8px' }}
                    />
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
                <IonItem routerLink={page.url} lines="none" detail={false}>
                  <FontAwesomeIcon
                    icon={page.icon}
                    style={{ marginRight: '8px' }}
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
