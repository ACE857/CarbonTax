import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Icon,Input, Image} from 'semantic-ui-react';
import {Form, Button, Container, Message} from 'semantic-ui-react'
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import {Router} from '../routes'

class CarbonTaxIndex extends Component {
  constructor(props)
    {
        super(props);
        this.state = {
          loaded : 0,
          name: ""
        };
    }
    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
    const usrPresent = await factory.methods.getUserPresence(accounts[0]).call();
    console.log(usrPresent);
    this.setState({
      up : usrPresent,
      loaded: 1
    });
  }

  render() {
    var data = "Snow Is Melting And Earth is Crying";

    // loading default page
      if(this.state.loaded==0){
        return (
        <div>
        Loading ...
      </div>);
      }

      // data fetched from ethereum
      else {

          return(
            <Layout>
                  <h2> MY Rewards </h2>
                  <center>
                  <Card>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                  Matthew is supporting fight against global warming
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
    </Card.Content>
  </Card>
  </center>
          </Layout>
          );



      }

  }

}
export default CarbonTaxIndex;
