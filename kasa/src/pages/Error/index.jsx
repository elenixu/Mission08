function Error() {
  return (
    <div>
      <div className="error-container">
        <div className="error-titre">404</div>
        <div className="error-soutitre">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <a href="/">
          <div className="error-link">Retourner sur la page d’accueil</div>
        </a>
      </div>
    </div>
  )
}

export default Error
