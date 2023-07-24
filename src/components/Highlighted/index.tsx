
interface Props {
  text: string;
  highlight: string;
}

export const Highlighted = ({ text = '', highlight = '' }: Props) => {
  // TODO: sanitize this regex
  if (!highlight.trim()) {
    return <h2>{text}</h2>
  }
  const regex = new RegExp(`(${highlight})`, 'gi')
  const parts = text.split(regex)
  return (
    <h2>
      {parts.filter(part => part).map((part, i) => (
        regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
      ))}
    </h2>
  )
}