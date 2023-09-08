import "./PokemonCard.scss";

function PokemonCard({ pokemon }) {
  const { name, imageUrl } = pokemon;
  return (
    <div className="pokemon-card" key={name}>
      <div className="pokemon-card__image-container">
        <img
          className="pokemon-card__image"
          loading="lazy"
          alt={name}
          src={imageUrl}
        />
      </div>
      <p className="pokemon-card__name">{name} </p>
    </div>
  );
}

export default PokemonCard;
