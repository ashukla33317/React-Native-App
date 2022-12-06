import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import CourseData from './CourseData';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ContactUs = ({navigation}) => {


  const [visible, setVisible] = React.useState(false);

  const profileData=()=>{
    return(
      setVisible(true)
    )
  }
  return (
    <View >
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require("../Image/multiply.png")}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      {/* <CourseData/> */}
      <CourseData />
      </ModalPoup>
      <TouchableOpacity onPress={profileData}>
            <Image style={styles.Image} source={require("../Image/profile1.png")}/>
          
      </TouchableOpacity>

    </View>
  );
};

// setVisible(true)
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection:"column",
    justifyContent:"flex-end",
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    elevation: 20,
    
  },
  header: {
    width: '100%',
    height:10,
    alignItems: 'flex-end'
  }
  
});

export default ContactUs;