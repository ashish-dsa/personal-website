import {NavigationProp} from "@react-navigation/core";
import AnimatedText from "components/AnimatedText";
import {ROUTES} from "navigation/constants";
import {default as React, ReactElement} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Button, Card} from "react-native-paper";
import Swiper from "react-native-web-swiper";

interface IExampleScreen1Props {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const ExampleScreen1: React.FC<IExampleScreen1Props> = (props): ReactElement => {
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View style={styles.swiper}>
        <Swiper
          loop
          timeout={-2.5}
          controlsProps={{
            dotActiveStyle: {backgroundColor: "red"},
            dotsTouchable: true,
            prevPos: false,
            nextPos: false,
          }}>
          {[1, 1, 1].map((value, index) => {
            return (
              <Card style={styles.card} key={index}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Cover source={{uri: "https://picsum.photos/70" + index.toString()}} />
                <Card.Actions>
                  <Button mode="contained" onPress={() => props.navigation.navigate(ROUTES.ExampleScreen2)}>
                    Go to next screen
                  </Button>
                </Card.Actions>
              </Card>
            );
          })}
        </Swiper>
      </View>
      <AnimatedText />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: "100%",
  },
  card: {
    marginHorizontal: "2%",
    marginVertical: "2%",
  },
  swiper: {
    height: "90%",
  },
});

export default ExampleScreen1;
