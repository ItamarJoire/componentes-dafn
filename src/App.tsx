import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header
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
