import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [Aadhar, setAadhar] = useState('');
 const [PAN, setPAN] = useState('');

 const [image, setImage] = useState(null);
 const[pimage,setpimage]=useState(null);

 const [image1, setImage1] = useState(false);
 const [image2, setImage2] = useState(false);
//  const [final,setfinal]=useState(true)
 
 const pickImage = async () => {
  
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  }
  );

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
    setImage1(true)
    
  }
  else {
       alert('You did not select any image.');
     }
     
};
const pickImagep = async () => {
  
  let result1 = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  
  console.log(result1);

  if (!result1.canceled) {
    setpimage(result1.assets[0].uri);
    setImage2(true)
  }
  else {
       alert('You did not select any image.');
     }
     
};

 
 var a= Number(Aadhar);
 var b= Number(PAN);
console.log("aadharLen :",Aadhar.length)
console.log("panlength:",PAN.length)
var e=Aadhar;
var a=PAN;

function myAadhaar(e){
  setAadhar(e);
  console.log("E Value :",e);
      if(e.length===12 && e!==undefined && e!=null){
        console.log("Success");
      }
  }
 function mypan(a){
    setPAN(a);
    console.log("A Value :",a);
        if(a.length===10 && a!==undefined && a!=null){
          console.log("Success");
        }
    }
    const submit =()=>{
      if((e.length===12 && e!==undefined && e!=null)&&(a.length===10 && a!==undefined && a!=null)&&(image1==true)&&(image2==true)){
      
      alert("sucesss");
     
      }
      else{
        alert("failed");
      }
  }

  

return (
    <View style={styles.container}>
      
     <Text style={{fontSize:24,marginBottom:10,height:30,marginLeft:9,marginTop:25,}}> validation: </Text>
           <TextInput placeholder="Aadhar Number" 
           maxLength={12}
           keyboardType="numeric"
           value={Aadhar}
          onChangeText={(e)=> {myAadhaar(e)}}
           
          style={{marginBottom:20,paddingRight:130,borderBottomWidth:2,height:40,
           }}></TextInput>
           
            <TextInput
             placeholder="PAN Number"
             value={PAN}
             maxLength={10}
             secureTextEntry={true}
             keyboardType="numeric"
          
            onChangeText={(a)=>{mypan(a)}}
            style={{marginBottom:43,paddingRight:130,borderBottomWidth:2,height:40,keyboardType:"numeric"}}></TextInput>
             
             
             <View style={{ flex: 1, alignItems: 'center',marginTop:5,
              justifyContent: 'center',backgroundColor:'aqua',
              borderRadius:10,borderColor:'navy',borderWidth:4,height:10,width:250}}>
                <ScrollView>

        <Text style={{fontSize:20,paddingLeft:21,margin:10,marginBottom:30,backgroundColor:'purple',borderRadius:30,height:31,width:160}}>Aadhar image : </Text>
          <Button title="Upload image"onPress={pickImage} />

          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          
        <Text style={{fontSize:20,paddingLeft:11,margin:10,marginBottom:30,backgroundColor:'purple',borderRadius:30,height:31,width:160}}>PAN Image : </Text>
      
      <Button title="Upload image"onPress={pickImagep} />
      {pimage && <Image source={{ uri: pimage }} style={{ width: 200, height: 200 }} />}

      </ScrollView>
    </View>
    <Button title='submit' onPress={submit}/>
         
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    borderRadius:20,
    bordercolor:'Aqua',
    borderWidth:3,
    justifyContent: 'center',
  },
});
