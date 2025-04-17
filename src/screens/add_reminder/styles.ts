import {StyleSheet} from 'react-native';

const style=StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 9,
    },
    safeAreaView:{
        flex:1,
        backgroundColor:"white",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    dayButton:{
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10,
    },
    chip: {
        height:36,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        marginRight: 10,
    },
    chipText: {
        fontWeight: '600',
        fontSize: 14,
    },
})

export default style;
