import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt, faClose, fahtml5 } from '@fortawesome/free-solid-svg-icons'



const Body = (props) => {

  const { displayName, icon, language, value, onChange } = props

  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }
  return (
    <div className={`bx ${open ? '' : 'closed'}`} >

      <div className='title'>

        {icon}
        {displayName}

        <button type="button" className="btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faClose} />
        </button>
      </div>
      <ControlledEditor onBeforeChange={handleChange} value={value}
        className="codemirror-wrapper"
        options={{
          mode: language,
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          theme: 'material',

        }}
      />
    </div>
  )
}

export default Body
