export interface ItemLink {
  id: string
  text: string
  href: string
  icon?: string
  type: 'link' | 'button' | 'divider'
  component?: React.ReactNode
  className?: string
}
