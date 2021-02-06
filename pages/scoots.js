import React, { useState } from "react"

import { Card, Modal, Textarea, useToasts } from "@geist-ui/react"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import styles from "../styles/scoots.module.css"

import { useQuery, useMutation, gql} from "@apollo/client"

const syntaxRender = {
	code: ({language, value}) => {
		return <SyntaxHighlighter style={docco} language={language} children={value} />
	}
}

//sample
let scootsQuery = gql`
	query {
		scoots {
			title
			content
			id
	}
}
`


/*
let samples = [
{
title: "How to send a post request",
content:
`
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
`},{
title: "Python List Tip",
content:
`
~~~python
# iteratively add elements to a list
my_list = [i for i in iterative]
~~~
`},{
title: "CSS Aspect Ratio is finally here",
content:
`
~~~css
.myclass {
	aspect-ratio: 16:5;
}
~~~
`
}	
]
*/

const Scoots = () => {
	const [open, setOpen] = useState(false)
	const handler = () => setOpen(true)
	const close = () => setOpen(false)
	const [md, setMd] = useState('')
	const [title, setTitle] = useState('')

	const addScootMutation = gql`
		mutation($title: String!, $content: String!) {
			scoot(title: $title, content: $content) {
				title
			}
		}
	`
	const [addScoot, { scoot }] = useMutation(addScootMutation, {
		fetchPolicy: 'no-cache'
	})

	const [toast, setToast] = useToasts()
	const showToast = () => setToast({
		text: "Scoot created"
	})
	
	// make scoots query
	const { loading, error, data } = useQuery(scootsQuery, {
		fetchPolicy: 'no-cache'
	})
	
	// check if there is loading
	if (loading) {
		return (
			<h1> Loading...</h1>
		)
	}

	// check if there is an error
	if (error) {
	console.log(error)
		return (
			<h1> An error occured</h1>
		)
	}

	const { scoots } = data
	
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
		
		<div className={styles.scootsContainer}>
		
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
	
		</div>
		</>
	)
}

/*
async function getServerSideProps() {
	let pRes = await graphql
						.query({
							query: gql`
									query {
										scoots {
											title,
											content
										}
									}
								`
						})
	let res = await pRes.json()
	let data = res.data.scoots
	console.log(data)
	return { props: { data } }
	
}
*/

export default Scoots
