import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table } from '../../ui'

interface Usuario {
  id: string
  nome: string
  email: string
  perfil: 'Administrador' | 'Editor' | 'Visualizador'
}

const usuarios: Usuario[] = [
  { id: '1', nome: 'Ana Souza', email: 'ana.souza@exemplo.gov.br', perfil: 'Administrador' },
  { id: '2', nome: 'Bruno Lima', email: 'bruno.lima@exemplo.gov.br', perfil: 'Editor' },
  { id: '3', nome: 'Carla Mendes', email: 'carla.mendes@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '4', nome: 'Diego Alves', email: 'diego.alves@exemplo.gov.br', perfil: 'Editor' },
  { id: '5', nome: 'Elaine Costa', email: 'elaine.costa@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '6', nome: 'Fábio Rocha', email: 'fabio.rocha@exemplo.gov.br', perfil: 'Administrador' },
  { id: '7', nome: 'Gabriela Dias', email: 'gabriela.dias@exemplo.gov.br', perfil: 'Editor' },
  { id: '8', nome: 'Hugo Martins', email: 'hugo.martins@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '9', nome: 'Igor Barbosa', email: 'igor.barbosa@exemplo.gov.br', perfil: 'Editor' },
  { id: '10', nome: 'Juliana Ramos', email: 'juliana.ramos@exemplo.gov.br', perfil: 'Administrador' },
  { id: '11', nome: 'Kleber Nunes', email: 'kleber.nunes@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '12', nome: 'Larissa Pinto', email: 'larissa.pinto@exemplo.gov.br', perfil: 'Editor' },
  { id: '13', nome: 'Marcelo Teixeira', email: 'marcelo.teixeira@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '14', nome: 'Natália Freitas', email: 'natalia.freitas@exemplo.gov.br', perfil: 'Administrador' },
  { id: '15', nome: 'Otávio Correia', email: 'otavio.correia@exemplo.gov.br', perfil: 'Editor' },
  { id: '16', nome: 'Patrícia Gomes', email: 'patricia.gomes@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '17', nome: 'Rodrigo Cardoso', email: 'rodrigo.cardoso@exemplo.gov.br', perfil: 'Administrador' },
  { id: '18', nome: 'Sabrina Moura', email: 'sabrina.moura@exemplo.gov.br', perfil: 'Editor' },
  { id: '19', nome: 'Thiago Farias', email: 'thiago.farias@exemplo.gov.br', perfil: 'Visualizador' },
  { id: '20', nome: 'Vanessa Pires', email: 'vanessa.pires@exemplo.gov.br', perfil: 'Administrador' }
]

export const Login = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [search, setSearch] = useState('')

  const filtrados = useMemo(() => usuarios.filter(u => u.nome.toLowerCase().includes(search.toLowerCase())), [search])

  const paginaAtual = useMemo(() => {
    const inicio = (page - 1) * pageSize
    return filtrados.slice(inicio, inicio + pageSize)
  }, [filtrados, page, pageSize])

  return (
    <Table
      title="Usuários"
      columns={[
        { key: 'nome', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'perfil', label: 'Perfil', align: 'center' }
      ]}
      data={paginaAtual}
      getRowId={row => row.id}
      selectable
      rowActions={[
        {
          label: 'Visualizar',
          icon: <FontAwesomeIcon icon={faEye} style={{ width: 16, height: 16 }} />,
          onClick: row => console.log('Visualizar', row)
        },
        {
          label: 'Editar',
          icon: <FontAwesomeIcon icon={faPenToSquare} style={{ width: 16, height: 16 }} />,
          onClick: row => console.log('Editar', row)
        },
        {
          label: 'Excluir',
          icon: <FontAwesomeIcon icon={faTrash} style={{ width: 16, height: 16 }} />,
          onClick: row => console.log('Excluir', row)
        }
      ]}
      onSearch={query => {
        setSearch(query)
        setPage(1)
      }}
      pagination={{
        page,
        pageSize,
        totalItems: filtrados.length,
        onPageChange: setPage,
        onPageSizeChange: size => {
          setPageSize(size)
          setPage(1)
        }
      }}
    />
  )
}
