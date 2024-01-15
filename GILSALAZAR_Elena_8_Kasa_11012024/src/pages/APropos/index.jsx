import Banner from '../../components/Banner'
import imageAPropos from '../../assets/img_apropos.png'
import Dropbox from '../../components/Dropbox'

function APropos() {
  return (
    <div>
      <div className="ap-global-container">
        <div className="ap-apropos-container">
          <Banner picture={imageAPropos} text="" />
        </div>
        <div className="ap-info-container">
          <Dropbox
            name="FIabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toute les informations sont régulièrement vérifiées par nos équipes."
          ></Dropbox>
          <Dropbox
            name="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
          ></Dropbox>
          <Dropbox
            name="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
          ></Dropbox>
          <Dropbox
            name="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notre aussi bien à l'hôte qu'au locataire, cela permet à notre service de vérifier que les standards sont bien respectés. Nous organisons également des ateliers concernant la sécurité domestique de nos hôtes."
          ></Dropbox>
        </div>
      </div>
    </div>
  )
}

export default APropos
