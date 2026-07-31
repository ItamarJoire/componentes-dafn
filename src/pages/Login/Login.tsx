import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { PageTitle, Table } from '../../ui'
import type { TableColumn } from '../../ui/Table/types'
import styles from './Login.module.scss'

// Interface para cada linha de dado
interface RowData {
  id: string
  name: string
  email: string
  role: string
  status: 'Ativo' | 'Inativo' | 'Pendente'
  createdAt: string
}

// Definição das colunas da tabela
const columns: TableColumn<RowData>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'E-mail' },
  { key: 'role', label: 'Cargo' },
  { key: 'status', label: 'Status' },
  { key: 'createdAt', label: 'Data de Criação' }
]

// Lista com nomes fictícios para cada linha
const demoRows: RowData[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana.silva@empresa.com',
    role: 'Desenvolvedora Frontend',
    status: 'Ativo',
    createdAt: '10/01/2026'
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@empresa.com',
    role: 'Gerente de Projetos',
    status: 'Ativo',
    createdAt: '15/01/2026'
  },
  {
    id: '3',
    name: 'Mariana Santos',
    email: 'mariana.santos@empresa.com',
    role: 'UX/UI Designer',
    status: 'Pendente',
    createdAt: '22/02/2026'
  },
  {
    id: '4',
    name: 'Lucas Ferreira',
    email: 'lucas.ferreira@empresa.com',
    role: 'Engenheiro Backend',
    status: 'Ativo',
    createdAt: '03/03/2026'
  },
  {
    id: '5',
    name: 'Beatriz Costa',
    email: 'beatriz.costa@empresa.com',
    role: 'Analista de Dados',
    status: 'Inativo',
    createdAt: '18/04/2026'
  },
  {
    id: '6',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '7',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '8',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '9',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '10',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '11',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '12',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '13',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '14',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '15',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  },
  {
    id: '16',
    name: 'Rafael Almeida',
    email: 'rafael.almeida@empresa.com',
    role: 'DevOps Engineer',
    status: 'Ativo',
    createdAt: '05/05/2026'
  }
]

export const Login = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  // Cálculo para a paginação
  const paginatedRows = demoRows.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className={styles['login']}>
      <PageTitle title="Login" />
      <h2>
        {' '}
        <a href="/">Voltar para Home</a>
      </h2>

      <Table
        title="Usuários do Sistema"
        columns={columns}
        data={paginatedRows}
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
        onSearch={query => console.log('Buscar', query)}
        onDelete={ids => console.log('Excluir selecionados', ids)}
        onDownload={ids => console.log('Download selecionados', ids)}
        pagination={{
          page,
          pageSize,
          totalItems: demoRows.length,
          onPageChange: setPage,
          onPageSizeChange: size => {
            setPageSize(size)
            setPage(1)
          }
        }}
      />
    </div>
  )
}
