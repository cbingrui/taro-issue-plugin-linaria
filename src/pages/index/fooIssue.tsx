import React from "react";
import { styled } from "linaria/react";
import { View, Text } from "@tarojs/components";

const FooStyleComp = styled(View)`
  color: red;
`;

const Index: React.FC = () => {
  return (
    <View>
      <Text>foo</Text>
      <FooStyleComp>bar</FooStyleComp>
    </View>
  );
};
export default Index;
