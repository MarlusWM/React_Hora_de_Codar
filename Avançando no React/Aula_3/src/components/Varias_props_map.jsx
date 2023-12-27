
const Varias_props_map = ({manaColor, deckSelect, totalCards, judge}) => {
  return (
    <div>
        <h3>Os jogos serão:</h3>
        <p>Mana {manaColor}, com formato {deckSelect}, {totalCards} cartas</p>
        {judge && <p>Deck validado</p>}
    </div>
  )
}

export default Varias_props_map