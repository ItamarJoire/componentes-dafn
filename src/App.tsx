import { GovBrHeader } from './components/Header/index.ts'

function App() {
  return (
    <div>
      <GovBrHeader
        onSearch={query => {
          console.log('Buscar por:', query)
        }}
      />
      <main style={{ padding: 24 }}>
        <p>Conteúdo da página...</p>
      </main>
    </div>
  )
}

export default App
