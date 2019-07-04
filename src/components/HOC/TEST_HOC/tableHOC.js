import React from 'react';

import { connect } from "react-redux";

import "../../../css/loader.css";
import { loadAllData } from "../../../store/actions/actions";
import { bindActionCreators } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css'


const TableHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        //isLoading:true
      }
    }

    componentDidMount() {
      this.props.loadAllDataFromAction();
    }

    componentWillUpdate() {

      this.TableComponent = () => {
        return (
          <React.Fragment>
            <div className="ag-theme-balham" style={{ height: "349px", width: 'auto' }}>
              <AgGridReact
                columnDefs={this.props.headerData}
                rowData={this.props.rowData}
                pagination={true}
                paginationPageSize={10}
                colWidth={313}>
              </AgGridReact>
            </div>

          </React.Fragment>
        )
      }

    }


    render() {


      //return this.props.isLoading ?
      // <div className="loader"></div>
      //:
      return <WrappedComponent
        TableComponent={this.TableComponent}

        {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      headerData: state.mainReducer.headerData,
      rowData: state.mainReducer.rowData,
      isLoading: state.mainReducer.rowData
    }
  }


  const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadAllDataFromAction: loadAllData,
    }, dispatch)
  }

  return connect(mapStateToProps, MapDispatchToProps)(NewComponent);
}

export default TableHOC;