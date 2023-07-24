import './styles.scss';

interface Props {
  term: string;
  onChange: (value: string) => void
}
export const SearchBar = ({
  term,
  onChange,
}: Props) => {

  return (
    <header className='header'>
      <div className='search'>
        <label>
          Search your Character: &nbsp;
          <input 
            name='search' 
            type='text' 
            value={term}
            onChange={(e) => onChange(e.target.value)}
          />
        </label>
      </div>
    </header>
  )
}