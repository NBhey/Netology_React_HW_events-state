import "./Toolbar.css";

function Toolbar({ filters, selected, onSelectFilter }) {
  const styleFilterList = {
    listStyleType: "none",
    display: "flex",
    gap: "50px",
  };
  return (
    <>
      <ul style={styleFilterList}>
        {filters.map((el, index) => {
          return (
            <li
              className="styleFilterListElemnt"
              key={index}
              onClick={onSelectFilter}
              style={{ fontWeight: el === selected ? "bold" : "normal" }}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Toolbar;
