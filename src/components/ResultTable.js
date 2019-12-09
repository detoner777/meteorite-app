import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Fall",
    dataIndex: "fall",
    key: "fall"
  },
  {
    title: "Mass",
    dataIndex: "mass",
    key: "mass"
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year"
  }
];

export class ResultTable extends Component {
  //a text-box on the home page which renders formatted JSON whenever
  //a git request is sent from the home page form
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="result-output">
        {this.props.searchResult != "error" && (
          <Table
            className="result-table"
            dataSource={this.props.searchResult}
            columns={columns}
            pagination={this.props.pagination}
          />
        )}
        {this.props.searchResult == "error"}
      </div>
    );
  }
}
