import {StyleSheet, View, Text,TouchableOpacity} from 'react-native'
import * as React from 'react';
import { COLORS } from '../components/Colors';
import {Post} from '../components/Post.js';
import {SETTINGS} from '../settings/Settings.js'
import axios from 'axios';

export class Forum extends React.Component {
  constructor(props) {
    super(props);   
  } 
  state = {
    posts: []
  }
  
  
  componentDidMount() {
    axios.get(SETTINGS.url+'/post/')
      .then((response)=>{
        const posts = response.data
        this.setState({posts})
      })
  }
  

  render () {
    const { navigate } = this.props.navigation;  
    const { posts } = this.state
    console.log(posts)
    return(
      <View style={{flex:1}}>
          {
            posts.map((post)=><Post id={post.id} title={post.title} user_id={post.user_id} navigation={{navigate}}/>)
          }
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
      fontSize: 20
    },
    user_text: {
      fontSize: 10
    }
  });

