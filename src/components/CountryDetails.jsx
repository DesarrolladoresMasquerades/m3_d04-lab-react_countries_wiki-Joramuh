function CountryDetails(props) {
  return (
    <div>
      <img /*usar este img template para las banderas */
        src={`https://flagpedia.net/data/flags/w580/${props.CountryDetails.alpha2Code.toLowerCase()}.png`}
        alt=""
        width="100px"
        height="auto"
      />

      <h1>{props.CountryDetails.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{props.CountryDetails.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {props.CountryDetails.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {props.CountryDetails.borders.length > 0 ?
                props.CountryDetails.borders.map((border) => (
                  <li>
                    <a href={border}>{border}</a>
                  </li>
                )): "Has no bordering country"
              }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
