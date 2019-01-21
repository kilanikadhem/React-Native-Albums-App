import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ data }) => {
     const { title, artist, thumbnail_image } = data;
    return (
    <Card>   
              <CardSection>
                  <View style={styles.thumbnailContainerStyle}>
            {/* on doit creer un style pour l'image pour son affichage (obligatoire */}
                    <Image style={styles.imagethumbnailStyle} source={{ uri: thumbnail_image }} />
                  </View>
                  <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{ title }</Text>
                        <Text>{ artist }</Text>
                  </View>
              </CardSection>
    </Card>
    );
};

const styles = {
     headerContentStyle: {
         flexDirection: 'column',
         justifyContent: 'space-around',
         

     },

     imagethumbnailStyle: {
            height: 50,
            width: 50
     },
     
     headerTextStyle: {
        fontSize: 18,
     },

     thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
     }
};

export default AlbumDetail;
