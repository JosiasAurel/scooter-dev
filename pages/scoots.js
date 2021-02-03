import React, { useState } from "react"

import { Card, Modal, Textarea } from "@geist-ui/react"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import styles from "../styles/scoots.module.css"

const syntaxRender = {
	code: ({language, value}) => {
		return <SyntaxHighlighter style={docco} language={language} children={value} />
	}
}

//sample
let sample = `
## Hello World

~~~javascript
console.log("Hello World");
~~~
`

let samples = [
`
## How to send a post request

~~~javascript
fetch('http://example.com', {
	headers: {
		'Content-Type': 'application/json'
	},
	body: {
		JSON.stringify({
			name: 'Samson'
		})
	}
})
~~~
`,
`
## Python List tip

~~~python
# iteratively add elements to a list
my_list = [i for i in iterative]
~~~
`,
`
## CSS Aspect Ratio is finally here

~~~css
.myclass {
	aspect-ratio: 16:5;
}
~~~
`
	
]

const Scoots = () => {
	const [open, setOpen] = useState(false)
	const handler = () => setOpen(true)
	const close = () => setOpen(false)

	return (
		<>
		<header className={styles.header}>
		<h2>Scoots</h2>
		 <button onClick={handler}>
		 +
		</button>
		<Modal open={open} onClose={close}>
		
		<Modal.Title>
		Create new scoot 
		</Modal.Title>
		
		<Modal.Content>
		<div className={styles.inputC}>
		 <Textarea placeholder="Write markdown" />
		</div>
		</Modal.Content>

		<Modal.Action passive onClick={() => setOpen(false)}>
		Cancel
		</Modal.Action>
		<Modal.Action>
		Create
		</Modal.Action>
		</Modal>
		</header>			
		
		<div className={styles.scootsContainer}>

		{samples.map(sample => {
		return (
		<div className={styles.scootContainer}>
		<Card hoverable>
		<ReactMarkdown 
		children={sample} 
		renderers={syntaxRender} />
		</Card>
		</div>
		)
		})}
		
		</div>
		</>
	)
}

export default Scoots
