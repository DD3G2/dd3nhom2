import React from 'react';
import {
    View,
    StyleSheet,
    
    Button
} from 'react-native';


export default class DemoButton extends React.Component {



    onPress() {
        alert('Xin Chao')
    }
    render() {
        return (
            <View style={styles.btn}>
                <Button

                    onPress={this.onPress}
                    title='AAA'
                    color="red"

                >
                </Button>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        margin: 50,
    }
});