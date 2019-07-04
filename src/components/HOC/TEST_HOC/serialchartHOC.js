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


const SerialHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        RadarSwapCount: 0,
      }
    }

    onSwapRadar = () => {
      this.setState({
        RadarSwapCount: this.state.RadarSwapCount + 1
      })
    }

    componentDidMount() {
      this.props.loadAllDataFromAction();
    }

    componentDidUpdate() {
      if (this.state.RadarSwapCount % 2 === 0) {
        document.getElementById("radarChart").style.display = "block";
        document.getElementById("radatTable").style.display = "none";
      } else {
        document.getElementById("radarChart").style.display = "none";
        document.getElementById("radatTable").style.display = "block";
      }
    }


    componentWillUpdate() {
      this.RadarchartComponent = () => {
        return (
          <React.Fragment>
            <div className="radar chart">

              <div className="Serieschartdiv" id="radarChart"></div>
              {/* <br></br> */}

              {/* <h3>Radar chart</h3> */}
              <div id="radatTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

                <Table striped bordered hover>
                  <thead style={{ backgroundColor: "black", color: "white" }}>
                    <tr>
                      <th>Country</th>
                      <th>value 1</th>
                      <th>value 2</th>
                    </tr>
                  </thead>
                  <tbody>{this.props.radarchartData.data.map((item, index) => {
                    return (
                      <tr key={"tr" + index}>
                        <td key={"td1" + index}>{item.country}</td>
                        <td key={"td2" + index}>{item.value1}</td>
                        <td key={"td3" + index}>{item.value2}</td>
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
                  <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapRadar.bind(this)}>Swap</button></Col>
                </Row>
              </Container>
            </div>

          </React.Fragment>
        )
      }
    }


    render() {
      return <WrappedComponent
        RadarchartComponent={this.RadarchartComponent}
        radarchartData={this.props.radarchartData}

        {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      radarchartData: state.mainReducer.radarchartData,
    }
  }


  const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadAllDataFromAction: loadAllData,
    }, dispatch)
  }

  return connect(mapStateToProps, MapDispatchToProps)(NewComponent);
}

export default SerialHOC;