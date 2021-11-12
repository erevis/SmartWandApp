import {StyleSheet, View, Text,TouchableOpacity} from 'react-native'
import * as React from 'react';
import { COLORS } from '../components/Colors';

export class Post extends React.Component {
  constructor(props) {
    super(props);        
    this.state = {
      id: props.id,
      title: props.title,
      user_id: props.user_id,
      navigation: props.navigation
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.post_card}>
        <TouchableOpacity onPress={()=>navigate('Thread', {id:this.props.id, title:this.props.title, user_id:this.props.user_id})}>
          <Text style={styles.user_text}> user_id: {this.state.user_id}</Text>
          <Text style={styles.title_text}>{this.state.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    post_card: {
      backgroundColor: COLORS.color4,
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      padding:10,
      borderRadius:10
    },
    title_text: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: 24
    },
    user_text: {
      fontSize: 10
    }
});