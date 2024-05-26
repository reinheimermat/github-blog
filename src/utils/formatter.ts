import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const FormatDateTime = (date: string) => {
  if (!date) return ''

  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}
