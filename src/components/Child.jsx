function Child({ count, handleClick }) {
  return (
    <>
      <button onClick={handleClick}>
        Increment
      </button>
      <p>Child count is { count }</p>
    </>
  )
}

export default Child