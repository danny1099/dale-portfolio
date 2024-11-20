import { Fragment } from 'react'
import { Landing, AboutMe, MyProjects } from '@/modules/home/components'

export default async function Home() {
  return (
    <Fragment>
      <Landing />
      <AboutMe />
      <MyProjects />
    </Fragment>
  )
}
