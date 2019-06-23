import React , {Component} from 'react';
import {Form, Button, Container, Input, Message} from 'semantic-ui-react'
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class NewIndustry extends Component {

  constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            address: "",
            errMsg: ""
        };
    }

    onSubmit = async (event)=> {
        event.preventDefault();
        try{
          const accounts = await web3.eth.getAccounts();
          await factory.methods
                .addIndustry(this.state.name, this.state.address)
                .send({
                    from: accounts[0]
                });
        }catch(err){
          this.state({errMsg: err.message});
        }
    };

  render () {
    return (
        <Layout>
        <Container>
        <h2> Industry </h2>
        <Form onSubmit={this.onSubmit} error={this.state.errMsg}>
          <Form.Field>
            <label> Name </label>
            <Input label="N"
            labelPosition="left"
            value = {this.state.name}
            onChange = {  event =>
                this.setState({name: event.target.value})
            }
            />
          </Form.Field>

          <Form.Field>
            <label> Address </label>
            <Input label="A"
            labelPosition="left"
            onChange = {  event =>
                this.setState({address: event.target.value})
            }
            value = {this.state.address}
            />
          </Form.Field>
          <Message error header="OOPs" content={this.state.errMsg} />
          <Button primary> OK </Button>
        </Form>
        </Container>
        </Layout>

    );
  }
}
export default NewIndustry;
