import React from 'react';
//import axios from "axios";
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
//import "../../css/loader.css";
import { loadAllData } from "../../../store/actions/actions";
import { bindActionCreators } from 'redux';


const LineHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        LineSwapCount: 0,
      }
    }

    onSwapLine = () => {
      this.setState({
        LineSwapCount: this.state.LineSwapCount + 1
      })
    }

    componentDidMount() {
      this.props.loadAllDataFromAction();
    }

    componentDidUpdate() {
      if (this.state.LineSwapCount % 2 === 0) {
        document.getElementById("lineChart").style.display = "block";
        document.getElementById("lineTable").style.display = "none";
      } else {
        document.getElementById("lineChart").style.display = "none";
        document.getElementById("lineTable").style.display = "block";
      }
    }


    componentWillUpdate() {
      this.LineChartComponent = () => {
        return (
          <React.Fragment>
            <div className="line chart">


              <div className="linechartdiv" id="lineChart"></div>
              {/* <br></br> */}

              {/* <h3>Line chart</h3> */}
              <div id="lineTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

                <Table striped bordered hover>
                  <thead style={{ backgroundColor: "black", color: "white" }}>
                    <tr>
                      <th>Year</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>{this.props.linechartData.data.map((item, index) => {
                    return (
                      <tr key={"tr" + index}>
                        <td key={"td1" + index}>{item.year}</td>
                        <td key={"td2" + index}>{item.value}</td>
                      </tr>

                    )
                  })}

                  </tbody>
                </Table>
              </div>
              <hr></hr>
              <Container>
                <Row>
                  <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
                  <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
                  <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapLine.bind(this)}>Swap</button></Col>
                </Row>
              </Container>

            </div>

          </React.Fragment>
        )
      }
    }


    render() {
      return <WrappedComponent
        LineChartComponent={this.LineChartComponent}
        linechartData={this.props.linechartData}

        {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      linechartData: state.mainReducer.linechartData,
    }
  }


  const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadAllDataFromAction: loadAllData,
    }, dispatch)
  }

  return connect(mapStateToProps, MapDispatchToProps)(NewComponent);
}

export default LineHOC;