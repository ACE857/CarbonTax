import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Image} from 'semantic-ui-react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';

class WelcomePage extends Component {
  render() {
    var data = "Snow Is Melting And Earth is Crying";
      const ImageExampleFluid = () => <Image src='https://cdn.tutsplus.com/vector/uploads/legacy/articles/news_2009_10_12/1920x1200.jpg?_ga=2.122019778.815342771.1561236303-1271893830.1561236303' fluid />
        return (
          <Layout>

                <ImageExampleFluid> </ImageExampleFluid>

          </Layout>
        );
      }

}
export default WelcomePage;
