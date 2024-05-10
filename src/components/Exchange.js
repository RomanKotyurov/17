export default function Exchange(props) {
    let exchangeRate = [
        {currency: 'USD (доллар США)',
        rate: 91.82},
        {currency: 'EUR (евро)',
        rate: 98.95},
        {currency: 'CNY (китаййский юань)',
        rate: 12.62},
        {currency: 'TRY (турецкая лира)',
        rate: 2.85}
    ]
    return(
        <div className="contents">
            <h2>Обменный курс:</h2>
            <ul>
                {exchangeRate.map(
                    (exchangeRate, key) => <li key={key}>{exchangeRate.currency}  {(Math.round(props.rub*100 / exchangeRate.rate))/100}</li>
                )}
            </ul>
        </div>
    )
}