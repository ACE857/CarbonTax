import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import {Container} from 'semantic-ui-react';
import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Button,Icon,Input} from 'semantic-ui-react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';


const data = [{quarter: 1, ppm: 640},
  {quarter: 2, ppm: 350},
  {quarter: 3, ppm: 850},
  {quarter: 4, ppm: 1900}
];


export default class App extends React.Component {

  makeChart(usrData) {
    for(var x=0;x<usrData.length;x++){
      data.push({quarter: x, ppm: parseInt(usrData[x])});
    }
    console.log(data.length);
  }

  constructor(props)
    {
        super(props);
        this.state = { loaded : 0 };
    }

    async componentDidMount() {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
    const usrData = await factory.methods.getUserData(accounts[0]).call();
    console.log(parseInt(usrData[0]));
    this.setState({
      udata : usrData,
      loaded: 1
    });
    this.makeChart(usrData);
  }


  render() {
    if(this.state.loaded==0){
      return (
          <Layout>
            <h1> Loading ... </h1>
          </Layout>

      );
    }
    else {
      return (
        <Layout>
        <Container style={{width:"40%", height:"30%"}}>
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["PPM 1", "PPM 2", "PPM 3", "PPM 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={data}
            x="quarter"
            y="ppm"
          />
        </VictoryChart>
        <center> <p> User data vs time graph showing comparasion. </p> </center>
        </Container>
        </Layout>
      );
    }

  }
}
