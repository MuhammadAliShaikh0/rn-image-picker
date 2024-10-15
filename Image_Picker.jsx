    <uses-permission android:name="android.permission.launchCamera" />(android manifest)

import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { launchCamera } from 'react-native-image-picker';

const Image_Picker = () => {
    const [captureImage,setCaptureImage] = useState('')
    const open_camera = async ()=>{
        const result = await launchCamera();
        console.log(result)
        if(result){
            const img_src = result.assets[0].uri;
            setCaptureImage(img_src)
        }
    }

  return (
    <View style={{gap:10,justifyContent:"center",}}>
        <View>
            {
                captureImage?(
                    <Image
                     source={{uri: captureImage}}
                     width={200}
                     height={200}
                     resizeMode='cover'
                    />
                ):null
            }
            {/* <Image source={{uri:captureImage}} style={{width:200, height:200}} resizeMode='cover'/> */}
        </View>
      <TouchableOpacity onPress={open_camera}>
        <Text>
            Open Camera
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
            Open Library
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Image_Picker
