import React, { useState } from "react"

import { Card, Modal, Textarea, useToasts } from "@geist-ui/react"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import styles from "../styles/scoots.module.css"

const syntaxRender = {
	code: ({language, value}) => {
		return <SyntaxHighlighter style={docco} language={language} children={value} />
	}
}

const Scoots = () => {
	const [open, setOpen] = useState(false)
	const handler = () => setOpen(true)
	const close = () => setOpen(false)
	const [md, setMd] = useState('')
	const [title, setTitle] = useState('')

	const [toast, setToast] = useToasts()
	const showToast = () => setToast({
		text: "Scoot created"
	})
	
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
		<form onSubmit={e => {
			e.preventDefault()
		}}>
		
		<input 
		placeholder="Title" 
		type="text"
		value={title}
		onChange={(e) => setTitle(e.target.value)} />
		 
		 <Textarea 
		 placeholder="Write markdown"
		 value={md}
		 onChange={(e) => setMd(e.target.value)} />

		<button onClick={(e) => {
			addScoot({
				variables: {
					title: title,
					content: md
				}
			})
			showToast()
			setTitle('')
			setMd('')
		}}>
		Create
		</button>
		</form>
		</div>
		
		</Modal.Content>

		<Modal.Action passive onClick={() => setOpen(false)}>
		Cancel
		</Modal.Action>
		</Modal>
		</header>			
		Test deployment
		<div className={styles.scootsContainer}>
		{/*
		{scoots.map(sample => {
		return (
		<div className={styles.scootContainer}>
		<Card hoverable>
		<h2>{sample.title} </h2>
		<ReactMarkdown 
		children={sample.content} 
		renderers={syntaxRender} />
		</Card>
		</div>
		)
		})}
	*/}
		</div>
		</>
	)
}

/*
async function getServerSideProps() {
	let pRes = await
	let res = await pRes.json()
	let data = res.data.scoots
	console.log(data)
	return { props: { data } }
	
}
*/

export default Scoots
