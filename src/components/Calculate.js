import { useState } from 'react'



export default function Calculate() {
    const [income, setIncome] = useState(null)
    const [days, setDays] = useState(null)
    const [output, setOutput] = useState(null)

    const handleIncomeInput = (event) => {
        setIncome(event.target.value)
    }

    const handleDaysInput = (event) => {
        setDays(event.target.value)
    }

    const handleSubmit = (period) => {
        if (period === "week") {
            setOutput(income * days)
        } else if (period === "month") {
            setOutput(income * days * 4)
        } else if (period === "year") {
            setOutput(income * days * 52)
        }
    }

    return (
        <div>
            <input onChange={(event) => handleIncomeInput(event)} type="number" placeholder="Daily income" />
            <input onChange={(event) => handleDaysInput(event)} type="number" placeholder="Days worked per week" />
            <button onClick={() => handleSubmit("week")} type="button">Calculate weekly income</button>
            <button onClick={() => handleSubmit("month")} type="button">Calculate monthly income</button>
            <button onClick={() => handleSubmit("year")} type="button">Calculate yearly income</button>
            <p>{output === 0 ? "Please fill the inputs" : output}</p>
        </div>
    )
}