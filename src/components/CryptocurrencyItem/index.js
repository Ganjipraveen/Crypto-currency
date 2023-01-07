import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = item

  return (
    <li className="list-items">
      <div className="item-container">
        <img className="item-image" src={currencyLogo} alt={currencyName} />
        <p className="item-topic">{currencyName}</p>
        <p className="item-title">{usdValue}</p>

        <p className="author-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
