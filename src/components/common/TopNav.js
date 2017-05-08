// import React from 'react';
// import { View, Text } from 'react-native';
//
// const Header = (props) => {
//   const { viewStyle, textStyle } = styles;
//   return (
//     <View style={viewStyle}>
//       <Text style={textStyle}>
//         {props.headerText}
//       </Text>
//     </View>
//   );
// };
//
// const styles = {
//   viewStyle: {
//     backgroundColor: '#454F8C',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     elevation: 2,  // Android only
//     position: 'relative'
//   },
//   textStyle: {
//     fontSize: 22,
//     color: 'white'
//   }
// };
//
// export { Header };

import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Button, Icon, Right } from 'native-base';
const TopNav = () => {
  return (
    <Container style={{flex: 0, height: 64}}>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>WODUP!</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    </Container>
  );
}

export { TopNav };
