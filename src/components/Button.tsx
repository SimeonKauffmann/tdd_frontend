import React from "react"

interface Props {
  type?: string
  title: string
  color?: string
  click?: () => void
}

const Button = ({ type, title, color }: Props) => {
  return type === "button" ? (
    <button style={styles.button(color)}>
      <h2 style={styles.buttonText}>{title}</h2>
    </button>
  ) : (
    <input type="text" style={styles.input(color)} />
  )
}

const styles = {
  button: (color: string | undefined) => ({
    borderRadius: "30px",
    border: "none",
    width: "15%",
    backgroundColor: color ?? "black",
  }),

  buttonText: {
    color: "white",
  },

  input: (color: string | undefined) => ({
    border: "3px, solid black",
    borderRadius: "3px",
    width: "15%",
    padding: "1vw",
    backgroundColor: color ?? "white",
    color: "black",
  }),
}

Button.displayName = "Button"

export default Button
