import { Image, ImageSource } from "expo-image"
import { StyleSheet } from "react-native";

type Props = {
    imgSource: ImageSource;
    selectedImage?: string;
}

export default function ImageViewer ({ imgSource, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image source={imageSource} style={style.image}/>;
}

const style = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})