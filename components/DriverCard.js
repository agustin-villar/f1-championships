export default function Card({ data }) {
  const { circuit, driver } = data;

  return (
    <article>
      <h2>{`${driver.givenName} ${driver.familyName}`}</h2>
      <p>{driver.constructor}</p>
      <p>{driver.nationality}</p>
      <p>{driver.seasonWinner ? 'winner' : ''}</p>
      <p>{circuit.name}</p>
      <p>{`${circuit.locality}, ${circuit.country}`}</p>
    </article>
  );
}
