/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * To generate QR code : https://apps.apple.com/pa/app/franc/id1467096802?l=en
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Header,
  View,
  Title,
  Body,
  Right,
  Left,
  Text,
  Button,
  Input,
  Item,
  Label,
} from 'native-base';
// import all basic components
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';
//import QRCode

class App extends Component {
  svg;
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      valueForQRCode: 'https://apps.apple.com/pa/app/franc/id1467096802?l=en',
    };
  }

  getTextInputValue = () => {
    this.setState({
      valueForQRCode: this.state.inputValue,
    });
  };
  shareQRCode = () => {
    this.svg.toDataURL(data => {
      const shareImageBase64 = {
        title: 'Share QR Code',
        message: 'Share/save Franc App QR code',
        url: `data:image/png;base64,${data}`,
      };
      Share.open(shareImageBase64);
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>QR Code</Title>
          </Body>
          <Right />
        </Header>
        {this.state.valueForQRCode && (
          <View style={styles.MainContainer}>
            <View styles={styles.linkText}>
              <Text style={{fontWeight: '600'}}>Generated QR code for</Text>
              <Text>
                {this.state.valueForQRCode ? this.state.valueForQRCode : ''}
              </Text>
            </View>

            <QRCode
              value={this.state.valueForQRCode}
              size={250}
              getRef={ref => (this.svg = ref)}
            />

            <Content>
              <Item floatingLabel style={{width: 320, marginTop: 20}}>
                <Label>Please enter text to Generate QR Code</Label>
                <Input
                  style={styles.TextInputStyle}
                  onChangeText={text => this.setState({inputValue: text})}
                  underlineColorAndroid="transparent"
                />
              </Item>
            </Content>
            <Content>
              <Button
                block
                onPress={this.getTextInputValue}
                activeOpacity={0.7}
                style={styles.button}
                disabled={this.state.inputValue === ''}>
                <Text> Generate QR Code </Text>
              </Button>
              <Button block style={styles.button} onPress={this.shareQRCode}>
                <Text style={styles.buttonText}>Share</Text>
              </Button>
            </Content>
          </View>
        )}
      </Container>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 12,
    alignItems: 'center',
    paddingTop: 10,
  },

  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    textAlign: 'left',
    flex: 1,
  },

  button: {
    width: '100%',
    paddingTop: 10,
    marginTop: 10,
    paddingBottom: 8,
    marginBottom: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  linkText: {
    padding: 20,
    height: 40,
    fontSize: 12,
    flex: 1,
    display: 'flex',
  },
});
