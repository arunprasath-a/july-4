// //method 1

// import React from 'react';
// import axios from "axios";

// import "../../css/loader.css";

// const piJsonURL = "../json_files/pichart.json";
// const barJsonURL = "../json_files/barchart.json";
// const lineJsonURL = "../json_files/linechart.json";
// const radarJsonURL = "../json_files/radarchart.json";



// const MyHOC = (WrappedComponent) => {
//     class NewComponent extends React.Component {


//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: true
//             }

//         }


//         componentDidMount() {
//             this.loadAllData();

//         }


//         loadAllData() {
//             setTimeout(() => {
//                 return axios.all([
//                     axios.get(piJsonURL),
//                     axios.get(barJsonURL),
//                     axios.get(lineJsonURL),
//                     axios.get(radarJsonURL)
//                 ])
//                     .then(axios.spread((pichart, barchart, linechart, radarchart) => {
//                         this.setState({
//                             pichartData: pichart["data"].data,
//                             barchartData: barchart["data"].data,
//                             linechartData: linechart["data"].data,
//                             radarchartData: radarchart["data"].data,

//                         })
//                         this.setState({ isLoading: false })
//                     })
//                     )
//             }, 100)
//         }







//         render() {

//             const { pichartData, barchartData, linechartData, radarchartData, data, isLoading, qwe } = this.state;

//             return this.state.isLoading ?
//                 <div className="loader"></div>
//                 :
//                 <WrappedComponent
//                     data={data}
//                     pichartData={pichartData}
//                     barchartData={barchartData}
//                     linechartData={linechartData}
//                     radarchartData={radarchartData}
//                     isLoading={isLoading}
//                     Qwe={this.Qwe}
//                     {...this.props} />
//         }


//     }

//     return (NewComponent);
// }

// export default MyHOC;

// //************************************************************//
// //method 2 :everything from hoc


// import React from 'react';
// import "../../css/loader.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Table from 'react-bootstrap/Table';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadAllData } from "../../store/actions/actions";
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css'




// const MyHOC = (WrappedComponent) => {
//     class NewComponent extends React.Component {


//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: false,

//                 BarSwapCount: 0,
//                 PiSwapCount: 0,
//                 LineSwapCount: 0,
//                 RadarSwapCount: 0,


//             }

//         }
//         componentDidMount() {
//             this.props.loadAllData();
//         }

//         componentWillUpdate() {
//             this.PiChartComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="pi chart">
//                             <div className="Pichartdiv" id="piChart"></div>

//                             <div id="piTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th key="country">Country</th>
//                                             <th key="litres">Litres</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.pichartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.country}</td>
//                                                 <td key={"td2" + index}>{item.litres}</td>
//                                             </tr>

//                                         )
//                                     })}

//                                     </tbody>
//                                 </Table>
//                             </div>
//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapPi.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>
//                         </div>


//                     </React.Fragment>
//                 )
//             }

//             this.BarChartComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="bar chart">

//                             <div className="Barchartdiv" id="barChart"></div>

//                             <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th>Country</th>
//                                             <th>Visits</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.barchartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.country}</td>
//                                                 <td key={"td2" + index}>{item.visits}</td>
//                                             </tr>

//                                         )
//                                     })}

//                                     </tbody>
//                                 </Table>
//                             </div>

//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapBar.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>
//                         </div>

//                     </React.Fragment>
//                 )
//             }

//             this.LineChartComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="line chart">


//                             <div className="linechartdiv" id="lineChart"></div>
//                             {/* <br></br> */}

//                             {/* <h3>Line chart</h3> */}
//                             <div id="lineTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th>Year</th>
//                                             <th>Value</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.linechartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.year}</td>
//                                                 <td key={"td2" + index}>{item.value}</td>
//                                             </tr>

//                                         )
//                                     })}

//                                     </tbody>
//                                 </Table>
//                             </div>
//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapLine.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>

//                         </div>

//                     </React.Fragment>
//                 )
//             }

//             this.RadarChartComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="radar chart">

//                             <div className="Serieschartdiv" id="radarChart"></div>
//                             {/* <br></br> */}

//                             {/* <h3>Radar chart</h3> */}
//                             <div id="radatTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th>Country</th>
//                                             <th>value 1</th>
//                                             <th>value 2</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.radarchartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.country}</td>
//                                                 <td key={"td2" + index}>{item.value1}</td>
//                                                 <td key={"td3" + index}>{item.value2}</td>
//                                             </tr>

//                                         )
//                                     })}

//                                     </tbody>
//                                 </Table>
//                             </div>
//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapRadar.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>
//                         </div>

//                     </React.Fragment>
//                 )
//             }

//             this.TableComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="ag-theme-balham" style={{ height: "349px", width: 'auto' }}>
//                             <AgGridReact
//                                 columnDefs={this.props.headerData}
//                                 rowData={this.props.rowData}
//                                 pagination={true}
//                                 paginationPageSize={10}
//                                 colWidth={313}>
//                             </AgGridReact>
//                         </div>

//                     </React.Fragment>
//                 )
//             }
//         }





//         onSwapBar() {
//             this.setState({
//                 BarSwapCount: this.state.BarSwapCount + 1
//             })

//             if (this.state.BarSwapCount % 2 === 0) {
//                 document.getElementById("barTable").style.display = "block";
//                 document.getElementById("barChart").style.display = "none";
//             } else {
//                 document.getElementById("barTable").style.display = "none";
//                 document.getElementById("barChart").style.display = "block";
//             }
//         }

//         onSwapPi() {
//             this.setState({
//                 PiSwapCount: this.state.PiSwapCount + 1
//             })
//             if (this.state.PiSwapCount % 2 === 0) {
//                 document.getElementById("piTable").style.display = "block";
//                 document.getElementById("piChart").style.display = "none";
//             } else {
//                 document.getElementById("piTable").style.display = "none";
//                 document.getElementById("piChart").style.display = "block";
//             }
//         }

//         onSwapLine() {
//             this.setState({
//                 LineSwapCount: this.state.LineSwapCount + 1
//             })
//             if (this.state.LineSwapCount % 2 === 0) {
//                 document.getElementById("lineTable").style.display = "block";
//                 document.getElementById("lineChart").style.display = "none";
//             } else {
//                 document.getElementById("lineTable").style.display = "none";
//                 document.getElementById("lineChart").style.display = "block";
//             }
//         }

//         onSwapRadar() {
//             this.setState({
//                 RadarSwapCount: this.state.RadarSwapCount + 1
//             })
//             if (this.state.RadarSwapCount % 2 === 0) {
//                 document.getElementById("radatTable").style.display = "block";
//                 document.getElementById("radarChart").style.display = "none";
//             } else {
//                 document.getElementById("radatTable").style.display = "none";
//                 document.getElementById("radarChart").style.display = "block";
//             }
//         }


//         render() {

//             const { barchartData, pichartData, linechartData, radarchartData } = this.props;


            // return this.state.isLoading ?
            //     <div className="loader"></div>
            //     :
                
//                 return <WrappedComponent
//                     PiChartComponent={this.PiChartComponent}
//                     pichartData={pichartData}

//                     BarChartComponent={this.BarChartComponent}
//                     barchartData={barchartData}

//                     LineChartComponent={this.LineChartComponent}
//                     linechartData={linechartData}

//                     RadarChartComponent={this.RadarChartComponent}
//                     radarchartData={radarchartData}

//                     TableComponent={this.TableComponent}

//                     {...this.props} />
//         }


//     }


//     const mapStateToProps = (state) => {
//         return {
//             pichartData: state.mainReducer.pichartData,
//             barchartData: state.mainReducer.barchartData,
//             linechartData: state.mainReducer.linechartData,
//             radarchartData: state.mainReducer.radarchartData,
//             headerData: state.mainReducer.headerData,
//             rowData: state.mainReducer.rowData,
//             //isLoadingNew: state.mainReducer.isLoadingNew
//         }
//     }

//     const mapDispatchToProps = (dispatch) => {
//         return bindActionCreators({
//             loadAllData: loadAllData,
//         }, dispatch)
//     }



//     return connect(mapStateToProps, mapDispatchToProps)(NewComponent);
// }


// export default MyHOC;



//************************************************************//
//method 3 :everything from hoc and reducers


// import React from 'react';
// import "../../css/loader.css";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadAllData,loadbarChartData,loadPiChartData,loadlineChartData,loadradarChartData,loadAgGridData } from "../../store/actions/actions";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Table from 'react-bootstrap/Table';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css'







// const MyHOC = (WrappedComponent) => {
//     class NewComponent extends React.Component {


//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: true,

//                 BarSwapCount: 0,
//                 PiSwapCount: 0,
//                 LineSwapCount: 0,
//                 RadarSwapCount: 0,

//                 // pichartData: [],
//                 // barchartData: [],
//                 // linechartData: [],
//                 // radarchartData: [],

//                 TableHead: [],
//                 TableRow: []
//             }

//         }


//         componentDidMount() {

//             this.props.loadAllData();
//         }

//         componentDidUpdate(){


//             console.log(this.props.pichartData.data)
//             console.log(this.props.barchartData.data)
//             console.log(this.props.linechartData.data)
//             console.log(this.props.radarchartData.data)

//         }



//         onSwapBar() {
//             this.setState({
//                 BarSwapCount: this.state.BarSwapCount + 1
//             })

//             if (this.state.BarSwapCount % 2 === 0) {
//                 document.getElementById("barTable").style.display = "block";
//                 document.getElementById("barChart").style.display = "none";
//             } else {
//                 document.getElementById("barTable").style.display = "none";
//                 document.getElementById("barChart").style.display = "block";
//             }
//         }

//         onSwapPi() {
//             this.setState({
//                 PiSwapCount: this.state.PiSwapCount + 1
//             })
//             if (this.state.PiSwapCount % 2 === 0) {
//                 document.getElementById("piTable").style.display = "block";
//                 document.getElementById("piChart").style.display = "none";
//             } else {
//                 document.getElementById("piTable").style.display = "none";
//                 document.getElementById("piChart").style.display = "block";
//             }
//         }

        // onSwapLine() {
        //     this.setState({
        //         LineSwapCount: this.state.LineSwapCount + 1
        //     })
        //     if (this.state.LineSwapCount % 2 === 0) {
        //         document.getElementById("lineTable").style.display = "block";
        //         document.getElementById("lineChart").style.display = "none";
        //     } else {
        //         document.getElementById("lineTable").style.display = "none";
        //         document.getElementById("lineChart").style.display = "block";
        //     }
        // }

//         onSwapRadar() {
//             this.setState({
//                 RadarSwapCount: this.state.RadarSwapCount + 1
//             })
//             if (this.state.RadarSwapCount % 2 === 0) {
//                 document.getElementById("radatTable").style.display = "block";
//                 document.getElementById("radarChart").style.display = "none";
//             } else {
//                 document.getElementById("radatTable").style.display = "none";
//                 document.getElementById("radarChart").style.display = "block";
//             }
//         }


//         BarChartComponent = () => {
//             return (
//                 <React.Fragment>
//                     <div className="bar chart">

//                         <div className="Barchartdiv" id="barChart"></div>

//                         <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                             <Table striped bordered hover>
//                                 <thead style={{ backgroundColor: "black", color: "white" }}>
//                                     <tr>
//                                         <th>Country</th>
//                                         <th>Visits</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>{this.props.barchartData.map((item, index) => {
//                                     return (
//                                         <tr key={"tr" + index}>
//                                             <td key={"td1" + index}>{item.country}</td>
//                                             <td key={"td2" + index}>{item.visits}</td>
//                                         </tr>

//                                     )
//                                 })}

//                                 </tbody>
//                             </Table>
//                         </div>

//                         <hr></hr>
//                         <Container>
//                             <Row>
//                                 <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapBar.bind(this)}>Swap</button></Col>
//                             </Row>
//                         </Container>
//                     </div>

//                 </React.Fragment>
//             )
//         }


//         PiChartComponent = () => {


//             return (
//                 <React.Fragment>
//                     <div className="pi chart">
//                         <div className="Pichartdiv" id="piChart"></div>

//                         <div id="piTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                             <Table striped bordered hover>
//                                 <thead style={{ backgroundColor: "black", color: "white" }}>
//                                     <tr>
//                                         <th key="country">Country</th>
//                                         <th key="litres">Litres</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>{this.props.pichartData.map((item, index) => {
//                                     return (
//                                         <tr key={"tr" + index}>
//                                             <td key={"td1" + index}>{item.country}</td>
//                                             <td key={"td2" + index}>{item.litres}</td>
//                                         </tr>

//                                     )
//                                 })}

//                                 </tbody>
//                             </Table>
//                         </div>
//                         <hr></hr>
//                         <Container>
//                             <Row>
//                                 <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapPi.bind(this)}>Swap</button></Col>
//                             </Row>
//                         </Container>
//                     </div>


//                 </React.Fragment>
//             )
//         }


//         LineChartComponent = () => {
//             return (
//                 <React.Fragment>
//                     <div className="line chart">


//                         <div className="linechartdiv" id="lineChart"></div>
//                         {/* <br></br> */}

//                         {/* <h3>Line chart</h3> */}
//                         <div id="lineTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                             <Table striped bordered hover>
//                                 <thead style={{ backgroundColor: "black", color: "white" }}>
//                                     <tr>
//                                         <th>Year</th>
//                                         <th>Value</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>{this.props.linechartData.map((item, index) => {
//                                     return (
//                                         <tr key={"tr" + index}>
//                                             <td key={"td1" + index}>{item.year}</td>
//                                             <td key={"td2" + index}>{item.value}</td>
//                                         </tr>

//                                     )
//                                 })}

//                                 </tbody>
//                             </Table>
//                         </div>
//                         <hr></hr>
//                         <Container>
//                             <Row>
//                                 <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapLine.bind(this)}>Swap</button></Col>
//                             </Row>
//                         </Container>

//                     </div>

//                 </React.Fragment>
//             )
//         }

//         RadarChartComponent = () => {
//             return (
//                 <React.Fragment>
//                     <div className="radar chart">

//                         <div className="Serieschartdiv" id="radarChart"></div>
//                         {/* <br></br> */}

//                         {/* <h3>Radar chart</h3> */}
//                         <div id="radatTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

//                             <Table striped bordered hover>
//                                 <thead style={{ backgroundColor: "black", color: "white" }}>
//                                     <tr>
//                                         <th>Country</th>
//                                         <th>value 1</th>
//                                         <th>value 2</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>{this.props.radarchartData.map((item, index) => {
//                                     return (
//                                         <tr key={"tr" + index}>
//                                             <td key={"td1" + index}>{item.country}</td>
//                                             <td key={"td2" + index}>{item.value1}</td>
//                                             <td key={"td3" + index}>{item.value2}</td>
//                                         </tr>

//                                     )
//                                 })}

//                                 </tbody>
//                             </Table>
//                         </div>
//                         <hr></hr>
//                         <Container>
//                             <Row>
//                                 <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                 <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapRadar.bind(this)}>Swap</button></Col>
//                             </Row>
//                         </Container>
//                     </div>

//                 </React.Fragment>
//             )
//         }

//         TableComponent = () => {
//             return (
//                 <React.Fragment>
//                     <div className="ag-theme-balham" style={{ height: "349px", width: 'auto' }}>
//                         <AgGridReact
//                             columnDefs={this.state.TableHead}
//                             rowData={this.state.TableRow}
//                             pagination={true}
//                             paginationPageSize={10}
//                             colWidth={313}>
//                         </AgGridReact>
//                     </div>

//                 </React.Fragment>
//             )
//         }

//         render() {

//             const { barchartData, pichartData, linechartData, radarchartData } = this.props;


//             return this.props.isLoadingNew ?
//                 <div className="loader"></div>
//                 :
//                 <WrappedComponent
//                     PiChartComponent={this.PiChartComponent}
//                     pichartData={pichartData}

//                     BarChartComponent={this.BarChartComponent}
//                     barchartData={barchartData}

//                     LineChartComponent={this.LineChartComponent}
//                     linechartData={linechartData}

//                     RadarChartComponent={this.RadarChartComponent}
//                     radarchartData={radarchartData}

//                     TableComponent={this.TableComponent}

//                     {...this.props} />
//         }


//     }

    // const mapStateToProps = (state)=>{
    //     return{
    //             pichartData: state.mainReducer.pichartData,
    //             barchartData: state.mainReducer.barchartData,
    //             linechartData:state.mainReducer.linechartData ,
    //             radarchartData: state.mainReducer.radarchartData,
    //             headerData :state.mainReducer.headerData,
    //             rowData:state.mainReducer.rowData,
    //             isLoadingNew:state.mainReducer.isLoadingNew
    //     }
    // }

    // const mapDispatchToProps =(dispatch)=>{
    //     return bindActionCreators({
    //     //   loadPiChartData:loadPiChartData,
    //     //   loadbarChartData:loadbarChartData,
    //     //   loadlineChartData:loadlineChartData,
    //     //   loadradarChartData:loadradarChartData,
    //     //   loadAgGridData:loadAgGridData
    //     loadAllData:loadAllData,
    //     },dispatch)
    //   }

//     return connect(mapStateToProps,mapDispatchToProps)(NewComponent);
// }


// export default MyHOC;



//try
//implements one hoc model
// import React from 'react';
// import "../../css/loader.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Table from 'react-bootstrap/Table';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadAllData } from "../../store/actions/actions";
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css'




// const MyHOC = (WrappedComponent) => {
//     class NewComponent extends React.Component {


//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: false,

//                 BarSwapCount: 0,
//                 PiSwapCount: 0,
//                 LineSwapCount: 0,
//                 RadarSwapCount: 0,



//             }

//         }

//         onSwapBar = () => {
//             this.setState({
//               BarSwapCount: this.state.BarSwapCount + 1
//             })
//           }

//           onSwapLine = () => {
//             this.setState({
//               LineSwapCount: this.state.LineSwapCount + 1
//             })
//           }

//           onSwapPi = () => {
//             this.setState({
//               PiSwapCount: this.state.PiSwapCount + 1
//             })
//           }

//           onSwapRadar = () => {
//             this.setState({
//               RadarSwapCount: this.state.RadarSwapCount + 1
//             })
//           }

//         componentDidMount() {
//             this.props.loadAllData();
//         }

//         componentWillUpdate() {
//             this.BarChartComponent = () => {
        
//                 return (
//                     <React.Fragment>
//                         <div className="bar chart">
        
//                             <div className="Barchartdiv" id="barChart"></div>
        
//                             <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>
        
//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th>Country</th>
//                                             <th>Visits</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.barchartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.country}</td>
//                                                 <td key={"td2" + index}>{item.visits}</td>
//                                             </tr>
        
//                                         )
//                                     })}
        
//                                     </tbody>
//                                 </Table>
//                             </div>
        
//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapBar.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>
//                         </div>
        
//                     </React.Fragment>
//                 )
//             }

//             this.LineChartComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="line chart">
        
        
//                             <div className="linechartdiv" id="lineChart"></div>
//                             {/* <br></br> */}
        
//                             {/* <h3>Line chart</h3> */}
//                             <div id="lineTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>
        
//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th>Year</th>
//                                             <th>Value</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.linechartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.year}</td>
//                                                 <td key={"td2" + index}>{item.value}</td>
//                                             </tr>
        
//                                         )
//                                     })}
        
//                                     </tbody>
//                                 </Table>
//                             </div>
//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapLine.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>
        
//                         </div>
        
//                     </React.Fragment>
//                 )
//             }

//             this.PichartComponent = () => {

//                 return (
//                   <React.Fragment>
        
//                     <div className="pi chart">
//                       <div className="Pichartdiv" id="piChart" ></div>
        
//                       <div id="piTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>
        
//                         <Table striped bordered hover>
//                           <thead style={{ backgroundColor: "black", color: "white" }}>
//                             <tr>
//                               <th key="country">Country</th>
//                               <th key="litres">Litres</th>
//                             </tr>
//                           </thead>
//                           <tbody>{this.props.pichartData.data.map((item, index) => {
//                             return (
//                               <tr key={"tr" + index}>
//                                 <td key={"td1" + index}>{item.country}</td>
//                                 <td key={"td2" + index}>{item.litres}</td>
//                               </tr>
        
//                             )
//                           })}
        
//                           </tbody>
//                         </Table>
//                       </div>
//                       <hr></hr>
//                       <Container>
//                         <Row>
//                           <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                           <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                           <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapPi.bind(this)}>Swap</button></Col>
//                         </Row>
//                       </Container>
//                     </div>
//                   </React.Fragment>
//                 )
//               }

//               this.RadarchartComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="radar chart">
        
//                             <div className="Serieschartdiv" id="radarChart"></div>
//                             {/* <br></br> */}
        
//                             {/* <h3>Radar chart</h3> */}
//                             <div id="radatTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>
        
//                                 <Table striped bordered hover>
//                                     <thead style={{ backgroundColor: "black", color: "white" }}>
//                                         <tr>
//                                             <th>Country</th>
//                                             <th>value 1</th>
//                                             <th>value 2</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>{this.props.radarchartData.data.map((item, index) => {
//                                         return (
//                                             <tr key={"tr" + index}>
//                                                 <td key={"td1" + index}>{item.country}</td>
//                                                 <td key={"td2" + index}>{item.value1}</td>
//                                                 <td key={"td3" + index}>{item.value2}</td>
//                                             </tr>
        
//                                         )
//                                     })}
        
//                                     </tbody>
//                                 </Table>
//                             </div>
//                             <hr></hr>
//                             <Container>
//                                 <Row>
//                                     <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
//                                     <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapRadar.bind(this)}>Swap</button></Col>
//                                 </Row>
//                             </Container>
//                         </div>
        
//                     </React.Fragment>
//                 )
//             } 
            
//             this.TableComponent = () => {
//                 return (
//                     <React.Fragment>
//                         <div className="ag-theme-balham" style={{ height: "349px", width: 'auto' }}>
//                             <AgGridReact
//                                 columnDefs={this.props.headerData}
//                                 rowData={this.props.rowData}
//                                 pagination={true}
//                                 paginationPageSize={10}
//                                 colWidth={313}>
//                             </AgGridReact>
//                         </div>
        
//                     </React.Fragment>
//                 )
//             }
//         }

//         componentDidUpdate(){

//             if (this.state.BarSwapCount % 2 === 0) {
//                 document.getElementById("barChart").style.display = "block";
//                 document.getElementById("barTable").style.display = "none";
//               } else {
//                 document.getElementById("barChart").style.display = "none";
//                 document.getElementById("barTable").style.display = "block";
//               }

              
//             if (this.state.LineSwapCount % 2 === 0) {
//                 document.getElementById("lineChart").style.display = "block";
//                 document.getElementById("lineTable").style.display = "none";
//               } else {
//                 document.getElementById("lineChart").style.display = "none";
//                 document.getElementById("lineTable").style.display = "block";
//               }

//               if (this.state.PiSwapCount % 2 === 0) {
//                 document.getElementById("piChart").style.display = "block";
//                 document.getElementById("piTable").style.display = "none";
//               } else {
//                 document.getElementById("piChart").style.display = "none";
//                 document.getElementById("piTable").style.display = "block";
//               }

//               if (this.state.RadarSwapCount % 2 === 0) {
//                 document.getElementById("radarChart").style.display = "block";
//                 document.getElementById("radatTable").style.display = "none";
//               } else {
//                 document.getElementById("radarChart").style.display = "none";
//                 document.getElementById("radatTable").style.display = "block";
//               }
//         }







//         render() {

//             const { barchartData, pichartData, linechartData, radarchartData } = this.props;


            
//                 return <WrappedComponent
//                     PichartComponent={this.PichartComponent}
//                      pichartData={pichartData}

//                     BarChartComponent={this.BarChartComponent}
//                     barchartData={barchartData}

//                     LineChartComponent={this.LineChartComponent}
//                     linechartData={linechartData}

//                     RadarchartComponent={this.RadarchartComponent}
//                     radarchartData={radarchartData}

//                     TableComponent={this.TableComponent}

//                     {...this.props} />
//         }


//     }


//     const mapStateToProps = (state) => {
//         return {
//             //pichartData: state.mainReducer.pichartData,
//             barchartData: state.mainReducer.barchartData,
//             // linechartData: state.mainReducer.linechartData,
//             // radarchartData: state.mainReducer.radarchartData,
//             // headerData: state.mainReducer.headerData,
//             // rowData: state.mainReducer.rowData,
            
//         }
//     }

//     const mapDispatchToProps = (dispatch) => {
//         return bindActionCreators({
//             loadAllData: loadAllData,
//         }, dispatch)
//     }



//     return connect(mapStateToProps, mapDispatchToProps)(NewComponent);
// }


// export default MyHOC;