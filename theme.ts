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
        color: 'green',
        fontFamily:"Montserrat",
        fontWeight:"500"
      },
    },
  },
});

export default theme;
