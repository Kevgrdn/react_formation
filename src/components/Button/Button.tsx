import React from 'react'
import classes from "./button.module.css"

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example
type Props = {
 children?: string
}

const Button = (props: Props) => {
    // const styles = { 
    //     backgroundColor: "black",
    //     color: "white",
    //     borderWidth: "0.5rem",
    //     borderRadius: "1rem"
    // }

    return (
		// <button style={styles}>
		<button className={classes.button}>
			{props.children || 'Default Button' }
		</button>
	)
}


export default Button