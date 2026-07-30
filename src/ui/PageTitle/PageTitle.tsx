import React from 'react'
import { Helmet } from 'react-helmet-async'
import type { PageTitleProps } from './types'

const TITLE_TEMPLATE = '%s | ITI'

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <Helmet titleTemplate={TITLE_TEMPLATE} title={title} />
)
