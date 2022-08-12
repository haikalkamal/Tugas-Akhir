import React from 'react';
import{
    StyleSheet, Text, View, 
    TouchableOpacity, Dimensions
} from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;
 
const SimpleModal = (props) => {

    closeModal = (bool, data) => {  
        props.changeModalVisible(bool);
        props.setData(data);
    }

    return (
        <TouchableOpacity
        disabled={true}
        style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text 
                        style={[styles.text, {fontSize: 18}]}>
                        Riwayat Transaksi
                </Text>
                <Text 
                        style={styles.text}>
                        description
                </Text>
            </View>
            <View style={styles.buttonsView}>
                    <TouchableOpacity 
                        style={styles.TouchableOpacity}
                        onPress={() => closeModal(false, 'Cancel')}
                    >
                        <Text 
                            style={[styles.text, {color: 'blue'}]}
                       >Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.TouchableOpacity}
                        onPress={() => closeModal(false, 'Oke')}
                    >
                       <Text 
                            style={[styles.text, {color: 'blue'}]}
                       >Oke</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: 500,
        width: WIDTH - 50,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    textView: {
        flex: 1,
        alignItems: 'center' 
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row'
    },
    TouchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    }
})
export {SimpleModal}