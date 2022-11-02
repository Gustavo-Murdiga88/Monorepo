import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function GridColors() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={color} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <span>${key}</span>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
