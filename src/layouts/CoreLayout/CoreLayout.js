// @flow
import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import routes from '../../routes'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

// normalize with antd and add icons & animations
import 'antd/lib/style/css'
import '../../styles/core.css'
import styles from './CoreLayout.css'

export const CoreLayout = () => (
  <div className={styles['core-layout']}>
    <Header />
    <Sidebar />
    <div className={styles['viewport']}>
      <Switch>
        <Route path='/' component={routes.home} exact />
        <Route path='/counter' component={routes.counter} exact />
        <Route path='/github/k2data/repos' component={routes.githubRepos} exact />
      </Switch>
    </div>
  </div>
)

export default CoreLayout
