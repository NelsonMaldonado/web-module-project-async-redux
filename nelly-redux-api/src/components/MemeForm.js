import React from "react"

const MemeForm = () => {
  return (
    <form>
      <input placeholder="number from 1-100" />
      <button
        style={{
          backgroundColor: "#8b9dc3",
          color: "#f7f7f7",
          marginBottom: "20px",
        }}
      >
        enter number
      </button>
    </form>
  )
}
export default MemeForm
