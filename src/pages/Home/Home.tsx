import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Accordion, PageTitle, Table, Upload } from '../../ui'
import type { AccordionItem } from '../../ui/Accordion/types'
import type { TableColumn } from '../../ui/Table/types'
import styles from './Home.module.scss'

interface DemoTableRow {
  id: string
  name: string
  percentage: string
  count: number
  description: string
}

const demoRows: DemoTableRow[] = Array.from({ length: 100 }, (_, index) => ({
  id: String(index + 1),
  name: 'Lorem ipsum Delorium Sport sdfsdfsdfsfdsdf',
  percentage: '0%',
  count: 0,
  description: 'Lorem ipsum'
}))

const demoColumns: TableColumn<DemoTableRow>[] = [
  { key: 'name', label: 'Name' },
  { key: 'percentage', label: 'Porcentagem', align: 'center' },
  { key: 'count', label: 'Número', align: 'center' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' },
  { key: 'description', label: 'Demo' }
]

const items: AccordionItem[] = [
  {
    id: 'o-que-e',
    title: 'O que é esse serviço?',
    content: <p>Texto explicando o serviço...</p>
  },
  {
    id: 'quem-pode-utilizar',
    title: 'Quem pode utilizar esse serviço?',
    content: <p>Texto sobre elegibilidade...</p>
  },
  {
    id: 'etapas',
    title: 'Etapas para realização desse serviço',
    content: <p>Passo a passo...</p>
  },
  {
    id: 'outras-informacoes',
    title: 'Outras informações sobre esse serviço',
    content: <p>Informações adicionais...</p>
  }
]

export const Home = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const paginatedRows = demoRows.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className={styles['home']}>
      <PageTitle title="Página principal" />
      <a href="/login">Link para login</a>
      {/* <LoginForm onSubmit={values => console.log('LoginForm submitted with values:', values)} /> */}
      <Accordion items={items} />
      <Table
        title="Título da Tabela"
        columns={demoColumns}
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
      <Upload
        label="Envio de arquivos"
        onFilesSelected={files => console.log('Arquivos selecionados', files)}
      />
      <p>
        f you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
        the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
        etc.
      </p>
    </div>
  )
}
