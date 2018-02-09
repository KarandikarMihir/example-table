import React from 'react'

const Table = (props) => (
    <table>
        <thead>
            <tr>{ props.columns.map((x, i) => <th key={i}>{x}</th>) }</tr>
        </thead>
        <tbody>
            { props.rows.map((obj) => <tr>{ Object.keys(obj).map((key) => <td>{obj[key]}</td>) }</tr>) }
        </tbody>
    </table>
)

export default Table
