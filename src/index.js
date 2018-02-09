import React from 'react'
import PropTypes from 'prop-types'

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

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
}

export default Table
