import {StyleSheet, View, Text,TouchableOpacity} from 'react-native'
import * as React from 'react';
import { COLORS } from '../components/Colors';
import axios from 'axios';
import {SETTINGS} from '../settings/Settings.js'

export class Comment extends React.Component {
  constructor(props) {
    super(props);        
    this.state = {
      id: props.id,
      post_id: props.post_id,
      parent_id: props.parent_id,
      user_id: props.user_id,
      text: props.text,
      navigation: props.navigation,
      poster: ''
    };
  }

  componentDidMount() {
      axios.get(SETTINGS.url+'/account/'+this.state.user_id+'/')
      .then((response)=>{
        const poster = response.data.email
        this.setState({poster})
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    const {poster} = this.state
    return(
      <View style={styles.comment}>
          <Text style={styles.user_text}>User: {poster}</Text>
          <Text style={styles.comment_text}>{this.state.text}</Text>
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
    comment: {
        backgroundColor: COLORS.color5,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        padding:10,
        borderRadius:10
    },
    user_text: {
        fontSize: 10
    },
    comment_text: {
        fontSize: 20
    }
});