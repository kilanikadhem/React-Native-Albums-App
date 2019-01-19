//import library
import React from 'react';
import { Text, View } from 'react-native';
//make componenet 

const Header = () => {
     const { textStyle, viewStyle } = styles; 

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
    </View>   
     );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FF0000',
        //flexbox center albums text
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        //shadow
        shadowColor: '#000000',
        shadowOffset: { widgth: 0, height: 2 },
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
            fontSize: 20
    }
};


//Make the componenent available to other parts of the app
export default Header;
