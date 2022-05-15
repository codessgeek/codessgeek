import React, { useState } from "react";
import { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import TotalUserComp from "../components/UserIconComp/TotalUserComp";
import UserIconComp from "../components/UserIconComp/UserIconComp";

function ProfilePage(props) {
        const [isUserTag, setIsUserTag]=useState(true);
        const toggle = () =>{
            setIsUserTag((pre)=>!pre);
        }
  return (
      
    <View style={styles.container}>
      <View style={styles.scrollArea2}>
        <ScrollView
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
          <View style={styles.profileRow}>
            <Text style={styles.profile}>Profile</Text>
            <View style={styles.addUserIcon}>
              <View style={styles.ellipse4Stack}>
                <Svg viewBox="0 0 30.43 30" style={styles.ellipse4}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(198,198,198,1)"
                    cx={15}
                    cy={15}
                    rx={15}
                    ry={15}
                  ></Ellipse>
                </Svg>
                <FeatherIcon name="plus" style={styles.icon6}></FeatherIcon>
              </View>
            </View>
          </View>
          <View style={styles.userProfile}>
            <View style={styles.rect}>
              <View style={styles.cancleDoneOption}>
                <View style={styles.cancelRow}>
                  <Text style={styles.cancel}>Cancel</Text>
                  <Text style={styles.done}>Done</Text>
                </View>
              </View>
              <View style={styles.profileForm}>
                <View style={styles.userProfileName}>
                  <Text style={styles.name}>Name :</Text>
                  <TextInput
                    placeholder="name"
                    clearButtonMode="always"
                    autoCapitalize="words"
                    style={styles.placeholder}
                  ></TextInput>
                </View>
                <View style={styles.userProfileBirthday}>
                  <Text style={styles.birthday}>Birthday :</Text>
                  <TextInput
                    placeholder="15 - 10 - 2015"
                    clearButtonMode="always"
                    autoCapitalize="words"
                    style={styles.placeholder1}
                  ></TextInput>
                </View>
                <View style={styles.userProfileGender}>
                  <View style={styles.group4}>
                    <Text style={styles.gender}>Gender:</Text>
                    <View style={styles.group8}>
                      <View style={styles.maleOptionGroup}>
                        <View style={styles.icon2Row}>
                          <IoniconsIcon
                            name="md-radio-button-on"
                            style={styles.icon2}
                          ></IoniconsIcon>
                          <Text style={styles.male}>Male</Text>
                        </View>
                      </View>
                      <View style={styles.femaleOptionGroup}>
                        <View style={styles.icon3Row}>
                          <IoniconsIcon
                            name="md-radio-button-off"
                            style={styles.icon3}
                          ></IoniconsIcon>
                          <Text style={styles.female}>Female</Text>
                        </View>
                      </View>
                      <View style={styles.otherOptionGroup}>
                        <View style={styles.icon4Row}>
                          <IoniconsIcon
                            name="md-radio-button-off"
                            style={styles.icon4}
                          ></IoniconsIcon>
                          <Text style={styles.other}>Other</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.displayAsACurrentUserCheckbox}>
                  <View style={styles.icon5Row}>
                    <MaterialCommunityIconsIcon
                      name="checkbox-marked-circle-outline"
                      style={styles.icon5}
                    ></MaterialCommunityIconsIcon>
                    <Text style={styles.displayCurrentUser}>
                      Display as a current user
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.removeContent}>Remove content</Text>
          <View style={styles.rect2}>
            <View style={styles.removeContentGroup}>
              <View style={styles.deleteUserCb}>
                <View style={styles.icon13Row}>
                  <MaterialIconsIcon
                    name="check-box"
                    style={styles.icon13}
                  ></MaterialIconsIcon>
                  <Text style={styles.deleteThisUser}>Delete this user</Text>
                </View>
              </View>
              <View style={styles.deleteAllMedicineCb}>
                <View style={styles.icon12Row}>
                  <MaterialIconsIcon
                    name="check-box"
                    style={styles.icon12}
                  ></MaterialIconsIcon>
                  <Text style={styles.deleteAllMedicine}>
                    Delete all medicine
                  </Text>
                </View>
              </View>
              <View style={styles.disableAllSchdulesCb}>
                <View style={styles.icon14Row}>
                  <MaterialIconsIcon
                    name="check-box"
                    style={styles.icon14}
                  ></MaterialIconsIcon>
                  <Text style={styles.disableAllSchdules2}>
                    Disable all schdules
                  </Text>
                </View>
              </View>
              <View style={styles.deleteAllSchdulesCb}>
                <View style={styles.icon11Row}>
                  <MaterialIconsIcon
                    name="check-box"
                    style={styles.icon11}
                  ></MaterialIconsIcon>
                  <Text style={styles.deleteAllSchdules2}>
                    Delete all schdules
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.confirmButtonRow}>
              <View style={styles.confirmButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.confirm}>confirm</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cancelButton}>
                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.cancel3}>cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.horizontalScrollGroup}>
        <View style={styles.group15}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
               
                <View style={styles.currentUserProfileComponentRow}>
                        <View style={styles.currentUserProfileComponent}>
                        <View style={styles.ellipseStack}>
                            <Svg viewBox="0 0 60.43 60" style={styles.ellipse}>
                            <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(198,198,198,1)"
                                cx={30}
                                cy={30}
                                rx={30}
                                ry={30}
                            ></Ellipse>
                            </Svg>
                            <FeatherIcon name="user" style={styles.icon}></FeatherIcon>
                            <Svg viewBox="0 0 9.86 9.93" style={styles.ellipse2}>
                            <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(49,49,49,1)"
                                cx={5}
                                cy={5}
                                rx={5}
                                ry={5}
                            ></Ellipse>
                            </Svg>
                        </View>
                        <Text style={styles.mrRaja}>Mr. Raja</Text>
                        </View>
                        <View style={styles.userProfileComponent}>
                        <View style={styles.ellipse3Stack}>
                            <Svg viewBox="0 0 60.43 60" style={styles.ellipse3}>
                            <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(198,198,198,1)"
                                cx={30}
                                cy={30}
                                rx={30}
                                ry={30}
                            ></Ellipse>
                            </Svg>
                            <FeatherIcon name="user" style={styles.icon1}></FeatherIcon>
                        </View>
                        <Text style={styles.mrsRaja}>Mrs. Raja</Text>
                        </View>
                        <TotalUserComp/>
                </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  scrollArea2: {
    width: 335,
    height: 555,
    backgroundColor: "rgba(241,241,241,1)",
    marginTop: 185,
    marginLeft: 13
  },
  scrollArea2_contentContainerStyle: {
    height: 555,
    width: 335
  },
  profile: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    textDecorationLine: "underline",
    marginTop: 4
  },
  addUserIcon: {
    width: 30,
    height: 30,
    marginLeft: 227
  },
  ellipse4: {
    top: 0,
    width: 30,
    height: 30,
    position: "absolute",
    left: 0
  },
  icon6: {
    top: 3,
    left: 3,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  ellipse4Stack: {
    width: 30,
    height: 30
  },
  profileRow: {
    height: 30,
    flexDirection: "row",
    marginLeft: 11,
    marginRight: 13
  },
  userProfile: {
    width: 335,
    height: 312,
    marginTop: 9
  },
  rect: {
    width: 335,
    height: 312,
    backgroundColor: "#E6E6E6"
  },
  cancleDoneOption: {
    width: 317,
    height: 19,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 10
  },
  cancel: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 16
  },
  done: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 16,
    marginLeft: 230
  },
  cancelRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  profileForm: {
    width: 317,
    height: 259,
    justifyContent: "space-around",
    marginTop: 13,
    marginLeft: 10
  },
  userProfileName: {
    width: 317,
    height: 58
  },
  name: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 317,
    backgroundColor: "rgba(197,193,193,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  userProfileBirthday: {
    width: 317,
    height: 58
  },
  birthday: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 317,
    backgroundColor: "rgba(197,193,193,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  userProfileGender: {
    width: 317,
    height: 58
  },
  group4: {
    width: 317,
    height: 58
  },
  gender: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  group8: {
    width: 317,
    height: 33,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 6
  },
  maleOptionGroup: {
    width: 60,
    height: 33,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30
  },
  male: {
    fontFamily: "roboto-500",
    color: "#121212",
    marginLeft: 6,
    marginTop: 8
  },
  icon2Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  femaleOptionGroup: {
    width: 76,
    height: 33,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 30
  },
  female: {
    fontFamily: "roboto-500",
    color: "#121212",
    marginLeft: 6,
    marginTop: 8
  },
  icon3Row: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  otherOptionGroup: {
    width: 64,
    height: 33,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 30
  },
  other: {
    fontFamily: "roboto-500",
    color: "#121212",
    marginLeft: 6,
    marginTop: 8
  },
  icon4Row: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  displayAsACurrentUserCheckbox: {
    width: 216,
    height: 33,
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 30
  },
  displayCurrentUser: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 8
  },
  icon5Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  removeContent: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    textDecorationLine: "underline",
    marginTop: 7,
    marginLeft: 11
  },
  rect2: {
    width: 335,
    height: 154,
    backgroundColor: "#E6E6E6",
    marginTop: 11
  },
  removeContentGroup: {
    width: 242,
    height: 109,
    marginLeft: 11
  },
  deleteUserCb: {
    width: 127,
    height: 25,
    flexDirection: "row",
    marginLeft: -4
  },
  icon13: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  deleteThisUser: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 4
  },
  icon13Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  deleteAllMedicineCb: {
    width: 242,
    height: 25,
    flexDirection: "row",
    marginLeft: 25
  },
  icon12: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  deleteAllMedicine: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 4
  },
  icon12Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 93
  },
  disableAllSchdulesCb: {
    width: 151,
    height: 25,
    flexDirection: "row",
    marginLeft: 60
  },
  icon14: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  disableAllSchdules2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 4
  },
  icon14Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: -4
  },
  deleteAllSchdulesCb: {
    width: 144,
    height: 25,
    flexDirection: "row",
    marginLeft: 60
  },
  icon11: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  deleteAllSchdules2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 4
  },
  icon11Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: -4
  },
  confirmButton: {
    width: 87,
    height: 24
  },
  button: {
    width: 87,
    height: 24,
    backgroundColor: "rgba(198,198,198,1)"
  },
  confirm: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    marginTop: 4,
    marginLeft: 19
  },
  cancelButton: {
    width: 68,
    height: 24,
    marginLeft: 8
  },
  button1: {
    width: 68,
    height: 24,
    backgroundColor: "rgba(198,198,198,1)"
  },
  cancel3: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    marginTop: 4,
    marginLeft: 13
  },
  confirmButtonRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 167,
    marginRight: 5
  },
  horizontalScrollGroup: {
    width: 335,
    height: 88,
    marginTop: -653,
    marginLeft: 13
  },
  group15: {
    width: 335,
    height: 88
  },
  scrollArea: {
    width: 335,
    height: 88,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    width: 335,
    height: 88,
    flexDirection: "row"
  },
  currentUserProfileComponent: {
    width: 61,
    height: 76
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  icon: {
    top: 10,
    left: 10,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  ellipse2: {
    top: 47,
    left: 47,
    width: 10,
    height: 10,
    position: "absolute"
  },
  ellipseStack: {
    width: 60,
    height: 60
  },
  mrRaja: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 61,
    fontSize: 12,
    textAlign: "center"
  },
  userProfileComponent: {
    width: 61,
    height: 76,
    marginLeft: 9
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  icon1: {
    top: 10,
    left: 10,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  ellipse3Stack: {
    width: 60,
    height: 60
  },
  mrsRaja: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 61,
    fontSize: 12,
    textAlign: "center"
  },
  currentUserProfileComponentRow: {
    height: 76,
    flexDirection: "row",
    flex: 1,
    marginRight: 193,
    marginLeft: 11,
    marginTop: 6
  }
});

export default ProfilePage;
