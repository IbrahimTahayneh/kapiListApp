import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Header = ({ style = "", title = "", leftComponent, rightComponent }) => {
  const [height, setHeight] = useState(60);
  const ref = useRef();
  useEffect(() => {
    //to get the height of the middleContainer since it's height changes according to the title in it
    setHeight(ref?.current?.clientHeight || 0);
  }, [ref?.current?.clientHeight]);

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.innerContainer]}>
        <View
          style={[styles.leftContainer]}
          isLeftComponentExist={leftComponent ? true : false}
        >
          {leftComponent}
        </View>
        <View style={[styles.middleContainer]}>
          <Text style={[styles.title]} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View
          style={[styles.rightContainer]}
          isLeftComponentExist={rightComponent ? true : false}
        >
          {rightComponent}
        </View>
      </View>
    </View>
  );
};

export default React.memo(Header);
