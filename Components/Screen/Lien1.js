import React from 'react';
import { ImageBackground, AppRegistry, View,Button} from 'react-native';





export default class Lien1 extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/cube.jpg")}>
      <View style={{
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'flex-end',
       alignItems: 'stretch',
      }}>


      <Button
               style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
               onPress={ () => this.props.navigation.navigate('Lien2')}
               title="Next"
               color="black"
             />
      </View>
     </ImageBackground>    );
 }
}
  <View style={{height: 50, backgroundColor: 'white'}} />
// <Image
       //   style={{width: 50, height: 50}}
       //   source={require('../../assets/Images/home.png)}
       //   onPress={ () => this.props.navigation.navigate('home')}
       // />
       //
// <Button
//          style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
//          onPress={ () => this.props.navigation.navigate('Lien2')}
//          title="Next"
//          color="black"
//        />
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{height: 100, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
