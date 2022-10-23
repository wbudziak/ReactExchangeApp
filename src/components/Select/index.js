
function Select(props) {
  const { rates, text, options, onChange } = props;

  return (
    <>
      <label>
        {text}
        <select onChange={onChange}>
          {rates &&
            rates[0].map((rate) =>
              rate === options ? (
                <option selected="selected" key={rate} value={rate}>
                  {rate}
                </option>
              ) : (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              )
            )}
        </select>
      </label>
    </>
  );
}
export default Select;
