"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=_interopDefault(require("react")),Table=function(e){return React.createElement("table",null,React.createElement("thead",null,React.createElement("tr",null,e.columns.map(function(e,t){return React.createElement("th",{key:t},e)}))),React.createElement("tbody",null,e.rows.map(function(e){return React.createElement("tr",null,Object.keys(e).map(function(t){return React.createElement("td",null,e[t])}))})))};module.exports=Table;