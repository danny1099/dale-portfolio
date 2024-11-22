import { Fragment } from 'react'
import { Landing } from '@/modules/home/components'
import { AboutMe } from '@/modules/about/components'
import { MyProjects } from '@/modules/projects/components'

export default async function Home() {
  return (
    <Fragment>
      <Landing />
      <AboutMe />
      <MyProjects />
    </Fragment>
  )
}
