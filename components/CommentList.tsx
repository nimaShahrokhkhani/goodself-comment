import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';
import Comment from './Comment';
import CommentModel from '../model/CommentModel';
import _ from 'underscore';

type MyProps = {
    visibleAddNewComment: boolean;
};

type MyState = {
    commentList: CommentModel[];
    commentText: string;
};
export default class CommentList extends React.Component<MyProps, MyState> {

    state: MyState = {
        commentList: [],
        commentText: '',
    };

    onChangeCommentText = (text: string) => {
        this.setState({
            commentText: text,
        });
    };

    enterComment = () => {
        let comment = new CommentModel(_.uniqueId('comment-'), 'admin', this.state.commentText, new Date(), []);
        this.setState({
            commentList: [comment, ...this.state.commentList],
            commentText: '',
        });
    };

    renderComment = ({item}: { item: CommentModel }) => {
        return (
            <Comment comment={item}/>
        );
    };

    render() {
        let {visibleAddNewComment} = this.props;
        let {commentList, commentText} = this.state;
        return (
            <View style={styles.container}>
                {visibleAddNewComment &&
                    <View style={styles.bottomContainer}>
                        <TextInput style={styles.commentTextInput} onChangeText={this.onChangeCommentText}
                                   value={commentText}/>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.enterComment}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                }
                <FlatList style={styles.listContainer} data={commentList}
                          contentContainerStyle={styles.listContentContainer} renderItem={this.renderComment}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    listContainer: {
        backgroundColor: '#f0f0f0',
    },
    bottomContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#a0a0a0',
        borderRadius: 10,
        margin: 5,
    },
    commentTextInput: {
        flex: 1,
        marginHorizontal: 5,
    },
    listContentContainer: {
        flexDirection: 'column',
    },
    commentContainer: {
        borderRadius: 10,
        borderColor: '#909090',
        borderWidth: 0.5,
        backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
        height: 40,
        backgroundColor: 'rgba(0,187,255,0.55)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
});
