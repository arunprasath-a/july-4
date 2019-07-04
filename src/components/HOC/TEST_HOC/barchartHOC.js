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


const BarHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {


    constructor(props) {
      console.log("bar hoc constructor");
      console.log("****************")
      super(props);
      this.state = {
        BarSwapCount: 0,
      }
    }

    onSwapBar = () => {
      this.setState({
        BarSwapCount: this.state.BarSwapCount + 1
      })
    }

    componentDidMount() {
      console.log("bar hoc did mount");
      console.log("****************")
      this.props.loadAllDataFromAction();
     
    }

    componentDidUpdate() {

      console.log("bar hoc did update");
      console.log("****************")
      
      if (this.state.BarSwapCount % 2 === 0) {
        document.getElementById("barChart").style.display = "block";
        document.getElementById("barTable").style.display = "none";
      } else {
        document.getElementById("barChart").style.display = "none";
        document.getElementById("barTable").style.display = "block";
      }
    }


    componentWillUpdate() {

      console.log("bar hoc will update");
      console.log("****************")
      
      this.BarChartComponent = () => {

        return (
          <React.Fragment>
            <div className="bar chart">

              <div className="Barchartdiv" id="barChart"></div>

              <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

                <Table striped bordered hover>
                  <thead style={{ backgroundColor: "black", color: "white" }}>
                    <tr>
                      <th>Country</th>
                      <th>Visits</th>
                    </tr>
                  </thead>
                  <tbody>{this.props.barchartData.data.map((item, index) => {
                    return (
                      <tr key={"tr" + index}>
                        <td key={"td1" + index}>{item.country}</td>
                        <td key={"td2" + index}>{item.visits}</td>
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
                  <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapBar.bind(this)}>Swap</button></Col>
                </Row>
              </Container>
            </div>

          </React.Fragment>
        )
      }
    }


    render() {

      // console.log("bar hoc render");
      // console.log("****************")

      return <WrappedComponent
        BarChartComponent={this.BarChartComponent}
        barchartData={this.props.barchartData}

        {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      barchartData: state.mainReducer.barchartData,

    }
  }


  const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadAllDataFromAction: loadAllData,
    }, dispatch)
  }

  return connect(mapStateToProps, MapDispatchToProps)(NewComponent);
}

export default BarHOC;