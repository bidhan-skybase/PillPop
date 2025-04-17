import {createTheme} from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        backgroundColor: '#1F2937',
        width: '100%',
        borderRadius: 8,
        height: 42,
      },
      titleStyle: {
        fontSize: 16,
        fontWeight:'600'
      },
    },
    Text: {
      style: {
        color: '#1F2937',
        fontFamily:"Montserrat",
        fontWeight:"400",
        fontSize: 16,
      },
      h4Style:{
        fontWeight:"600"
      },
    },
    Input: {
      inputContainerStyle: {
        borderBottomWidth: 0,
      },
      inputStyle: {
        borderWidth: 1,
        borderColor: '#6E6E73',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: '400',
      },
    }
  },
});

export default theme;
