import React, { PureComponent } from 'react';
import Layout from '../components/Layout';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Chart from './indChart'
import { Button, Card, Image } from 'semantic-ui-react'
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';


  constructor(props)
    {
        super(props);
        this.state = { loaded : 0, fineAmt:0 };
    }

    async componentDidMount() {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
    const usrData = await factory.methods.getFineAMount().call();
    console.log(parseInt(usrData[0]));
    this.setState({
      fineAmt : parseInt(usrData),
      loaded: 1
    });
  }
  async fined() {
    const accounts = await web3.eth.getAccounts();
  await factory.methods.payFine().call();

  }



  render(){
    if(this.state.loaded==0){
      return (
        <Layout>
        <center>
        <Chart> </Chart>
        </center>
        </Layout>
      );
    }
    else {
      return (
        <Layout>
        <center>
        <Card.Group>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                <Card.Header>Fine Amount</Card.Header>
                <Card.Meta>{this.state.fineAmt} ether</Card.Meta>
                <Card.Description>
                  Due to bad environmental practices you have been fined.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='red' onClick={this.fined()}>
                    Pay {this.state.fineAmt} ether
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        <Chart> </Chart>

        </center>

        </Layout>
      );
    }

  }
}

const data = [
  {
    name: 'PPM (max-min)', min: 4000, max: 2400, amt: 2400,
  },
  {
    name: 'PPM (max-min)', min: 3000, max: 1398, amt: 2210,
  },
  {
    name: 'PPM (max-min)', min: 2000, max: 9800, amt: 2290,
  },
  {
    name: 'PPM (max-min)', min: 2780, max: 3908, amt: 2000,
  },
  {
    name: 'PPM (max-min)', min: 1890, max: 4800, amt: 2181,
  },
  {
    name: 'PPM (max-min)', min: 2390, max: 3800, amt: 2500,
  },
  {
    name: 'PPM (max-min)', min: 3490, max: 4300, amt: 2100,
  },
];
