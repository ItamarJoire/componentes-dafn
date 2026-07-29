import { Header } from './components/Header'
import { Footer } from './components/Footer'
import styles from './App.module.scss'
import { LoginForm } from './features/LoginForm'
import { Accordion } from './components/ui'
import type { AccordionItem } from './components/types'

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


function App() {
  return (
    <div className={styles['app-wrapper']}>
      <Header />
      <main className={styles['app-main']} style={{ padding: 32 }}>
        <Accordion items={items} />
        <LoginForm onSubmit={values => console.log('LoginForm submitted with values:', values)} />
        <p>
          Conteúdo da página... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,
          when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914
          Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not
          only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and
          Microsoft Word including versions of Lorem Ipsum. Where can I get some? There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default App
