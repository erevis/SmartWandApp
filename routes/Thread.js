import {StyleSheet, View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native'
import * as React from 'react';
import { render } from 'react-dom';
import {Comment} from '../components/Comment.js'
import axios from 'axios';
import {SETTINGS} from '../settings/Settings.js'
import { COLORS } from "../components/Colors.js";


export function Thread({route,navigation}) {
    const {id, title, user_id} = route.params
    const {nav} = navigation
    const [commentText, setText] = React.useState('');
    
    class CommentThread extends React.Component {
        constructor(props) {
            super(props)
            this.id = id
        }
        state = {
            comments: [],
            poster: '',
        }

        componentDidMount() {
             axios.get(SETTINGS.url+'/comment/')
              .then((response)=>{
                const comments = response.data
                this.setState({comments})
              })
              axios.get(SETTINGS.url+'/account/'+user_id+'/')
              .then((response)=>{
                const poster = response.data.email
                this.setState({poster})
              })
        }



        render() {
            const { navigate } = {nav}  
            const { comments , poster} = this.state

            return (
                <View style={{flex:1}}>
                    <View style={styles.post_card}>
                        <Text style={styles.user_text}>User: {poster}</Text>
                        <Text style={styles.title_text}>{title}</Text>
                    </View>
                    {
                        comments.map((comment)=><Comment id={comment.id} post_id={comment.post_id} parent_id={comment.parent_id} text={comment.text} user_id={comment.user_id} navigation={{nav}}/>)
                    }
                    <TextInput
                        placeholder='Click here…'
                        defaultValue={commentText}
                        onChangeText={commentText=>setText(commentText)}
                    />
                    <View style={styles.comment_button}> 
                        <TouchableOpacity onPress={()=>{
                            axios.post(SETTINGS.url+"/comment/", {post_id:this.id,parent_id:0,text:commentText,user_id:5})
                        }}>
                            <Text>Comment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    } 
    return (<CommentThread/>)
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
    },
    comment_button: {
        backgroundColor: COLORS.color4,
        marginLeft:10,
        marginRight:10,
        padding:10,
        borderRadius:10
    }
});