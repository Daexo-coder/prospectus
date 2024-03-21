import React from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView} from "react-native";

export default function App() {


  return (
    <View style={styles.container}>
      <View style ={styles.innerView}>
      <View style={styles.atHeader}>
        <View style ={styles.profileView}>
        <Image source={require("./mySelf.avif")} style={styles.profilePhoto} />
        </View>
      </View>
       <View style={styles.main}>
          <ScrollView style={styles.profileDescription}>
          <View style={styles.profileIdentity}>
          <Text style={styles.Req}>Name: <Text style={styles.name}>Monehela Lichaba</Text></Text>
            <Text style={styles.Req}>Student ID: <Text style={styles.studentID}>901016759</Text></Text>
          </View>
            <View style={styles.headers}>
              <Text style={styles.Tableheaders}>course</Text>
              <Text style={styles.Tableheaders}>Credit</Text>
            </View>
            <View style={styles.tableData}>
              <View style={styles.forCourse}>
                <Text style={styles.data}>Calculus</Text>
                <Text style={styles.data}>C++ 1</Text>
                <Text style={styles.data}>Java 1</Text>
                <Text style={styles.data}>Algebra</Text>
                <Text style={styles.data}>Database</Text>
              </View>
              <View style={styles.forCredit}>
                <Text style={styles.data}>B*</Text>
                <Text style={styles.data}>A*</Text>
                <Text style={styles.data}>B-</Text>
                <Text style={styles.data}>B</Text>
                <Text style={styles.data}>D</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
        <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent:"center",
      
  },

  innerView:{
    width: "50vh",
    height: "80%",
    backgroundColor: "white",
    borderRadius: ".8em",
    borderWidth:".01em",
    borderColor:"#2f4f4f",
    padding:".4em",
  },
  atHeader:{
    width: "100%",
    height: " 22%",
    backgroundColor:"#cccccc",
  },
  profilePhoto:{
    borderRadius: "100%",
    height: "100%",
    width: "100%",
  },
  profileView:{
    height: "100%",
    width:" 35%",
  },
  profileIdentity:{
    backgroundColor:"black",
    width: "100%",
    borderWidth: ".02em",
    borderBlockColor:" white",
    borderWidth: "#2f4f4f",
  },
  Req:{
    color:"white",
  },
  profileDescription:{
    width: "100%",
    height:"40%",
    backgroundColor:"black",
    position:"absolute",
    borderBlockColor: "#2f4f4f",
    borderWidth:".01em",
    borderRadius:".2em",
  },
  main:{
    width:" 100%",
    marginTop:"2%",
    height: " 75%",
    backgroundColor:"#cccccc",
  },

  headers:{
    width: "100%",
    flexDirection: "row",
    justifyContent:"space-around",
    backgroundColor: "#A9A9A9",
    padding:0,
  },

  tableData:{
    flexDirection: "row",
    width:"100%",
    justifyContent:"space-between",
    backgroundColor:"white",
    padding:".5em",
    height: "auto",
  },
  Tableheaders:{
    fontSize:".7em",
    textTransform: "uppercase",
    color: " #8a8a8a",
    margin: 0,
    fontWeight:"bold",
    
  },
  name:{
    fontStyle:"italic",
    textTransform: " uppercase",
    fontWeight:"bold",
    fontSize:".8em",
    color: "white",
  },
  studentID:{
    fontStyle:"italic",
    fontSize:".9em",
    color: "white",
  },
});
