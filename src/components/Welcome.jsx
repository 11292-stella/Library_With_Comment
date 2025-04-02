import { Alert } from "react-bootstrap"

const Welcome = function () {
  return (
    <>
      {["info"].map((variant) => (
        <Alert key={variant} className="text-center" variant={variant}>
          <strong>Benvenuti nel nostro angolo oscuro!</strong> <br />
          Sei pronto a immergerti nel mondo inquietante dei libri horror? Qui
          troverai una vasta selezione di storie che ti terranno sveglio la
          notte, pronte a spaventarti e affascinarti. Dall'orrore psicologico al
          paranormale, ogni pagina ti farà vivere emozioni forti. Esplora la
          nostra collezione e trova il prossimo libro che farà gelare il tuo
          sangue. Sei pronto a scoprire cosa si nasconde nell'ombra? Buona
          lettura... se osi!
        </Alert>
      ))}
    </>
  )
}

export default Welcome
