import './styles.css'
interface TokensProps {
  token: Record<string, string>
  hasRemValue: boolean
}

export function Tokens({ token, hasRemValue = false }: TokensProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixel</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(token).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td> {Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
