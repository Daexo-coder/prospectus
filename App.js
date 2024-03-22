import React from "react-native"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default function App() {
let rating = 1;
let setRating;
function increaseRate(){
    setRating = rating + 1;
    return setRating;
}
function DecreaseRate(){
    setRating=rating - 1;
    return setRating;
}


  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.schoolLabel}>
          <Image source={require("./Limkokwing.jpg")} style={styles.schoolLogo}/>
        </View>
            <View style={styles.courseContainer}>
              <View style={styles.descriptionPanel}>
                <Text style={styles.header1}>
                  Fashion textiles
                </Text>
                <Text style={styles.courseDetails}>
                  Fashion and textiles is the primary culture of every nation,
                  hence we need very creative designers of clothes, Limkowing 
                  offers you the best of this.
                </Text>
                <View style={styles.requirements}>
                  <Text style={styles.CR}>1. minimum of D credit in math</Text>
                  <Text style={styles.CR}>2. minimum of D credit in English</Text>
                  <Text style={styles.CR}>3. minimum of C  credit in design subjects</Text>
                  <Text style={styles.CR}>4. minimum of E credit in all other subjects</Text>
                </View>
                <View style={styles.rateCourse}>
                  <Text style={styles.rate}>Rate course out of 6   </Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={DecreaseRate()}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.RR}>{setRating}</Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={increaseRate()}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  
                </View>
              </View>
                <View style={styles.photoPanel}>
                <Image source={require("./fashion.jpg")} style={styles.imageStyles}/>
                </View>
              </View>
            <View style={styles.courseContainer}>
              <View style={styles.descriptionPanel}>
                <Text style={styles.header1}>
                 Tourism management
                </Text>
                <Text style={styles.courseDetails}>
                 Tourism management is the force of attraction in every country,
                  hence one source of countries revevue, Limkokwing offers you 
                  the best af this.
                </Text>
                <View style={styles.requirements}>
                  <Text style={styles.CR}>1. minimum of D credit in math</Text>
                  <Text style={styles.CR}>2. minimum of C credit in English</Text>
                  <Text style={styles.CR}>3. minimum of C  credit in design subjects</Text>
                  <Text style={styles.CR}>4. minimum of E credit in all other subjects</Text>
                </View>
                <View style={styles.rateCourse}>
                  <Text style={styles.rate}>Rate course out of 6   </Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={DecreaseRate()}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.RR}>{setRating}</Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={increaseRate()}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  
                </View>
              </View>
                <View style={styles.photoPanel}>
                <Image source={require("./tourism.jpg")} style={styles.imageStyles}/>
                </View>
              </View>
            <View style={styles.courseContainer}>
              <View style={styles.descriptionPanel}>
                <Text style={styles.header1}>
                  film Production
                </Text>
                <Text style={styles.courseDetails}>
                  Art as a whole is the reason for entertainment, from acient times
                  art has played a remarmakeble part in making people happy, Limkokwing
                  offers you that happiness.
                </Text>
                <View style={styles.requirements}>
                  <Text style={styles.CR}>1. minimum of C credit in math</Text>
                  <Text style={styles.CR}>2. minimum of C credit in English</Text>
                  <Text style={styles.CR}>3. minimum of C  credit in design subjects</Text>
                  <Text style={styles.CR}>4. minimum of C credit in all other subjects</Text>
                </View>
                <View style={styles.rateCourse}>
                  <Text style={styles.rate}>Rate course out of 6   </Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={DecreaseRate()}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.RR}>{setRating}</Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={increaseRate()}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  
                </View>
              </View>
                <View style={styles.photoPanel}>
                <Image source={require("./filmProduction.jpg")} style={styles.imageStyles}/>
                </View>
              </View>
            <View style={styles.courseContainer}>
              <View style={styles.descriptionPanel}>
                <Text style={styles.header1}>
                  fashion and textiles
                </Text>
                <Text style={styles.courseDetails}>
                  As part of art, photography can communicate with us in many
                  aspect of our life, it give life to every object it induldge in.
                  Limkokwing offers you the best of this.
                </Text>
                <View style={styles.requirements}>
                  <Text style={styles.CR}>1. minimum of C credit in math</Text>
                  <Text style={styles.CR}>2. minimum of C credit in English</Text>
                  <Text style={styles.CR}>3. minimum of C  credit in design subjects</Text>
                  <Text style={styles.CR}>4. minimum of D credit in all other subjects</Text>
                </View>
                <View style={styles.rateCourse}>
                  <Text style={styles.rate}>Rate course out of 6   </Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={DecreaseRate()}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.RR}>{setRating}</Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={increaseRate()}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  
                </View>
              </View>
                <View style={styles.photoPanel}>
                <Image source={require("./graphicDesign.jpg")} style={styles.imageStyles}/>
                </View>
              </View>
            <View style={styles.courseContainer}>
              <View style={styles.descriptionPanel}>
                <Text style={styles.header1}>
                  Information Technology
                </Text>
                <Text style={styles.courseDetails}>
                  Technology is the core source advancement of every country, 
                  since weare in the fourth industrial revolution, we need technology 
                  now more than ever.
                </Text>
                <View style={styles.requirements}>
                  <Text style={styles.CR}>1. minimum of C credit in math</Text>
                  <Text style={styles.CR}>2. minimum of C credit in English</Text>
                  <Text style={styles.CR}>3. minimum of C  credit in design subjects</Text>
                  <Text style={styles.CR}>4. minimum of C credit in all other subjects</Text>
                </View>
                <View style={styles.rateCourse}>
                  <Text style={styles.rate}>Rate course out of 6   </Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={DecreaseRate()}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.RR}>{setRating}</Text>
                  <TouchableOpacity style={styles.Ibuttom} onPress={increaseRate()}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                  </TouchableOpacity>
                  
                </View>
              </View>
                <View style={styles.photoPanel}>
                <Image source={require("./IT.jpg")} style={styles.imageStyles}/>
                </View>
              </View>
      </View>
      <StatusBar style="auto" />
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999999",
    alignItems: "center",
    justifyContent:"center",
  },
  RR:{
    marginLeft:"2.2em",
    fontSize:"1.4em",
    fontWeight:"800",
  },
  innerView:{
    backgroundColor:"rgba(234, 242, 249, 0.651)",
    height:"90vh",
    width:"60%",
    padding:".5em",
    overflow:"scroll",
    overflowX:"hidden",
    
  
  },
  courseContainer:{
    backgroundColor:"black",
    width:"100%",
    height:"35%",
    flexDirection:"row",
    justifyContent:"none",
    marginBottom:".3em"
  },
  descriptionPanel:{
    backgroundColor:"white",
    width:"50%",
    height:"100%",
  },
  photoPanel:{
    backgroundColor:"green",
    width:"50%",
    height:"100%",
  },
  imageStyles:{
    width:"100%",
    height:"100%",
  },

  header1:{
    backgroundColor:"black",
    color:"white",
    textTransform:"uppercase",
    textAlign:"center",
   
  },
  courseDetails:{
    padding:".5em",
    fontWeight:"500",
  },
  requirements:{
    padding:".5em",
    fontStyle:"italic",
  },
  schoolLabel:{
    height:"20%",
    width:"100%",
    marginBottom:"1em",
  },
  schoolLogo:{
    height:"100%",
    width:"100%",
    objectFit:"fill",
  },
  rateCourse:{
    width:"100%",
    height:"15%",
    borderTopWidth:".1em",
    borderColor:"#8a8a8a",
    borderBottomWidth:".1em",
    flexDirection:"row",
  },
  Ibuttom:{
    marginLeft:"3em",
    size:"1em",
  }


});
