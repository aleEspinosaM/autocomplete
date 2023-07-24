import { Character } from "../../types";
import { Highlighted } from "../Highlighted";
import './styles.scss'

interface Props {
  characters: Character[];
  term: string;
}
export const Characters = ({ characters, term }: Props) => {
  return (
    <section className='container'>
      {
        characters.map((c) => (
          <div key={c.id}>
            <div className='card'>
              <div className='card-image' style={{ background: `url(${c.image})` }} />
              <div className="card-text">
                <Highlighted text={c.name} highlight={term} />
                <p>{c.species}</p>
              </div>
              <div className="card-stats">
                <div className="stat">
                  <div>{c.status}</div>
                </div>
                <div className="stat">
                  <p className="link">
                    {c.location.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
}
