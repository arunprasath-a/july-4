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


const PiHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        PiSwapCount: 0,
      }
    }

    onSwapPi = () => {
      this.setState({
        PiSwapCount: this.state.PiSwapCount + 1
      })
    }

    componentDidMount() {
      this.props.loadAllDataFromAction();
    }

    componentDidUpdate() {
      if (this.state.PiSwapCount % 2 === 0) {
        document.getElementById("piChart").style.display = "block";
        document.getElementById("piTable").style.display = "none";
      } else {
        document.getElementById("piChart").style.display = "none";
        document.getElementById("piTable").style.display = "block";
      }
    }


    componentWillUpdate() {
      this.PichartComponent = () => {

        return (
          <React.Fragment>

            <div className="pi chart">
              <div className="Pichartdiv" id="piChart" ></div>

              <div id="piTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

                <Table striped bordered hover>
                  <thead style={{ backgroundColor: "black", color: "white" }}>
                    <tr>
                      <th key="country">Country</th>
                      <th key="litres">Litres</th>
                    </tr>
                  </thead>
                  <tbody>{this.props.pichartData.data.map((item, index) => {
                    return (
                      <tr key={"tr" + index}>
                        <td key={"td1" + index}>{item.country}</td>
                        <td key={"td2" + index}>{item.litres}</td>
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
                  <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapPi.bind(this)}>Swap</button></Col>
                </Row>
              </Container>
            </div>
          </React.Fragment>
        )
      }
    }


    render() {
      return <WrappedComponent
        PichartComponent={this.PichartComponent}
        pichartData={this.props.pichartData}

        {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      pichartData: state.mainReducer.pichartData,
    }
  }


  const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loadAllDataFromAction: loadAllData,
    }, dispatch)
  }

  return connect(mapStateToProps, MapDispatchToProps)(NewComponent);
}

export default PiHOC;