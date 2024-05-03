import React, { useState } from 'react'
import Body from './Body'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCompressAlt, faExpandAlt, faClose, fahtml5 } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'





const App = () => {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavascript] = useState('')

  const srcdoc = `
  <html>
  <body>
    ${html}
  </body>
  <style>
  ${css}</style>
  <script>
  ${javascript}</script>
  </html>
  `


  return (


    <>
      <Header />
      <div className=' head'>

        <Body language="xml"
          displayName="HTML" value={html} onChange={setHtml} />

        <Body language="css" displayName="CSS" value={css} onChange={setCss} />
        <Body language="javascript" displayName="Js" value={javascript} onChange={setJavascript} />
      </div>
      <div className="output">
        <iframe srcDoc={srcdoc} src="" frameborder="0" />
      </div>




    </>
  )
}

export default App