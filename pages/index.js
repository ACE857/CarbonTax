import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Icon,Input} from 'semantic-ui-react';
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

  onSubmit = async (event)=> {
      event.preventDefault();
      try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods
              .addUser(this.state.name)
              .send({
                  from: accounts[0]
              });
      }catch(err){
        this.state({errMsg: err.message});
      }
  };

nextRoute() {
    Router.pushRoute('/welcome');
}

  render() {
    var data = "Snow Is Melting And Earth is Crying";

    // loading default page
      if(this.state.loaded==0){
        return (
        <div>
        <center style={{color:"rgb(122,122,200); margin-top:30px"}} >
        <h1  >Carbon Tax</h1>
        </center>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <center style={{color:"rgb(122,122,200); margin-top:80px"}}>
        <Card
      header='Loading ... '
      meta='User Validating'
      description='CarbonTax is an blockchain based application to fight global warming.'
      extra={data}
    />
    </center>
      </div>);
      }

      // data fetched from ethereum
      else {
        if(this.state.up) {
          return(
              <h3> Redirecting {this.nextRoute()}</h3>

          );


        }
        else {
          return(
            <Layout>
            <div>
            <center style={{color:"rgb(122,122,200); margin-top:80px"}} >
            <br /> <br /> <br />
            <h1  >Carbon Tax</h1>
            </center>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <center style={{color:"rgb(122,122,200); margin-top:90px"}}>
            <br />
            <Card
          header=' User Not Found '
          meta='User Validation Failed'
          description='CarbonTax is an blockchain based application to fight global warming.'
          extra={data}
        />
        <br />
        <div floated="right" >

        <Form onSubmit={this.onSubmit}>
          <Form.Field>


        <Input
            action={{ color: 'teal', labelPosition: 'left', icon: 'arrow alternate circle right outline', content: 'UserName' }}
            actionPosition='left'
            placeholder='Name'
            value = {this.state.name}
            onChange = {  event =>
                this.setState({name: event.target.value})
            }
          />
          </Form.Field>
          <br />
          <br />
        <Button
        style = {{marginTop: '10px'}}
        content = 'Register User'
        icon="add circle"
        primary
      />

      </Form>
        </div>

        </center>
          </div>
          </Layout>
          );
        }


      }

  }
}

export default CarbonTaxIndex;

// checkpoint
