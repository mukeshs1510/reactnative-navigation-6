import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      headingStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#20315f'
      },
      normalText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Nunito-Italic'
      },
      buttonStyle: {
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
      },
      svgImg: {
        transform: [{rotate: '-8deg'}]
      },
      svgImgContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }
});


export default styles;