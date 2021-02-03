import React from "react"
import styles from "../styles/index.module.css"
import Image from "next/image"
import Link from "next/link"

function Index() {
	return (
		<>
		<header className={styles.header}>
		 <Image
		  src="/scooterLogo.svg"
		  width="30px"
		  height="30px" />
		 <h2> Scooter </h2>
		</header>

		<div>
			<span className={styles.logoContainer}>
			<Image
			src="/scooterLogo.svg"
			width="200px"
			height="200px"
			/>
			</span>
			<span className={styles.startButtonContainer}> 
			<Link href="/scoots">
			<button className={styles.getStartedButton}>
				Get Started
			 </button>
			</Link>
			</span>
		</div>

		<div className={styles.c}>
		<div className={styles.features}>
		<span className={styles.card}>
			<p>
				Social Media Preview
			</p>
		</span>
		<span className={styles.card}>
			<p>
				Website Embed
			</p>
		</span>
		<span className={styles.card}>
			<p>
				Syntax Highlight
			</p>
		</span>
		<span className={styles.card}>
			<p>
				Minimal & Fast
			</p>
		</span>

		</div>
		</div>

		<footer className={styles.footer}>
		<p> Built by 	<a href="http://josiasaurel.tech">
		 Josias Aurel
		</a>
		</p>
		</footer>
		</>
	)
}

export default Index
