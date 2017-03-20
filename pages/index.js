import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Head from 'next/head'
import Search from '../components/search'
import Restaurant from '../components/restaurant'

export default () => (
  <MuiThemeProvider>
    <div>
      <Head>
        <title>Foodyak</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <h1>Search restaurant ratings all at once.</h1>
      <Search></Search>
      <Restaurant name="Restaurant 1"></Restaurant>
    </div>
  </MuiThemeProvider>
)