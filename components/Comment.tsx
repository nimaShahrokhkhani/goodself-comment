import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, TouchableOpacity,
} from 'react-native';
import CommentList from './CommentList';
import CommentModel from '../model/CommentModel';

type MyProps = {
    comment: CommentModel;
};

type MyState = {
    visible: boolean
};
export default class Comment extends React.Component<MyProps, MyState> {

    state: MyState = {
        visible: false,
    };

    onReplyPress = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        let {comment} = this.props;
        let {visible} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.comment}>
                    <Image source={require('../images/user-image.png')} style={styles.userImage}/>
                    <View style={styles.commentInfoContainer}>
                        <View style={styles.commentContainer}>
                            <Text style={styles.username}>
                                {comment.username}
                            </Text>
                            <Text style={styles.text}>
                                {comment.text}
                            </Text>
                        </View>
                        <View style={styles.commentBottomContainer}>
                            <Text style={{flex: 1}}>{comment.date.getHours() + ':' + comment.date.getMinutes()}</Text>
                            {!visible &&
                                <TouchableOpacity onPress={this.onReplyPress}
                                                  style={{flex: 1, alignItems: 'flex-end', marginEnd: 10}}><Text
                                    style={{fontWeight: 'bold'}}>reply</Text></TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.commentListContainer}>
                    <CommentList visibleAddNewComment={visible}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    listContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f0f0f0',
        marginStart: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
    },
    commentTextInput: {
        flex: 1,
        marginHorizontal: 5,
    },
    listContentContainer: {
        flexDirection: 'column-reverse',
    },
    commentBottomContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    commentInfoContainer: {
        flex: 1,
    },
    commentContainer: {
        minHeight: 100,
        borderRadius: 10,
        backgroundColor: '#cbcbcb',
        padding: 10,
    },
    commentListContainer: {
        marginStart: 25,
    },
    text: {
        color: 'rgba(0,0,0,0.76)',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    userImage: {
        width: 30,
        height: 30,
    },
});
