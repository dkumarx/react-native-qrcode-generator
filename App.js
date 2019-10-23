/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  CameraRoll,
} from 'react-native';
import RNFS from 'react-native-fs';
import {Container, Header, Body, Title, Button} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import QRCode from 'react-native-qrcode-svg';

const App: () => React$Node = () => {
  const qrcodeText = 'https://apps.apple.com/pa/app/franc/id1467096802?l=en';
  const getDataURL = () => {
    console.log('Loaded home page', qrcodeText);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Container>
            <Header>
              <Body>
                <Title>QR Code generator</Title>
              </Body>
            </Header>

            <View style={([styles.body], {padding: 40})}>
              <Text style={styles.sectionDescription}>
                Please enter context to generat QR code.
              </Text>
              <View style={([styles.sectionContainer], {padding: 70})}>
                <QRCode
                  value={qrcodeText}
                  size={200}
                  getRef={c => (this.svg = c)}
                />
              </View>
              <Button block info onPress={this.getDataURL}>
                <Text style={[styles.button]}>Share QR code</Text>
              </Button>
              {/* <LearnMoreLinks /> */}
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default App;
