import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import CommentList from './components/CommentList';

type MyProps = {};

type MyState = {};
export default class App extends React.Component<MyProps, MyState> {

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Comments</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <CommentList visibleAddNewComment={true}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        marginVertical: 25,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
    },
    container: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    listContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f0f0f0',
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
});
