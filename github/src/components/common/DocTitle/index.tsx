import * as React from 'react'

interface DocTitleProps {
  title: string
}

export const DocTitle: React.FC<DocTitleProps> = ({ title }) => {
  React.useEffect(() => {
    // capitalize title
    document.title = title.charAt(0).toUpperCase() + title.slice(1)
    return function () {
      document.title = 'Carnbon Intensity'
    }
  }, [title])
  return null
}
